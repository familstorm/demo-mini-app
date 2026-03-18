import { Link, Outlet, Navigate } from 'react-router'
import Footer from '../compoments/Footer'
import Switcher from '../compoments/Switcher'
import useToken from '../hooks/token'
import { LocalizationProvider } from '../contexts/LocalizationProvider'

function AuthLayout() {
  const {token} = useToken()
  console.log('AuthLayout token:', token);

  if (token)
    return <Navigate to="/" replace />;
 
  return (
    <>
      <LocalizationProvider>
        <div className='login-layout'>
          <div className="topbar">
            <div className="container">
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
          </div>
          
          <main className='login-container'>
            <Outlet />
          </main>

          <Footer />
        </div>
      </LocalizationProvider>
    </>
  )
}

export default AuthLayout
