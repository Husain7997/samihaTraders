import { useLoaderData } from "react-router-dom";


const SingleProductCardDashboard =()=> {
  const  product=useLoaderData();
  const { image, name, price, description } = product.product;

    return (
     
          <div className="max-w-sm rounded overflow-hidden shadow-lg bg-white dark:bg-gray-800">
            <img className="w-full h-48 object-cover" src={image} alt={name} />
            
            <div className="px-6 py-4">
              <h2 className="font-bold text-xl mb-2 text-gray-900 dark:text-white">{name}</h2>
              <p className="text-gray-700 text-base dark:text-gray-300">
                {description}
              </p>
            </div>
      
            <div className="px-6 py-4 flex items-center justify-between">
              <span className="text-gray-900 dark:text-white font-bold text-lg">${price?.toFixed(2)}</span>
              <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                Add to Cart
              </button>
            </div>
          </div>
      
      
    );
};

export default SingleProductCardDashboard;