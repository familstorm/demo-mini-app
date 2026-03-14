import { Outlet } from 'react-router'
import SideBar from '../compoments/SideBar'
import ProtectedRoute from '../compoments/ProtectedRoute'
import useToken from '../hooks/token'


function MainLayout() {
  const {token} = useToken()
  console.log('MainLayout token:', token);

  return (
    <>
    <ProtectedRoute token={token}>
      <div>
        <h4>App TopBar</h4>
      </div>

      <SideBar />
      
      <main>
        <Outlet />
      </main>
    </ProtectedRoute>
    </>
  )
}

export default MainLayout
