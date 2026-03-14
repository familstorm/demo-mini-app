import { useState, } from 'react'


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

const useFormLogin = () => {
  const [isValid, setValid] = useState(false)
  const [errors, setErrors] = useState({ email: '', password: '' })
  const [formData, setFormData] = useState({
    values: { email: '', password: '' },
    isSubmited: false,
  })

  const updateFields = (name, value) => {
    setFormData(prev => ({
      ...prev,
      values: {
        ...prev.values,
        [name]: value
      }
    }))
  }

  const touchSubmited = () => {
    setFormData(prev => ({
      ...prev,
      isSubmited: !prev.isSubmited
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

  return [formData, updateFields, getValidates, isValid, errors, touchSubmited]
}

export default useFormLogin;
