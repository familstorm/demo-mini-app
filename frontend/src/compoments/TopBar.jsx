import { Link } from 'react-router'
import SideBar from './SideBar'
import Switcher from './Switcher'
import '../assets/stylesheets/topbar.css'

function TopBar() {

  return(
    <div className="topbar">
      <div className='container'>
        <div className='avatar'>
          <Link to="/">
            <img src="./diamond.png" alt="Logo"/>
          </Link>
          <div className='text-block'>
            <h4 className='text text-name'>John Andre</h4>
            <p className='text text-position'>Storfjord AS</p>
          </div>
        </div>
        <SideBar />
        <div className='section-menu'>
            <Switcher />
        </div>
      </div>
    </div>
  )
}

export default TopBar
