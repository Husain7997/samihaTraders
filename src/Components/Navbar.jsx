import { Link } from "react-router-dom";


const Navbar = () => {
    return (
        <div className="navbar bg-base-100">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </div>
      <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
      <li><Link to={'/about'}>about</Link></li>
    <li><Link to={'/login'}>login</Link></li>
    <li><Link to={'/registration'}>registration</Link></li>
    <li><Link to={'/contuct'}>contuct</Link></li>
    <li><Link to={'/dashboard'}>dashboard</Link></li>
      </ul>
    </div>
    <Link className="btn btn-ghost text-xl" to={'/'}>Samiha Traders</Link> 
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
    <li><Link to={'/about'}>about</Link></li>
    <li><Link to={'/login'}>login</Link></li>
    <li><Link to={'/registration'}>registration</Link></li>
    <li><Link to={'/contuct'}>contuct</Link></li>
    <li><Link to={'/dashboard'}>dashboard</Link></li>
      
    
    </ul>
  </div>
  <div className="navbar-end">
    <a className="btn">Button</a>
  </div>
</div>
    );
};

export default Navbar;