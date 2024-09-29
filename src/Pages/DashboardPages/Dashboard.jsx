import { FaUser } from "react-icons/fa";
import { GiWallet } from "react-icons/gi";
import { IoMdWallet } from "react-icons/io";
import { TbPointerDollar } from "react-icons/tb";
import ListTable from "../../Components/dashboard/ListTable";
import UserList from "../../Components/dashboard/UserList";
import Chart from "../../Components/dashboard/Chart";








const Dashboard = () => {
    return (
        <div>
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
<ListTable></ListTable>
        <UserList/>
        <Chart/>
        </div>

       
           );
};

export default Dashboard;