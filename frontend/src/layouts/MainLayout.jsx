import { Outlet } from 'react-router'
import SideBar from '../compoments/SideBar'

function MainLayout() {
  return (
    <>
    <div>
      <h4>App TopBar</h4>
    </div>

    <SideBar />
    
    <main>
      <Outlet />
    </main>
    </>
  )
}

export default MainLayout
