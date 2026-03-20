import { Link } from 'react-router'
import { useTranslation } from 'react-i18next';
import '../assets/stylesheets/footer.css'

function Footer() {
  const { t } = useTranslation();

  return(
    <div className="footer">
      <div className="footer-text-section">
        <h4>123 Fakturera</h4>
        <div className='text-section-list-link'>
            <Link to='/'>{t('auth.link.home')}</Link>
            <Link to='/'>{t('auth.link.order')}</Link>
            <Link to='/'>{t('auth.link.contact_us')}</Link>
        </div>
      </div>
      <div className="footer-copyright">
        <p>© Lättfaktura, CRO no. 638537, 2025. All rights reserved.</p>
      </div>
    </div>
  )
}

export default Footer
