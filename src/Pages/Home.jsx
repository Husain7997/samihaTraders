import Chart from "../Components/dashboard/Chart";
import Banner from "../Components/Home/Banner";
import Curd from "../Components/Home/Curd";
import Notice from "../Components/Home/Notice";
import Options from "../Components/Home/Options";
import QandA from "../Components/Home/QandA";
import Structure from "../Components/Home/Structure";
// import LoadingSpinner from "../Components/LoadingSpinner";


const Home = () => {
    return (
        <div>
           <Banner/>
           <Notice/>
           <Options/>
           {/* <LoadingSpinner/> */}
            <Curd/>
            <button className="btn glass">See More</button>
        
           <Structure/>
           <QandA/>
           <Chart/>
        </div>
    );
};

export default Home;