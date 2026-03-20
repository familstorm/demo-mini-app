import { useState } from 'react'
import { Link } from 'react-router'
import '../assets/stylesheets/sidebar.css'
import useToken from '../hooks/token'

const menus = [
  {icon: 'fa-file-invoice', text: 'Invoices', link: '/', active: false },
  {icon: 'fa-user', text: 'Customers', link: '/', active: false },
  {icon: 'fa-gear', text: 'My Business', link: '/', active: false },
  {icon: 'fa-book', text: 'Invoice Journal', link: '/', active: false },
  {icon: 'fa-tag', text: 'Price List', link: '/pricelist', active: false },
  {icon: 'fa-file-lines', text: 'Multiple Invoicing', link: '/', active: true },
  {icon: 'fa-circle-xmark', text: 'Unpaid Invoices', link: '/', active: false },
  {icon: 'fa-ticket', text: 'Offer', link: '/', active: false },
  {icon: 'fa-box-archive', text: 'Inventory Control', link: '/', active: false },
  {icon: 'fa-table-cells', text: 'Member Invoicing', link: '/', active: false },
  {icon: 'fa-cloud-arrow-up', text: 'Import/Export', link: '/', active: false },
]

function SideBar() {
  const [toggler, setToggler] = useState(false)
  const {clearToken} = useToken()

  const logout = () => {
    clearToken()
  }

  return(
    <>
      <div>
        <div className='hamburger hide-desktop'>
          <button onClick={() => setToggler(!toggler)}><i className='fa-solid fa-bars'></i></button>
        </div>

        <div className={`sidebar custom-responsive ${toggler ? 'active': ''}`}>
          <div className='container'>
            <h4 className='hide-tablet'>Menu</h4>
            <hr className='hide-tablet'/>
            <div className="sidebar-menu">
              {menus.map((item, index) => (
                <Link to={item.link} key={index} className={`menu-item ${item.active ? 'active' : ''}`}>
                  <i className={`fa-solid ${item.icon}`}></i>
                  {item.text && <span>{item.text}</span>}
                </Link>
              ))}
              <Link className='menu-item' onClick={logout}>
                <i className='fa-solid fa-right-from-bracket'></i>
                <span>Log out</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default SideBar
