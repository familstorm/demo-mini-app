import { useState } from 'react';
import { Link, Outlet, Navigate } from 'react-router'
import { useTranslation } from 'react-i18next';

import Footer from '../compoments/Footer'
import Switcher from '../compoments/Switcher'
import useToken from '../hooks/token'
import { LocalizationProvider } from '../contexts/LocalizationProvider'

function AuthLayout() {
  const { t } = useTranslation();
  const {token} = useToken()

  const [isOpen, setIsOpen] = useState(false)

  const handleOpenMenu = () => {
    console.log('handle open menu:', isOpen);
    setIsOpen(!isOpen)
  }

  const closeMenu = () => {
    setIsOpen(false)
  }

  if (token)
    return <Navigate to="/" replace />;
 
  return (
    <>
      <LocalizationProvider>
        <div className='login-layout'>
          <div className='hamburger hide-desktop'>
            <button onClick={handleOpenMenu}><i className='fa-solid fa-bars'></i></button>
            <div className='hide-desktop'>
              <div className={`section-menu mobile ${isOpen ? 'active animation' : ''}`}>
                <Link to='/'>{t('auth.link.home')}</Link>
                <Link to='/'>{t('auth.link.order')}</Link>
                <Link to='/'>{t('auth.link.our_customers')}</Link>
                <Link to='/'>{t('auth.link.about_us')}</Link>
                <Link to='/'>{t('auth.link.contact_us')}</Link>
              </div>
            </div>
            <div onClick={closeMenu} className={`mask ${isOpen ? 'active' : ''}`}></div>
          </div>
          <div className="topbar">
            <div className="container">
              <div className='logo hide-tablet'>
                <Link to="/">
                  <img src="./diamond.png" alt="Logo"/>
                </Link>
              </div>
              <div className='section-menu'>
                <Link className='hide-tablet' to='/'>{t('auth.link.home')}</Link>
                <Link className='hide-tablet' to='/'>{t('auth.link.order')}</Link>
                <Link className='hide-tablet' to='/'>{t('auth.link.our_customers')}</Link>
                <Link className='hide-tablet' to='/'>{t('auth.link.about_us')}</Link>
                <Link className='hide-tablet' to='/'>{t('auth.link.contact_us')}</Link>
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
