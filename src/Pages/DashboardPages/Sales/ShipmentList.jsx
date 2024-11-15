// ShipmentList.js
import  { useState, useEffect } from "react";
import axios from "axios";

import CreateShipmentModal from "./CreateShipmentModal";
import ExportToExcel from "../../../Components/dashboard/ExportToExcel";
import ExportToPDF from "../../../Components/dashboard/ExportToPDF";
import ImportFromExcel from "../../../Components/dashboard/ImportFromExcel";

const ShipmentList = () => {
  const [shipments, setShipments] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    axios
      .get("http://localhost:5000/shipments")
      .then((response) => setShipments(response.data))
      .catch((error) => console.error("Error fetching shipment data: ", error));
  }, []);

  const handleDataImported = (importedData) => {
    setShipments(importedData);
  };

  const handleCreateShipment = (newShipment) => {
    setShipments((prevShipments) => [
      ...prevShipments,
      { id: shipments.length + 1, ...newShipment },
    ]);
  };

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-2xl font-bold">Shipment List</h1>
        <div className="flex space-x-2">
          {/* <ExportToExcel data={shipments} filename="Shipments_List.xlsx" />
          <ExportToPDF elementId="shipments-table" filename="Shipments_List.pdf" />
          <ImportFromExcel onDataImported={handleDataImported} /> */}
          <button
            onClick={() => setIsModalOpen(true)}
            className="bg-purple-500 text-white px-4 py-2 rounded"
          >
            Create Shipment
          </button>
        </div>
      </div>

      <div id="shipments-table" className="overflow-auto rounded-lg shadow">
        <table className="w-full text-left bg-white border-collapse">
          <thead>
            <tr>
              {[
                "Date",
                "Shipment ID",
                "Customer",
                "Warehouse",
                "Status",
                "Shipping Cost",
                "Total Weight",
                "Action",
              ].map((header) => (
                <th key={header} className="border p-3 font-medium text-gray-700">
                  {header}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {shipments.map((shipment) => (
              <tr key={shipment.id} className="border-b hover:bg-gray-50">
                <td className="p-3">{shipment.date}</td>
                <td className="p-3">{shipment.shipmentId}</td>
                <td className="p-3">{shipment.customer}</td>
                <td className="p-3">{shipment.warehouse}</td>
                <td className="p-3">
                  <span className={`px-2 py-1 rounded ${getStatusStyle(shipment.status)}`}>
                    {shipment.status}
                  </span>
                </td>
                <td className="p-3">${shipment.shippingCost.toFixed(2)}</td>
                <td className="p-3">{shipment.totalWeight} kg</td>
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

      <CreateShipmentModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onCreate={handleCreateShipment}
      />
    </div>
  );
};

function getStatusStyle(status) {
  switch (status) {
    case "Delivered":
      return "bg-green-100 text-green-700";
    case "In Transit":
      return "bg-yellow-100 text-yellow-700";
    case "Pending":
      return "bg-red-100 text-red-700";
    default:
      return "";
  }
}

export default ShipmentList;
