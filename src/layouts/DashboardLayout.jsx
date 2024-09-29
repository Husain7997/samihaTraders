import { useState } from "react";
import { Link, Outlet } from "react-router-dom";
import { AiOutlineFullscreenExit } from "react-icons/ai";
import { CiMenuFries } from "react-icons/ci";
import { MdCategory, MdCreditScore, MdOutlineDashboardCustomize, MdOutlinePeopleAlt } from "react-icons/md";
import { FaList, FaProductHunt, FaShippingFast, FaUser } from "react-icons/fa";
import { SiExpensify } from "react-icons/si";
import { LiaPercentageSolid } from "react-icons/lia";
import { TbTruckReturn } from "react-icons/tb";
import { VscGitPullRequestCreate } from "react-icons/vsc";
import { BsFilePostFill } from "react-icons/bs";

const DashboardLayout = () => {
  const [open, setOpen] = useState(true);


    return (
        <div className="">
      <div className="navbar bg-base-200">
  <div className="navbar-start">
    <div className="dropdown flex items-center">
    <a className="btn btn-ghost text-xl"><Link to="/">Samiha Traders</Link></a>
     {/* drawer open and close */}
   <div className="" onClick={()=> setOpen(!open)}>
   {open===true ? <AiOutlineFullscreenExit className="text-xl" />
     :<CiMenuFries className="text-xl" />}
   </div> 
    </div>
  </div>

  {/* top menu start */}
  <div className="navbar-end i flex-none">
    <ul className="menu menu-horizontal px-1">
      <li><a>Item 1</a></li>
      <li>
        <details>
          <summary>Parent</summary>
          <ul className="p-2">
            <li><a>Submenu 1</a></li>
            <li><a>Submenu 2</a></li>
          </ul>
        </details>
      </li>
    </ul>
  </div>
  {/* right button */}
  <div className="navbar-end">
  <li className="dropdown dropdown-left dropdown-hover">
  <div tabIndex={0} role="button" className="btn m-1">Hover</div>
  <ul tabIndex={0} className="dropdown-content menu bg-base-100 rounded-box z-[1] w-52 p-2 shadow">
    <li><a>Item gfdgsdfgsg ag1</a></li>
    <li><a>Item 2</a></li>
  </ul>
</li>
  </div>
</div>   

{/* drawer start */}
<div className={`drawer bg-gray-400 
  ${open ? 'drawer-open':"drawer-hidden"}
  `}>

  <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
  <div className="drawer-content ">
  {/* flex flex-col items-center justify-center */}
   {/* Page content here */}
    <Outlet/>
  </div>

  <div className="drawer-side ">
    <label htmlFor="my-drawer-2" aria-label="close sidebar" className="drawer-overlay"></label>
    
      {/* Sidebar content here */}
      <ul
        tabIndex={0}
        className="menu bg-green-300 bg-base-200 text-base-content min-h-full w-40 p-4">
        {/* sidebar dashboard menu */}
        <li className=" flex font-bold"><Link to=''><div className="flex flex-col justify-center">
        <MdOutlineDashboardCustomize className="text-8xl"/><p className="text-center">Dashbboard</p></div></Link></li>
{/* sidebar Product menu */}
        <li className="text-sm font-bold">
        <details>
          <summary><div className="flex flex-col justify-center">
          <FaProductHunt className="text-8xl"/><p className="text-center">Product</p></div></summary>
          {/* submenu */}
          <ul className="p-1">
           <li><Link to='dashboard/addproduct'> <VscGitPullRequestCreate className="text-xl"/>Add product</Link></li>
          <li ><Link to='/login'> <FaList className="text-xl" /> product List</Link></li>
            <li><a>Submenu 2</a></li>
            <li><a>Submenu 2</a></li>
          </ul>
        </details>
        </li>
{/* sidebar Expenses menu */}
        <li className="text-sm font-bold">
        <details>
          <summary><div className="flex flex-col justify-center">
          <SiExpensify className="text-8xl"/><p className="text-center">Expenses</p></div></summary>
          {/* submenu */}
          <ul className="p-1">
          <li ><Link to='/login'><VscGitPullRequestCreate className="text-xl"/>  Create Expenses</Link></li>
           <li><Link to='dashboard/addproduct'><FaList className="text-xl" /> Expenses List</Link></li>
           <li><Link to='dashboard/addproduct'><MdCategory className="text-xl" />Expenses Category</Link></li>
          </ul>
        </details>
        </li>
{/* sidebar Sales menu */}
        <li className="text-sm font-bold">
        <details>
          <summary><div className="flex flex-col justify-center">
          <LiaPercentageSolid className="text-8xl"/><p className="text-center">Sales</p></div></summary>
          {/* submenu */}
          <ul className="p-1">
          <li className="flex"><Link to='/login'><div><VscGitPullRequestCreate className="text-xl"/> </div> <p>Create Sale </p></Link></li>
           <li><Link to='dashboard/addproduct'><FaList className="text-xl" />Sales List</Link></li>
           <li><Link to='dashboard/addproduct'><BsFilePostFill className="text-xl"/>POS</Link></li>
           <li><Link to='dashboard/addproduct'><FaShippingFast className="text-xl" />Shipment</Link></li>
          </ul>
        </details>
        </li>
{/* sidebar Sale Return menu */}
        <li className="text-sm font-bold">
        <details>
          <summary><div className="flex flex-col justify-center">
          <TbTruckReturn  className="text-8xl"/><p className="text-center">Sale Return</p></div></summary>
          {/* submenu */}
          <ul className="p-1">
           <li className="flex"><Link to='/login'><div><VscGitPullRequestCreate className="text-xl"/> </div> <p>Create Sale Return</p></Link></li> 
           <li><Link to='dashboard/addproduct'> <FaList className="text-xl" />Sale Return List</Link></li>
          </ul>
        </details>
        </li>
{/* sidebar Pepole menu */}
        <li className="text-sm font-bold">
        <details>
          <summary><div className="flex flex-col justify-center">
          <MdOutlinePeopleAlt  className="text-8xl"/><p className="text-center">Pepole</p></div></summary>
          {/* submenu */}
          <ul className="p-1">
           <li className="flex"><Link to='/login'> <MdCreditScore  className="text-xl" />
           Create Customer</Link></li> 
           <li className="flex"><Link to='/login'> <FaList  className="text-xl" />
           Customer List</Link></li> 
           <li className="flex"><Link to='/login'> <FaUser   className="text-xl" />
           User List</Link></li> 
           
          </ul>
        </details>
        </li>
        
      </ul>
      
  </div>
</div>

      
        </div>
    );
};

export default DashboardLayout;
// <div className="drawer">
// {/* <input id="my-drawer-3" type="checkbox" className="drawer-toggle" /> 
// <div className="drawer-content flex flex-col">
//   {/* Navbar */}
//   <div className="w-full navbar bg-base-300">
//     <div className="">
//       <label htmlFor="my-drawer-3" aria-label="open sidebar" className="btn btn-square btn-ghost">
//         <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-6 h-6 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
//       </label>
//     </div> 
//     <div className="flex-1 px-2 mx-2"><Link to="/">Samiha Traders</Link></div>
//     <div className="flex-none hidden lg:block">
//       <ul className="menu menu-horizontal">
//         {/* Navbar menu content here */}
//         <li><Link to="/">Home</Link></li>
//         <li><a>Navbar Item 2</a></li>
//         <li><a>Navbar Item 2</a></li>
//         <li><a>Navbar Item 2</a></li>
//         <li><a>Navbar Item 2</a></li>
//       </ul>
//     </div>
//   </div>
//   {/* Page content here */}
//   <Outlet
//   />
// </div> 
// <div className="drawer-side ">
//   <label htmlFor="my-drawer-3" aria-label="close sidebar" className="drawer-overlay"></label> 
//   <ul className="menu p-4 w-80 min-h-full bg-base-200 menu-sm dropdown-content rounded-box z-[1] mt-3  shadow">
//     {/* Sidebar content here */}
//     <li><Link to="/">Home</Link></li>
//     <li><a> Item 2
//     <ul className="p-2">
//     <li><a>Submenu 1</a></li>
//     <li><a>Submenu 2</a></li>
//   </ul>
//       </a></li>
//     <li><a> Item 3</a></li>
//     <li><a>Item 4</a></li>
//   </ul>
//   <div className="navbar-center hidden lg:flex">
//       <ul className="menu menu-horizontal px-1">
// <li><a>Item 1</a></li>
// <li>
// <details>
//   <summary>Parent</summary>
//   <ul className="p-2">
//     <li><a>Submenu 1</a></li>
//     <li><a>Submenu 2</a></li>
//   </ul>
// </details>
//     </li>
//      <li><a>Item 3</a></li>
//   </ul>
//   </div>
// </div>
// </div> */}
