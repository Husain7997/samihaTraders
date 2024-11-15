import { FaUser } from "react-icons/fa";
import { GiWallet } from "react-icons/gi";
import { IoMdWallet } from "react-icons/io";
import { TbPointerDollar } from "react-icons/tb";
import TopSale from "../../Components/dashboard/Chart/TopSale";
import ThisWeeksSales from "../../Components/dashboard/Chart/ThisWeeksSales";
import TopCustomerChart from "../../Components/dashboard/Chart/TopCustomerChart";
import SalesTargetChart from "../../Components/dashboard/Chart/SalesTargetChart";
import StockAlertTable from "../../Components/dashboard/StockAlertTable";
import PaymentChart from "../../Components/dashboard/Chart/PaymentChart";
import SalesTable from "../../Components/dashboard/SalesTable";
import InvoiceTable from "../../Components/dashboard/InvoiceTable";
// import ListTable from "../../Components/dashboard/ListTable";
// import UserList from "../../Components/dashboard/UserList";
// import Chart from "../../Components/dashboard/Chart";








const Dashboard = () => {
    return (
        <div className="bg-gray-100">
            <div className="-mx-3 flex flex-wrap justify-between p-8">
    
    <div className="w-full  px-4 md:w-1/2 lg:w-1/2">
        <div className="mb-9 bg-slate-100 flex justify-between rounded-xl py-8 px-7 shadow-md transition-all hover:shadow-lg sm:p-9 lg:px-6 xl:px-9">
            <div className="  inline-block"> <IoMdWallet className="text-6xl lg:text-8xl " width="53" height="61"  />
                </div>
            <div>
               
                <p className="text-base text-2xl text-center font-medium text-body-color">Sale</p>
                    <h3 className="mb-4 text-xl font-bold text-black sm:text-2xl lg:text-4xl xl:text-4xl">18000$
                    </h3>
            </div>
        </div>
    </div>
    <div className="w-full  px-4 md:w-1/2 lg:w-1/2">
        <div className="mb-9 bg-slate-100 flex justify-between rounded-xl py-8 px-7 shadow-md transition-all hover:shadow-lg sm:p-9 lg:px-6 xl:px-9">
            <div className="  inline-block"> <TbPointerDollar className="text-6xl lg:text-8xl " width="53" height="61"  />
                </div>
            <div>
               
                <p className="text-base text-2xl text-center font-medium text-body-color">Sale Return</p>
                    <h3 className="mb-4 text-xl font-bold text-black sm:text-2xl lg:text-4xl xl:text-4xl">5000$
                    </h3>
            </div>
        </div>
    </div>
    <div className="w-full  px-4 md:w-1/2 lg:w-1/2">
        <div className="mb-9 bg-slate-100 flex justify-between rounded-xl py-8 px-7 shadow-md transition-all hover:shadow-lg sm:p-9 lg:px-6 xl:px-9">
            <div className="  inline-block"> <GiWallet  className="text-6xl lg:text-8xl " width="53" height="61"  />
                </div>
            <div>
               
                <p className="text-base text-2xl text-center font-medium text-body-color">Expenses</p>
                    <h3 className="mb-4 text-xl font-bold text-black sm:text-2xl lg:text-4xl xl:text-4xl">2000$
                    </h3>
            </div>
        </div>
    </div>
    <div className="w-full  px-4 md:w-1/2 lg:w-1/2">
        <div className="mb-9 bg-slate-100 flex justify-between rounded-xl py-8 px-7 shadow-md transition-all hover:shadow-lg sm:p-9 lg:px-6 xl:px-9">
            <div className="  inline-block"> <FaUser className="text-6xl lg:text-8xl " width="53" height="61"  />
                </div>
            <div>
               
                <p className="text-base text-2xl text-center font-medium text-body-color">Customer</p>
                    <h3 className="mb-4 text-xl font-bold text-black sm:text-2xl lg:text-4xl xl:text-4xl">450
                    </h3>
            </div>
        </div>
    </div>


        </div>

<div className="flex w-full my-10 gap-7 justify-between">
<TopSale className='w-1/3'></TopSale>
<ThisWeeksSales className='w-2/3'></ThisWeeksSales>
</div>
<div className="flex w-ful">
    <StockAlertTable className='w-1/2'></StockAlertTable>
    <TopCustomerChart className='w-1/2'></TopCustomerChart>
</div>
<div className="flex justify-around">
    <SalesTargetChart className='w-1/3'></SalesTargetChart>
    <PaymentChart className='w-2/3'></PaymentChart>
</div>
<InvoiceTable></InvoiceTable>
<SalesTable></SalesTable>


{/* <ListTable></ListTable> */}
        {/* <UserList/> */}
        {/* <Chart/> */}
        </div>

       
           );
};

export default Dashboard;