
function FormInput({
  label,
  name,
  type='text',
  value,
  placeholder,
  onChange,
  error,
}) {

  return (
    <div className='group-field'>
      { label && (
        <label htmlFor={name}>{label}</label>
      )}
      <input type={type} name={name} id={name} value={value} placeholder={placeholder} onChange={onChange} />
      { error && (
        <div className="error">
          <p>{error}</p>
        </div>
      )}
    </div>
  )
}

export default FormInput
