import { Nav } from "./components/Nav";
import CardList from "./components/CardList";
import Card from "./components/Card";

import { useData } from "./hook/useData";


function App() {
const {
  data,
  search,
  setSearch,
  setLocation,
  setGuests,
  handleSearch,
  setFilteredData,
  setShowModals,
  showLocationOptions,
  showGuestOptions,
  setShowLocationOptions,
  setShowGuestOptions,
  resetFilter} = useData()

  return (
    <>
    <Nav search={{search, setSearch}}/> 

    <CardList>
      {data && data.map(item => (<Card key={item.title} item={item}/>))}
    </CardList>
    </>
  )
}
export default App
