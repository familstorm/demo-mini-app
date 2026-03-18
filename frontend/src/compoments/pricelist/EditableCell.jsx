import { usePricelist } from '../../contexts/PricelistProvider';
import useEditableCell from '../../hooks/editablecell';

function EditableCell({ cell, field, editable, itemId }) {
  const { fetchApi } = usePricelist()
  
  const [formData, _, isEdit, toggleIsEdit, updateFields, callApi] = useEditableCell()

  const handleDoubleClick = (field, value) => {
    if (!editable) return
    updateFields(field, value)
    toggleIsEdit(true)
  }

   const handleChange = ((e) => {
    const {  value } = e.target
    console.log('change:', name, value);
    updateFields(field, value)
  })

  const handleBlur = async (e) => {
    e.preventDefault()
    if (formData.isSubmited)
      return

    await callApi(itemId)
    reloadList()
    console.log(formData, formData.isSubmited);
  }

  const reloadList = () => {
    fetchApi()
  }

  return (
    <>
      <td onDoubleClick={() => handleDoubleClick(field, cell, editable)}>
        {
          editable && isEdit ? (
            <div className="cell-content">
              <input
                className='input-editable'
                autoFocus
                name={field}
                value={formData.values.value}
                onChange={handleChange}
                onBlur={handleBlur}
                onKeyDown={(e) => e.key === 'Enter' && handleBlur(e)}
              />
            </div>
          ): (
            <div className="cell-content">{cell}</div>
          )
        }
      </td>
    </>
  )
}

export default EditableCell
