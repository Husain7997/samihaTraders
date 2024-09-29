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
      <li><a>POS</a></li>
      <li>
        <details>
          <summary>Option</summary>
          <ul className="p-2">
            <li><a>Settiing</a></li>
            <li><a>Edit Profile</a></li>
          </ul>
        </details>
      </li>
    </ul>
  </div>
  {/* right button */}
  <div className="navbar-end">
  <li className="dropdown dropdown-left dropdown-hover">
  <div tabIndex={0} role="button" className="btn m-1">User Name <img className="w-10 h-10 p-1 rounded-full ring-2 ring-gray-300 dark:ring-gray-500"  src="data:image/webp;base64,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" alt="" /> </div>
  <ul tabIndex={0} className="dropdown-content menu bg-base-100 rounded-box z-[1] w-52 p-2 shadow">
    <li>Role</li>
    <li><a>Setting</a></li>
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
          <li ><Link to='dashboard/productlist'> <FaList className="text-xl" /> product List</Link></li>
            {/* <li><a>Submenu 2</a></li>
            <li><a>Submenu 2</a></li> */}
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
