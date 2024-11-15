// SalesReturnList.js
import  { useState, useEffect } from "react";
import axios from "axios";
import CreateSalesReturnModal from "../../../Components/dashboard/CreateSalesReturnModal";

const SalesReturnList = () => {
  const [salesReturns, setSalesReturns] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    fetchSalesReturns();
  }, []);

  const fetchSalesReturns = async () => {
    try {
      const response = await axios.get("http://localhost:5000/api/sales-returns");
      setSalesReturns(response.data);
    } catch (error) {
      console.error("Error fetching sales returns:", error);
    }
  };

  const handleCreateSalesReturn = async (newReturn) => {
    try {
      const response = await axios.post("http://localhost:5000/api/sales-returns", newReturn);
      setSalesReturns((prev) => [...prev, response.data]);
    } catch (error) {
      console.error("Error creating sales return:", error);
    }
  };

  const handleDeleteSalesReturn = async (id) => {
    try {
      await axios.delete(`http://localhost:5000/api/sales-returns/${id}`);
      setSalesReturns((prev) => prev.filter((saleReturn) => saleReturn.id !== id));
    } catch (error) {
      console.error("Error deleting sales return:", error);
    }
  };

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-2xl font-bold">Sales Returns</h1>
        <button
          onClick={() => setIsModalOpen(true)}
          className="bg-blue-500 text-white px-4 py-2 rounded"
        >
          Create Sales Return
        </button>
      </div>

      <table className="w-full text-left bg-white border-collapse rounded-lg shadow">
        <thead>
          <tr>
            {["Date", "Sale ID", "Customer", "Product", "Quantity", "Reason", "Action"].map(
              (header) => (
                <th key={header} className="border p-3 font-medium text-gray-700">
                  {header}
                </th>
              )
            )}
          </tr>
        </thead>
        <tbody>
          {salesReturns.map((saleReturn) => (
            <tr key={saleReturn.id} className="border-b hover:bg-gray-50">
              <td className="p-3">{saleReturn.date}</td>
              <td className="p-3">{saleReturn.saleId}</td>
              <td className="p-3">{saleReturn.customer}</td>
              <td className="p-3">{saleReturn.product}</td>
              <td className="p-3">{saleReturn.quantity}</td>
              <td className="p-3">{saleReturn.returnReason}</td>
              <td className="p-3">
                <button
                  onClick={() => handleDeleteSalesReturn(saleReturn.id)}
                  className="text-red-500 hover:underline"
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <CreateSalesReturnModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onCreate={handleCreateSalesReturn}
      />
    </div>
  );
};

export default SalesReturnList;
