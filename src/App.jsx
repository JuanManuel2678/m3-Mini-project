import { Nav } from "./components/Nav";
import CardList from "./components/CardList";
import Card from "./components/Card";
import { useData } from "./hook/useData";
import { Modal } from "./components/Modal";


function App() {
const {
  data,
  search,
  setSearch,
  handleSearch,
  filterData,
  showModal,
  setShowModal

  } = useData()

  return (
    <>
    <Nav search={search} setSearch={setSearch} handleSearch={handleSearch} setShowModal={setShowModal}/> 

    {showModal && (<Modal setShowModal={setShowModal}/>)}

    <CardList data={data} >
      {filterData && filterData.map(item => (<Card key={item.title} item={item}/>))}
    </CardList>


    </> 
  )
}
export default App
