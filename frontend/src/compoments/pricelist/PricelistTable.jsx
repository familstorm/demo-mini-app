import { useContext, useEffect } from 'react'
import { PricelistContext } from '../../contexts/PricelistProvider'

import PricelistRow from "./PricelistRow"

function PricelistTable() {
  const { state, fetchApi } = useContext(PricelistContext)
  const { items, headers } = state;
  console.log('items: ', items, headers);
  
  useEffect(() => {
    fetchApi();
  }, [fetchApi]);

  const hidenTable = ['inPrice', 'description']
  const hidenMobile = ['articleNo', 'unit', 'inStock']

  return (
    <div className="pricelist-table">
      <table>
        <thead className="table-header">
          <tr>
            {headers.map((header, index) => (
              <th
                className={`${hidenTable.includes(header.id)? 'hide-tablet' : ''} ${hidenMobile.includes(header.id)? 'hide-mobile' : ''}`}
                key={index}>{header.text}</th>
            ))}
          </tr>
        </thead>
        <tbody>
            {Array.isArray(items) && items.map(item => (
              <PricelistRow key={item.id} item={item} />
            ))}
        </tbody>
      </table>
    </div>
  )
}

export default PricelistTable
