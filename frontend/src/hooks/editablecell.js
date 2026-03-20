import { useState } from 'react'
import { editableApi } from '../apiClient/pricelist'

const useEditableCell = () => {

  const [isEdit, setIsEdit] = useState(false)
  const [formData, setFormData] = useState({
    values: { field: '', value: null },
    isSubmited: false,
  })
  const [loading, setLoading] = useState(() => false)

  const updateFields = (field, value) => {
    setFormData(prev => ({
      ...prev,
      values: { field, value }
    }))
  }

  const toggleIsEdit = (value) => {
    setIsEdit(value != null ? value : !isEdit)
  }

  const callApi = async (id) => {
    if (loading) return
    setLoading(true)
    const data = await editableApi(id, formData.values)
    console.log('resp data: ', data);

    toggleIsEdit()
    setLoading(false)
    return data
  }

  return [formData, loading, isEdit, toggleIsEdit, updateFields, callApi]
}

export default useEditableCell;
