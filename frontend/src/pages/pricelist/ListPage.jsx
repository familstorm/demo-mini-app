import FilterToolbar from '../../compoments/pricelist/FilterToolbar'
import PricelistTable from '../../compoments/pricelist/PricelistTable'
import '../../assets/stylesheets/pricelist.css'

import { PricelistProvider } from '../../contexts/PricelistProvider'

function PriceListPage() {

  return (
    <div className='pricelist-page'>
      <PricelistProvider>
        <FilterToolbar  />
        <PricelistTable  />
      </PricelistProvider>
    </div>
  )
}

export default PriceListPage
