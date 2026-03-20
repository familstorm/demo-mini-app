import { Outlet } from 'react-router'
import useToken from '../hooks/token'
import TopBar from '../compoments/TopBar'
import SideBar from '../compoments/SideBar'
import ProtectedRoute from '../compoments/ProtectedRoute'
import '../assets/stylesheets/responsive.css'
import { LocalizationProvider } from '../contexts/LocalizationProvider'

function MainLayout() {
  const {token} = useToken()
  console.log('MainLayout token:', token);

  return (
    <>
      <LocalizationProvider>
        <ProtectedRoute token={token}>
          <div className='layout'>
            <TopBar />

            <div className='layout-content'>
              <div className='hide-mobile'>
                <SideBar />
              </div>
              <main className='layout-main'>
                <Outlet />
              </main>
            </div>
          </div>
        </ProtectedRoute>
      </LocalizationProvider>
    </>
  )
}

export default MainLayout
