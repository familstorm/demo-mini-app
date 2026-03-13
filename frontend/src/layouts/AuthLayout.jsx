import { Outlet } from 'react-router'
import Footer from '../compoments/Footer'
import TopBar from '../compoments/TopBar'

function AuthLayout() {
  return (
    <>
    <div className='login-layout'>
      <TopBar />
      
      <main className='login-container'>
        <Outlet />
      </main>

      <Footer />
    </div>
    </>
  )
}

export default AuthLayout
