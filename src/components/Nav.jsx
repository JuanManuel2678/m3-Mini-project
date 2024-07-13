import { Search } from './Search'
import logo from '/image/logo.svg'

export const Nav = ({setShowModal}) => {
  return (
    <nav className="NavBar">
        <figure>
            <img src={logo} alt="logo marca" />
        </figure>
        <Search setShowModal={setShowModal}/>
    </nav>
  )
}


