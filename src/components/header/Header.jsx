import './Header.css'
const Header = () => {
  return (
    <div className='header'>
      <div className="box search_container h-50 w-25">
      <div className="container-1 h-100 w-100">
        <span className="icon"><i className="fa fa-search"></i></span>
        <input type="search" id="search" className='h-100 w-100' placeholder="Buscar..." />
    </div>
</div>

      </div>
  )
}
export default Header