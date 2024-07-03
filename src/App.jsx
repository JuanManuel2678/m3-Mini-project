import { Nav } from "./components/Nav";
import CardList from "./components/CardList";
import Card from "./components/Card";
import { useData } from "./hook/useData";


function App() {
const {
  data,
  search,
  setSearch,
  handleSearch,
  filterData

  } = useData()

  return (
    <>
    <Nav search={search} setSearch={setSearch} handleSearch={handleSearch}/> 

    <CardList data={data} >
      {filterData && filterData.map(item => (<Card key={item.title} item={item}/>))}
    </CardList>


    </> 
  )
}
export default App
