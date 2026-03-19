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
      <h1>{t('auth.login_title')}</h1>
      <div className="form-section">
        <form id="login-form" method="post" autoComplete='off'>
          <FormInput
            label={t('auth.input.email.label')}
            name="email"
            value={formData.values.email}
            placeholder={t('auth.input.email.placeholder')}
            onChange={handleChange}
            error={errors.email}
          />
          <FormInput
            label={t('auth.input.password.label')}
            name="password"
            value={formData.values.password}
            placeholder={t('auth.input.password.placeholder')}
            onChange={handleChange}
            error={errors.password}
          />
          <div className='group-field'>
            {(!isValid || loading) ? (
              <button disabled className='form-submit-btn disable' type="submit">{t('auth.btn.login')}</button>
            ) : (
              <button onClick={handleSubmit} className='form-submit-btn' type="submit">{t('auth.btn.login')}</button>
            )}
            <div className='other-link'>
              <Link to="/">{t('auth.link.register')}</Link>
              <Link to="/">{t('auth.link.forgot')}</Link>
            </div>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Login
