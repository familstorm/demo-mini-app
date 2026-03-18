
function SearchToolbar() {
  return (
    <div className="search-container">
      <div className="search-group">
        <input type="text" className="search-input" placeholder="Search Article No..." />
        <button className="search-button">
          <i className="fa-solid fa-magnifying-glass"></i>
        </button>
      </div>
      <div className="search-group">
        <input type="text" className="search-input" placeholder="Search Product..." />
        <button className="search-button">
          <i className="fa-solid fa-magnifying-glass"></i>
        </button>
      </div>
    </div>
  )
}

export default SearchToolbar
