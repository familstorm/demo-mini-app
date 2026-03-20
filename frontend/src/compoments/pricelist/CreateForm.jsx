import { useContext } from 'react'
import { Link, useNavigate } from 'react-router'
import { useTranslation } from 'react-i18next';

import { PricelistCreateContext } from '../../contexts/PriceListCreateProvider';
import FormInput from '../../compoments/FormInput';
import { PRICELIST_CREATE_ACTIONS } from '../../contexts/PriceListCreateReducer';
import SeleteInput from '../SelectInput';

function CreateForm() {
  const { t } = useTranslation();
  const navigate = useNavigate()
  const { state, dispatch, submitApi, getValidates } = useContext(PricelistCreateContext)
  const { formData, errors, submited } = state;
  
  const formAttributes = [
    {type: 'text', name: 'articleNo', label: 'Article No', placehoder: 'Article No'},
    {type: 'text', name: 'name', label: 'Product/Service', placehoder: 'Product/Service'},
    {type: 'number', name: 'inPrice', label: 'In Price', placehoder: 'In Price'},
    {type: 'number', name: 'price', label: 'Price', placehoder: 'Price'},
    {type: 'number', name: 'inStock', label: 'In Stock', placehoder: 'In Stock'},
    {type: 'text', name: 'description', label: 'Description', placehoder: 'description'},
  ]

  const handleChangeInput = (e) => {
    const { name, value } = e.target
    dispatch({
      type: PRICELIST_CREATE_ACTIONS.SET_INPUT,
      payload: { name, value }
    });
  }

  const handleSubmit = async(e) => {
    getValidates(formData)

    e.preventDefault()
    if (submited)
      return
    
    await submitApi(formData)

    console.log('submit');
    navigate('/pricelist')
  }

  return(
    <>
    <div>
      <h1>{t('Create Pricelist')}</h1>
      <div className="form-section">
        {formAttributes.map((i) => (
          <FormInput 
            key={i.name}
            label={i.label}
            name={i.name}
            value={formData[i.name]}
            placeholder={i.placehoder}
            onChange={handleChangeInput}
            error={errors[i.name]}
          />

        ))}
         <SeleteInput
            label='Choose Unit'
            name="unitId"
            placeholder='Choose unit'
            value={formData['unitId']}
            onChange={handleChangeInput}
          />

        <div className='group-field'>
            <button onClick={handleSubmit} className='form-submit-btn' type="submit">Save</button>
          {/* {submited && isValid ? (
            <button disabled className='form-submit-btn' type="submit">Save</button>
          ): (
          )} */}
        </div>
      </div>
    </div>
    </>
  )
}

export default CreateForm
