import { Nav } from "./components/Nav";
import CardList from "./components/CardList";
import Card from "./components/Card";
import { useData } from "./hook/useData";
import { Modal } from "./components/Modal";


function App() {
const {
  data,
  setSearch,
  search,
  showModal,
  setShowModal

  } = useData()

  return (
    <>
    <Nav setShowModal={setShowModal} setSearch={setSearch}/> 

    {showModal && (<Modal setSearch={setSearch} data={data} setShowModal={setShowModal}/>)}

    <CardList search={search} >
      {search && search.map(item => (<Card key={item.title} item={item}/>))}
    </CardList>


    </> 
  )
}
export default App
