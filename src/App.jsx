import { useEffect, useState } from "react"
import { Nav } from "./components/Nav";
import CardList from "./components/CardList";
import Card from "./components/Card";
import searchLogo from '/public/image/search.svg'


function App() {
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


  return (
    <>
    <Nav> 
    <div className="search_container">
    <input
      id="location"
      type="text"
      placeholder="Add location"
      value={search.fullLocation}
      // onClick={hanleLocationInputClick}
      onChange={(e) => setSearch({ ...search, fullLocation: e.target.value })}
    />
    <input 
      id="guest"
      type="text"
      placeholder="Add Guests"
      value={search.guests > 0 ? `${search.guests} guests` : '' }
      // onClick={handleGuestsInputclic}
      readOnly>
    </input>
    <button>
      <img src={searchLogo} alt="" />
    </button>
  </div>
   </Nav>
    <CardList>
      {data && data.map(item => (<Card key={item.title} item={item}/>))}
   </CardList>
    </>
  )
}

export default App
