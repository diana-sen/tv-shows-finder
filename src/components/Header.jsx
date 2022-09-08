import '../styles/header.css'
function Header () {
  /* logics and hooks */
  /* views */
  return (
    <nav className='navbar navbar-expand-lg'>
      <div className='container-fluid'>
        <button className='navbar-toggler' type='button' aria-label='Toggle navigation'>
          <span className='navbar-toggler-icon' />
        </button>
        <a className='navbar-brand' href='#'>Tv Shows Finder</a>
        <div className='collapse navbar-collapse'>
          <ul className='navbar-nav me-auto mb-2 mb-lg-0'>
            <li className='nav-item'>
              <a className='nav-link active' aria-current='page' href='#'>Series</a>
            </li>
          </ul>
          <form className='d-flex me-auto' role='search'>
            <input className='form-control me-2' type='search' placeholder='Search' aria-label='Search' />
            <button className='btn btn-outline-success' type='submit'>Search</button>
          </form>
        </div>
      </div>
    </nav>

  )
}

export default Header
