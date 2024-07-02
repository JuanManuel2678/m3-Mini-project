import { useEffect, useState } from "react";


export const useData = () => {
    const [data, setData] = useState([])
    const [search, setSearch] = useState({ name: "" });

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
        setCharacter(filterData);
      }
      useEffect(() => {
        getData()
      }, [])
    
      function search_character() {
        const filtered = character.filter((item) =>
          item.name.toLowerCase().includes(search.name.toLowerCase())
        );
        setData(filtered);
      }

  return { data, search, search_character }
}


