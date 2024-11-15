// CreateSalesReturnModal.js
import { useState } from "react";

const CreateSalesReturnModal = ({ isOpen, onClose, onCreate }) => {
  const [formData, setFormData] = useState({
    date: "",
    saleId: "",
    customer: "",
    product: "",
    quantity: 1,
    returnReason: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onCreate(formData); // Pass data to parent component
    setFormData({
      date: "",
      saleId: "",
      customer: "",
      product: "",
      quantity: 1,
      returnReason: "",
    });
    onClose(); // Close modal after submission
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white rounded-lg shadow-lg w-96 p-6">
        <h2 className="text-2xl font-bold mb-4">Create Sales Return</h2>
        <form onSubmit={handleSubmit}>
          {[
            { label: "Date", name: "date", type: "date" },
            { label: "Sale ID", name: "saleId", type: "text" },
            { label: "Customer", name: "customer", type: "text" },
            { label: "Product", name: "product", type: "text" },
            { label: "Quantity", name: "quantity", type: "number" },
            { label: "Return Reason", name: "returnReason", type: "text" },
          ].map(({ label, name, type }) => (
            <div className="mb-4" key={name}>
              <label className="block text-gray-700">{label}</label>
              <input
                type={type}
                name={name}
                value={formData[name]}
                onChange={handleChange}
                className="w-full p-2 border rounded"
                required
              />
            </div>
          ))}
          <div className="flex justify-end">
            <button
              type="button"
              onClick={onClose}
              className="bg-gray-400 text-white px-4 py-2 rounded mr-2"
            >
              Cancel
            </button>
            <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">
              Create
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CreateSalesReturnModal;
