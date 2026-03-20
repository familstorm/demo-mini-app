import EditableCell from './EditableCell'

function PricelistRow({ item }) {
  return (
    <>
      <tr>
        <td><i className="fa-solid fa-arrow-right icon-blue"></i></td>
          <EditableCell className='hide-mobile' itemId={item.id} cell={item.articleNo} field="articleNo" editable />
          <EditableCell itemId={item.id} cell={item.name}  field="name" editable />
          <EditableCell itemId={item.id} cell={item.price}  field="price" editable />
          <EditableCell className='hide-tablet' itemId={item.id} cell={item.inPrice}  field="inPrice" editable />
          <EditableCell className='hide-mobile' itemId={item.id} cell={item.unit.title}  field="unit" editable={false} />
          <EditableCell className='hide-mobile' itemId={item.id} cell={item.inStock}  field="inStock" editable />
          <EditableCell className='hide-tablet' itemId={item.id} cell={item.description}  field="description" editable />
        <td><i className="fa-solid fa-ellipsis icon-blue"></i></td>
      </tr>
    </>
  )
}

export default PricelistRow
