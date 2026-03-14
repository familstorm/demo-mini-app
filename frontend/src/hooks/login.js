import { useState, } from 'react'
import { useNavigate } from 'react-router'
import { loginApi } from '../apiClient/auth'
import useToken from './token'

const useFormLogin = () => {
  const navigate = useNavigate()
  const { saveToken } = useToken()
  const [isValid, setValid] = useState(false)
  const [loading, setLoading] = useState(() => false)
  const [errors, setErrors] = useState({ email: '', password: '' })
  const [formData, setFormData] = useState({
    values: { email: '', password: '' },
    isSubmited: false,
  })

  const updateFields = (name, value) => {
    setFormData(prev => ({
      ...prev,
      values: { ...prev.values, [name]: value }
    }))
  }

  const getValidate = (name) => {
    const [errors, isValid] = validateForm(name, formData.values[name])
    setErrors(prev => ({
      ...prev,
      [name]: errors[name]
    }))
    setValid(isValid)
  }

  const getValidates = () => {
    getValidate('email')
    getValidate('password')
  }

  const callApi = async () => {
    if (loading) return
    setLoading(true)
    const data = await loginApi(formData.values)
    console.log('resp data: ', data);
    if (data.errors) {
      setErrors(data.errors)
    }
    if (data.token) {
      saveToken(data.token)
      navigate('/')
    }

    setLoading(false)
    return data
  }

  return [formData, isValid, errors, loading, updateFields, getValidates, callApi]
}

const validateForm = (name, value) => {
  const errors = {
    email: '',
    password: ''
  }

  const regexEmail = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  // Check validate email
  if (name == 'email') {
    if (!value)
      errors.email = 'Please enter a valid email address'
    if (!regexEmail.test(value))
      errors.email = 'Please enter a valid email address'
  }
  if (name == 'password') {
    if (!value)
      errors.password = 'This field cannot be empty'
  }

  const isValid = !errors.email && !errors.password
  if (isValid) {
    errors.email = ''
    errors.password = ''
  }

  return [errors, isValid]
}

export default useFormLogin;
