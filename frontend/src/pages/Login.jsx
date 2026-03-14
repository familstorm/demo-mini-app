import { Link } from 'react-router'
import { useTranslation } from 'react-i18next';

import '../assets/stylesheets/login.css'
import useFormLogin from '../hooks/login';
import FormInput from '../compoments/FormInput';

function Login() {
  const { t } = useTranslation();

  const [formData, isValid, errors, loading, updateFields, getValidates, callApi] = useFormLogin()
  
  const handleChange = ((e) => {
    const { name, value } = e.target
    updateFields(name, value)
    getValidates()
  })

  const handleSubmit = async(e) => {
    e.preventDefault()
    if (formData.isSubmited)
      return

    getValidates()
    if (!isValid)
      console.log('cann\'t submit form')

    console.log('Process submit login form');

    await callApi()
    console.log(formData, errors,  !isValid || formData.isSubmited);
  }

  return (
    <div className='login-box'>
      <h1>{t('Login')}</h1>
      <div className="form-section">
        <form id="login-form" method="post" autoComplete='off'>
          <FormInput
            label="Enter your email address"
            name="email"
            value={formData.values.email}
            placeholder="Email address"
            onChange={handleChange}
            error={errors.email}
          />
          <FormInput
            label="Enter your password"
            name="password"
            value={formData.values.password}
            placeholder="Password"
            onChange={handleChange}
            error={errors.password}
          />
          <div className='group-field'>
            {(!isValid || loading) ? (
              <button disabled className='form-submit-btn disable' type="submit">Log in</button>
            ) : (
              <button onClick={handleSubmit} className='form-submit-btn' type="submit">Log in</button>
            )}
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
