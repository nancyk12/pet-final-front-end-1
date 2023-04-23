import { NavLink } from 'react-router-dom';


function StyledNavBar(){
  return (
      <nav className="navbar">
        <NavLink to='/'>Home</NavLink>
        <NavLink to='/about'>About</NavLink>
        <NavLink to='/products'>Products</NavLink>
        <NavLink to='/login'>Login</NavLink>
        <NavLink to='/signup'>Sign Up</NavLink>
      </nav>
  )
}

export default StyledNavBar;