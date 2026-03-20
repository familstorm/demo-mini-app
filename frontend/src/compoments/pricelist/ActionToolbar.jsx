import { Link } from 'react-router'


function ActionToolbar() {
  return (
    <div className="action-toolbar">
      <Link to="/pricelist/create" className="btn btn-product">
        <span className='hide-tablet'>New Product</span>
        <i className="fa-solid fa-circle-plus"></i>
      </Link>
      <button className="btn btn-print">
        <span className='hide-tablet'>Print List</span>
        <i className="fa-solid fa-print"></i>
      </button>
      <button className="btn btn-mode">
        <span className='hide-tablet'>Advanced mode</span>
        <i className="fa-solid fa-toggle-on"></i>
      </button>
    </div>
  )
}

export default ActionToolbar
