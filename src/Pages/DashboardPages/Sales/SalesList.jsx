// SalesList.js
import  { useState, useEffect } from "react";
// import  { useState } from "react";
import ImportFromExcel from "../../../Components/dashboard/ImportFromExcel";
import ExportToPDF from "../../../Components/dashboard/ExportToPDF";
import ExportToExcel from "../../../Components/dashboard/ExportToExcel";
import axios from "axios";
import { Link } from "react-router-dom";

const SalesList = () => {
  const [sales, setSales] = useState([]);
  // const salesData = [
  //   {
  //     id: 1,
  //     date: "26/09/2023",
  //     reference: "5389607",
  //     customer: "Jane Ronan",
  //     warehouse: "Warehouse 01",
  //     status: "Received",
  //     grandTotal: 120,
  //     paid: 120,
  //     due: 0,
  //     paymentStatus: "Paid",
  //   },
  //   // Add more data as needed
  // ];
  // setSales(salesData);
  useEffect(() => {
    axios.get("http://localhost:5000/sales")
      .then(response => setSales(response.data))
      .catch(error => console.error("Error fetching data: ", error));
  }, []);

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-2xl font-bold">Sales List</h1>
        <div>
        <button
    onClick={() => ExportToExcel(sales)}
    className="bg-green-500 text-white px-4 py-2 rounded mr-2"
  >
    Excel
  </button>
  <button
    onClick={() => ExportToPDF(sales)}
    className="bg-red-500 text-white px-4 py-2 rounded mr-2"
  >
    PDF
  </button>
          <label className="bg-blue-500 text-white px-4 py-2 rounded cursor-pointer">
  Import
  <input
    type="file"
    accept=".xlsx, .xls"
    onChange={ImportFromExcel}
    className="hidden"
  />
</label>

          <button className="bg-purple-500 text-white px-4 py-2 rounded ml-2"><Link to='/dashboard/dashboard/CreateSale'>Create Sale</Link></button>
        </div>
      </div>
      <div className="overflow-auto rounded-lg shadow">
        <table className="w-full text-left bg-white border-collapse">
          <thead>
            <tr>
              {["Date", "Reference", "Customer", "Warehouse", "Status", "Grand Total", "Paid", "Due", "Payment Status", "Action"].map(header => (
                <th key={header} className="border p-3 font-medium text-gray-700">
                  {header}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {sales.map((sale) => (
              <tr key={sale.id} className="border-b hover:bg-gray-50">
                <td className="p-3">{sale.date}</td>
                <td className="p-3">{sale.reference}</td>
                <td className="p-3">{sale.customer}</td>
                <td className="p-3">{sale.warehouse}</td>
                <td className="p-3">
                  <span className={`px-2 py-1 rounded ${getStatusStyle(sale.status)}`}>{sale.status}</span>
                </td>
                <td className="p-3">${sale.grandTotal.toFixed(2)}</td>
                <td className="p-3">${sale.paid.toFixed(2)}</td>
                <td className="p-3">${sale.due.toFixed(2)}</td>
                <td className="p-3">
                  <span className={`px-2 py-1 rounded ${getPaymentStatusStyle(sale.paymentStatus)}`}>{sale.paymentStatus}</span>
                </td>
                <td className="p-3 flex items-center space-x-2">
                  <button className="text-blue-500">👁️</button>
                  <button className="text-green-500">✏️</button>
                  <button className="text-red-500">🗑️</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

function getStatusStyle(status) {
  switch (status) {
    case "Received": return "bg-green-100 text-green-700";
    case "Ordered": return "bg-purple-100 text-purple-700";
    case "Pending": return "bg-red-100 text-red-700";
    default: return "";
  }
}

function getPaymentStatusStyle(status) {
  switch (status) {
    case "Paid": return "bg-green-100 text-green-700";
    case "Partial": return "bg-yellow-100 text-yellow-700";
    case "Due": return "bg-red-100 text-red-700";
    case "Received": return "bg-blue-100 text-blue-700";
    default: return "";
  }
}

export default SalesList;
