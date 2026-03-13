import { Link } from 'react-router'
import '../assets/stylesheets/footer.css'

function Footer() {

  return(
    <div className="footer">
      <div className="footer-text-section">
        <h4>123 Fakturera</h4>
        <div className='text-section-list-link'>
            <Link to='/'>Home</Link>
            <Link to='/'>Order</Link>
            <Link to='/'>Contact us</Link>
        </div>
      </div>
      <div className="footer-copyright">
        <p>© Lättfaktura, CRO no. 638537, 2025. All rights reserved.</p>
      </div>
    </div>
  )
}

export default Footer
