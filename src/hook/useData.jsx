import { useEffect, useState } from "react";


export const useData = () => {
    const [data, setData] = useState([])
    const [showModal, setShowModal] = useState(false)
    const [filterData, setFilterData] = useState([]);
    const [search, setSearch] = useState({ city: ''});
    

    async function getData() {
        const rs = await fetch('stays.json');
        const rsJson = await rs.json()
    
        const filteredData = rsJson.map(item => ({
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
        
        setData(filteredData)
        setFilterData(filteredData);
      }
      useEffect(() => {
        getData()
      }, [])
    
      function handleSearch() {
        const results = data.filter(item => 
          item.city.toLowerCase().includes(city.toLowerCase()) 
        );
        setFilterData(results);
      }
  


  return {
     data,
     search,
     setSearch,
     handleSearch,
     filterData,
     showModal,
     setShowModal
    }
}

