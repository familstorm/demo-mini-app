import { Outlet, Navigate } from 'react-router'
import Footer from '../compoments/Footer'
import TopBar from '../compoments/TopBar'
import useToken from '../hooks/token'

function AuthLayout() {
  const {token} = useToken()
  console.log('AuthLayout token:', token);

  if (token)
    return <Navigate to="/" replace />;
 
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
