import { Link } from 'react-router'
import Switcher from './Switcher'
import '../assets/stylesheets/topbar.css'

function TopBar() {

  return(
    <div className="topbar">
      <div className='logo'>
        <Link to="/">
          <img src="./diamond.png" alt="Logo"/>
        </Link>
      </div>
      <div className='section-menu'>
          <Link to='/'>Home</Link>
          <Link to='/'>Order</Link>
          <Link to='/'>Our Customers</Link>
          <Link to='/'>About us</Link>
          <Link to='/'>Contact us</Link>
          <Switcher />
      </div>
    </div>
  )
}

export default TopBar
