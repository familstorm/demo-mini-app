import { useContext } from 'react'
import { PricelistContext } from '../../contexts/PricelistProvider'

function SearchToolbar() {
  const { state,  setSearch, fetchSearch, clearSearch } = useContext(PricelistContext)
  const { search } = state

  const handleChange = (e) => {
    const { name, value } = e.target
    setSearch({[name]: value })
  }

  const searchSubmit = (e) => {
    e.preventDefault()
    fetchSearch()
  }

  const handleEnter = (e, key) => {
    console.log('handle', e.keyCode);
    
    if (e.keyCode == 13) {
      e.preventDefault();
      fetchSearch()
    }
    if (e.keyCode == 27) {
      clearSearch(key)
    }
  }

  return (
    <div className="search-container">
      <div className="search-group">
        <input
          type="text"
          name='articleNo'
          className="search-input"
          placeholder="Search Article No..."
          value={search.articleNo}
          onChange={handleChange}
          onKeyDown={(e) => handleEnter(e, 'articleNo')}
        />
        {search.articleNo && (
          <button onClick={() => clearSearch('articleNo')} className="clear-btn">
            <i className="fa-solid fa-xmark"></i>
          </button>
        )}
        <button onClick={(e) => searchSubmit(e)} className="search-button">
          <i className="fa-solid fa-magnifying-glass"></i>
        </button>
      </div>
      <div className="search-group">
        <input
          type="text"
          name='name'
          className="search-input"
          placeholder="Search Product..."
          value={search.name}
          onChange={handleChange}
          onKeyDown={(e) => handleEnter(e, 'name')}
        />
        {search.name && (
          <button onClick={() => clearSearch('name')} className="clear-btn">
            <i className="fa-solid fa-xmark"></i>
          </button>
        )}
        <button onClick={(e) => searchSubmit(e)} className="search-button">
          <i className="fa-solid fa-magnifying-glass"></i>
        </button>
      </div>
    </div>
  )
}

export default SearchToolbar
