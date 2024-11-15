// import { useEffect } from "react";
import { GrView } from "react-icons/gr";
// import { useQuery } from "@tanstack/react-query";
import { MdDeleteForever } from "react-icons/md";
import { RiEditFill } from "react-icons/ri";
import { Link } from "react-router-dom";
// import useAxiosSecure from "../../hooks/useAxios";
import Swal from "sweetalert2";
// import SingleProductCardDashboard from "../../Components/dashboard/SingleProductCardDashboard";

const ProductItem = (product) => {
  const { productName, price, description, category, image } =
    product.product.product;
  const { _id } = product.product;
  // const axiosSecure = useAxiosSecure();
  // const { refetch} = useQuery();
  // console.log({ productName, price, _id, description, category, image });

  const handleDelete = (_id) => {
    console.log(_id);
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`http://localhost:5000/products/${_id}`, {
          method: "DELETE",
        })
          .than((res) => res.json())
          .than((data) => {
            console.log(data);

            if (data.deletedCount > 0) {
              console.log(data);
              Swal.fire({
                title: "Deleted!",
                text: "Your file has been deleted.",
                icon: "success",
              });
            }
          });
      }
    });
  };
  return (
    <div>
      <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
        <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
          <tbody>
            <tr className="bg-white border-b  flex justify-between dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
              {/* <td className="w-4 p-4">
                          <div className="flex items-center">
                              <input id="checkbox-table-search-1" type="checkbox" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600">
                              <label for="checkbox-table-search-1" className="sr-only">checkbox</label>
                          </div>
                      </td> */}
              <th
                scope="row"
                className="flex items-center text-center  px-6 w-4/12 py-4 text-gray-900 whitespace-nowrap dark:text-white"
              >
                <img
                  className="w-10 h-10 rounded-full"
                  src={image}
                  alt="product image"
                />
                <div className="ps-3">
                  <div className="text-base font-semibold">{productName}</div>
                  <div className="font-normal text-gray-500">{productName}</div>
                </div>
              </th>
              <td className="px-3 text-center  w-2/12 py-4">{price}</td>
              <td className="px-3 text-center  w-2/12 py-4">
                <div className="flex items-center justify-center">
                  <div className="h-2.5 w-2.5 rounded-full bg-green-500 me-2"></div>{" "}
                  {category}
                </div>
              </td>
              <td className="px-3 text-center  w-2/12 py-4">
                <div className="flex items-center justify-center">
                  <div className="h-2.5 w-2.5 rounded-full bg-green-500 me-2"></div>{" "}
                  {_id}
                </div>
              </td>
              <td className="px-3 text-center  w-2/12 py-4">
                <div className="flex items-center justify-center">
                  <div className="h-2.5 w-2.5 rounded-full bg-green-500 me-2"></div>{" "}
                  {description}
                </div>
              </td>
              <td className="px-3 text-center  w-2/12 py-4">
                <div className="flex items-center justify-center">
                  <div className="h-2.5 w-2.5 rounded-full bg-green-500 me-2"></div>{" "}
                  Online
                </div>
              </td>

              <td className="px-3 text-center  w-2/12 py-4">
                <div className="flex justify-center items-center">
                  <div className="h-2.5 w-2.5 rounded-full bg-green-500 me-2"></div>{" "}
                  Online
                </div>
              </td>
              <td className="px-3 text-center flex text-xl w-2/12 py-4">
                <button
                  href="#"
                  className="font-medium p-2 mx-1 text-blue-600 dark:text-blue-500 hover:underline"
                >
                   <Link to={`/dashboard/SingleProductCardDashboard/${_id}`}>    <GrView /></Link>
               
                </button>
                <button
                  // href="#" 
                  className="font-medium p-2 mx-1 text-blue-600 dark:text-blue-500 hover:underline"
                >
                    <Link to={`/dashboard/editProduct/${_id}` } > <RiEditFill /></Link>
                 
                </button>
                <button
                  onClick={() => handleDelete(_id)}
                  // href="#"
                  className="font-medium p-2 mx-1 text-blue-600 dark:text-blue-500 hover:underline"
                >
                  <MdDeleteForever />
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ProductItem;
