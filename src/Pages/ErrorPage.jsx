import { Link, useRouteError } from "react-router-dom";


const ErrorPage = () => {
    const { error, status } =useRouteError();
    return (
        <div className="container flex flex-col justify-center items-center h-screen text-center py32">
           <h1 className="text-7xl font-extrabold mb-8">Error {status || 404}</h1>
          <p className="lg:text-3xl "> {error?.message}</p>
          <button className="btn btn-error">
            <Link to="/">Go to Home page</Link>
          </button>
        </div>
    );
};

export default ErrorPage;