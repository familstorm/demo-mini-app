import { Link } from 'react-router'

import '../assets/stylesheets/login.css'

function Login() {
  return (
    <div className='login-box'>
      <h1>Log in</h1>
      <div className="form-section">
        <form id="login-form" method="post" autoComplete='off'>
          <div className='group-field'>
            <label htmlFor="email">Enter your email address</label>
            <input type="email" name="email" id="email" placeholder='Email address' />
            <div className="error">
              <p>Please enter a valid email address</p>
            </div>
          </div>
          <div className='group-field'>
            <label htmlFor="password">Enter your password</label>
            <input type="password" name="password" id="password" placeholder='Password' />
            <div className="error">
              <p>Please enter a valid email address</p>
            </div>
          </div>
          <div className='group-field'>
            <button className='form-submit-btn' type="submit">Log in</button>
            <div className='other-link'>
              <Link to="/">Register</Link>
              <Link to="/">Forgotten password?</Link>
            </div>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Login
