import { Search } from './Search'
import logo from '/image/logo.svg'

export const Nav = ({children}) => {
  return (
    <nav className="NavBar">
        <figure>
            <img src={logo} alt="logo marca" />
        </figure>
        {children}
    </nav>
  )
}


