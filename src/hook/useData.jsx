import { useEffect, useState } from "react";


export const useData = () => {
    const [data, setData] = useState([])
    const [search, setSearch] = useState([]);
    
    const [showModal, setShowModal] = useState(false)
    
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
        photo: item?.photo
        }));
        
        setData(rsJson)
        setSearch(rsJson);
      }
      useEffect(() => {
        getData()
      }, [])
    

  return {
     data,
     search,
     setSearch,
     showModal,
     setShowModal
    }
}

