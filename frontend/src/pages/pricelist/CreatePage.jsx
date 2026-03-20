import '../../assets/stylesheets/pricelist.css'

import { PricelistCreateProvider } from '../../contexts/PriceListCreateProvider'
import CreateForm from '../../compoments/pricelist/CreateForm'

function PriceListCreate() {

  return (
    <div className='pricelist-page'>
      <PricelistCreateProvider>
        <CreateForm />
      </PricelistCreateProvider>
    </div>
  )
}

export default PriceListCreate
