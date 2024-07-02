import { useEffect, useState } from "react";


export const useData = () => {
    const [data, setData] = useState([])
    const [filterData, setFilterData] = useState([]);
    const [search, setSearch] = useState({ city: '', fullLocation: '', guests: 0 });
    const [location, setLocation] = useState('');
    const [guests, setGuests] = useState(0);
    const [showModals, setShowModals] = useState(false);
    const [showLocationOptions, setShowLocationOptions] = useState(false);
    const [showGuestOptions, setShowGuestOptions] = useState(false);
    const [hasSearched, setHasSearched] = useState(false); 

    async function getData() {
        const rs = await fetch('stays.json');
        const rsJson = await rs.json()
    
        const filterData = rsJson.map(item => ({
        city: item?.city,
        country: item?.country,
        superHost: item?.superHost,
        title: item?.title,
        rating: item?.rating,
        maxGuests: item?.maxGuests,
        type: item?.type,
        beds: item?.beds,
        image: item?.photo
        }));
        
        setData(filterData)
        setFilteredData(filterData);
      }
      useEffect(() => {
        getData()
      }, [])
    
      function handleSearch() {
        setHasSearched(true);  
        const city = search.city.split(',')[0].trim(); 
        const guestNumber = parseInt(search.guests, 10);
        const results = data.filter(char => 
          char.city.toLowerCase().includes(city.toLowerCase()) &&
          char.maxGuests >= guestNumber
        );
        setFilterData(results);
        setShowModals(false);
      }
    
      function reset() {
        setFilterData(data);
        setSearch({ city: '', fullLocation: '', guests: 0 });
        setLocation('');
        setGuests(0);
        setShowLocationOptions(false);
        setShowGuestOptions(false);
        setHasSearched(false); 
      }


  return {
     data,
     search,
     setSearch,
     setLocation,
     setGuests,
     handleSearch,
     setFilterData, //setFilteredData
     setShowModals,
     showLocationOptions,
     showGuestOptions,
     setShowLocationOptions,
     setShowGuestOptions,
     reset, //resetfilters
    }
}


