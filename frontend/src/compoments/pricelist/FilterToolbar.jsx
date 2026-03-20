import ActionToolbar from './ActionToolbar'
import SearchToolbar from './SearchToolbar'

function FilterToolbar({params}) {

  return (
    <div className='filter-toolbar'>
      <SearchToolbar params={params} />
      <ActionToolbar params={params} />
    </div>
  )
}

export default FilterToolbar
