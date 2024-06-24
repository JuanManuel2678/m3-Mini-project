import { useEffect, useState } from "react"


function App() {
  const [data, setData] = useState([])


  async function getData() {
    const rs = await fetch('stays.json');
    const rsJson = await rs.json()

    const filterData = rsJson.results.map(item => ({
      id: item?.id,
      status: item?.status,
      img: item?.image,
      name: item?.name,
      origin: item?.origin?.name,
      species: item?.species,
      gender: item?.gender
    }));
    
    setData(getData)
    console.log(rsJson)
  }
  useEffect(() => {
    getData()
  }, [])


  return (
    <>
    
    </>
  )
}

export default App
