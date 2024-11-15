// CustomerList.js
import { useState, useEffect } from "react";
import axios from "axios";
import CustomerModal from "../../../Components/dashboard/CustomerModal";

const CustomerList = () => {
  const [customers, setCustomers] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingCustomer, setEditingCustomer] = useState(null);

  useEffect(() => {
    fetchCustomers();
  }, []);

  const fetchCustomers = async () => {
    try {
      const response = await axios.get("http://localhost:5000/api/customers");
      setCustomers(response.data);
    } catch (error) {
      console.error("Error fetching customers:", error);
    }
  };

  const handleCreateOrUpdateCustomer = async (customer) => {
    if (editingCustomer) {
      // Update existing customer
      try {
        const response = await axios.put(
          `http://localhost:5000/api/customers/${editingCustomer.id}`,
          customer
        );
        setCustomers((prev) =>
          prev.map((c) => (c.id === editingCustomer.id ? response.data : c))
        );
      } catch (error) {
        console.error("Error updating customer:", error);
      }
    } else {
      // Create new customer
      try {
        const response = await axios.post("http://localhost:5000/api/customers", customer);
        setCustomers((prev) => [...prev, response.data]);
      } catch (error) {
        console.error("Error creating customer:", error);
      }
    }

    setIsModalOpen(false);
    setEditingCustomer(null);
  };

  const handleDeleteCustomer = async (id) => {
    try {
      await axios.delete(`http://localhost:5000/api/customers/${id}`);
      setCustomers((prev) => prev.filter((customer) => customer.id !== id));
    } catch (error) {
      console.error("Error deleting customer:", error);
    }
  };

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-2xl font-bold">Customers</h1>
        <button
          onClick={() => setIsModalOpen(true)}
          className="bg-blue-500 text-white px-4 py-2 rounded"
        >
          Add Customer
        </button>
      </div>

      <table className="w-full text-left bg-white border-collapse rounded-lg shadow">
        <thead>
          <tr>
            {["Name", "Email", "Phone", "Address", "Action"].map((header) => (
              <th key={header} className="border p-3 font-medium text-gray-700">
                {header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {customers.map((customer) => (
            <tr key={customer.id} className="border-b hover:bg-gray-50">
              <td className="p-3">{customer.name}</td>
              <td className="p-3">{customer.email}</td>
              <td className="p-3">{customer.phone}</td>
              <td className="p-3">{customer.address}</td>
              <td className="p-3">
                <button
                  onClick={() => {
                    setEditingCustomer(customer);
                    setIsModalOpen(true);
                  }}
                  className="text-blue-500 hover:underline mr-2"
                >
                  Edit
                </button>
                <button
                  onClick={() => handleDeleteCustomer(customer.id)}
                  className="text-red-500 hover:underline"
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <CustomerModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onCreateOrUpdate={handleCreateOrUpdateCustomer}
        editingCustomer={editingCustomer}
      />
    </div>
  );
};

export default CustomerList;
