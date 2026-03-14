import { useState } from 'react';
import { Link } from 'react-router'
import { useTranslation } from 'react-i18next';

import '../assets/stylesheets/login.css'
import useFetch from '../apiClient/useFetch';
import FormInput from '../compoments/FormInput';

function Login() {
  const { t } = useTranslation();

  const [data] = useFetch("https://jsonplaceholder.typicode.com/posts/1", 'GET');

  console.log(data);
  

  const [formData] = useState({
    values: {email: '', password: ''},
    errors: {email: 'Errrro', password: ''},
    isSubmited: false,
  })

  const handleChange = (e) => {
    const { name, value } = e.target
    // setFormData(prev => ({
    //   ...prev.values,
    //   [name]: value
    // }))

    console.log(name, value)
    // console.log(formData, );
  }

  const handleSubmit = async(e) => {
    e.preventDefault()

    // const payload = {
    //   email: formData.email,
    //   password: formData.password
    // }
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
            error={formData.errors.email}
          />
          <FormInput
            label="Enter your password"
            name="password"
            value={formData.values.password}
            placeholder="Password"
            onChange={handleChange}
            error={formData.errors.password}
          />
          <div className='group-field'>
            <button onClick={handleSubmit} className='form-submit-btn' type="submit">Log in</button>
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
