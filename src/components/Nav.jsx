import { Search } from './Search'
import logo from '/image/logo.svg'

export const Nav = ({search, setSearch}) => {
  return (
    <nav className="NavBar">
        <figure>
            <img src={logo} alt="logo marca" />
        </figure>
        <Search  search={{search, setSearch}}/>
    </nav>
  )
}


