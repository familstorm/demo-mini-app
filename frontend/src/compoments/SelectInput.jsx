
function SeleteInput({
  label,
  name,
  value,
  placeholder,
  error,
  onChange,
}) {

  return (
    <div className='group-field selete-group'>
      { label && (
        <label htmlFor={name}>{label}</label>
      )}

      <select name="unitId" value={value} onChange={onChange}>
        <option value="0">{placeholder}</option>
        <option value="1">Kilomter</option>
      </select>

      {/* <input type={type} name={name} id={name} value={value} placeholder={placeholder} onChange={onChange} onFocus={onFocus} /> */}
      { error && (
        <div className="error">
          <p>{error}</p>
        </div>
      )}
    </div>
  )
}

export default SeleteInput
