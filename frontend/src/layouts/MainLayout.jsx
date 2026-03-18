import { Outlet } from 'react-router'
import useToken from '../hooks/token'
import TopBar from '../compoments/TopBar'
import SideBar from '../compoments/SideBar'
import ProtectedRoute from '../compoments/ProtectedRoute'


function MainLayout() {
  const {token} = useToken()
  console.log('MainLayout token:', token);

  return (
    <>
    <ProtectedRoute token={token}>
      <div className='layout'>
        <TopBar />

        <div className='layout-content'>
          <SideBar />
          <main className='layout-main'>
            <Outlet />
          </main>
        </div>
      </div>
      
    </ProtectedRoute>
    </>
  )
}

export default MainLayout
