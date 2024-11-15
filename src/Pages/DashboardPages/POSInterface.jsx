import { useState } from 'react';
import { FaMinus, FaPlus, FaTrash } from 'react-icons/fa';

const categories = ['Category', 'Brand', 'Featured'];
const products = [
  { name: 'Smartphone', code: '87305928', price: 200 },
  { name: 'Smart Watch', code: '56305954', price: 100 },
  { name: 'Keyboard', code: '87305928', price: 50 },
  { name: 'Microphone', code: '87305928', price: 80 },
  { name: 'Camera Lens', code: '87305928', price: 300 },
  { name: 'Headphone', code: '87305928', price: 120 },
  { name: 'Desktop', code: '87305928', price: 600 },
  { name: 'Laptop', code: '87305928', price: 900 },
];
const initialSelectedProducts = [
  { name: 'Smartphone', code: '87305928', price: 200, quantity: 1 },
  { name: 'Smart Watch', code: '56305954', price: 100, quantity: 1 },
  { name: 'Laptop', code: '32305954', price: 600, quantity: 1 },
  { name: 'Headphone', code: '56305945', price: 900, quantity: 1 },
];

const POSInterface = () => {
  const [selectedProducts, setSelectedProducts] = useState(initialSelectedProducts);
  const [paymentMethod, setPaymentMethod] = useState('');
  
  const handleQuantityChange = (index, delta) => {
    const updatedProducts = [...selectedProducts];
    updatedProducts[index].quantity += delta;
    if (updatedProducts[index].quantity < 1) updatedProducts[index].quantity = 1;
    setSelectedProducts(updatedProducts);
  };

  const handleDelete = (index) => {
    const updatedProducts = selectedProducts.filter((_, i) => i !== index);
    setSelectedProducts(updatedProducts);
  };

  const totalCost = selectedProducts.reduce((total, product) => total + product.price * product.quantity, 0);

  return (
    <div className="p-8 bg-gray-100 min-h-screen">
      {/* Category Buttons */}
      <div className="flex space-x-4 mb-4">
        {categories.map((category, index) => (
          <button
            key={index}
            className={`px-6 py-2 font-semibold rounded-lg ${
              index === 0 ? 'bg-red-500' : index === 1 ? 'bg-blue-500' : 'bg-purple-500'
            } text-white shadow-md transform transition hover:scale-105`}
          >
            {category}
          </button>
        ))}
      </div>

      <div className="flex">
        {/* Product Listing */}
        <div className="w-1/2 grid grid-cols-3 gap-6 p-4 bg-white rounded-lg shadow-lg">
          {products.map((product, index) => (
            <div
              key={index}
              className="p-4 rounded-lg hover:bg-gray-100 cursor-pointer transition-colors duration-200 shadow-sm flex flex-col items-center"
            >
              <div className="w-24 h-24 bg-gray-200 rounded-full mb-2"></div>
              <p className="font-semibold">{product.name}</p>
              <p className="text-blue-600 underline cursor-pointer">{product.code}</p>
            </div>
          ))}
        </div>

        {/* Selection and Summary */}
        <div className="w-1/2 pl-8">
          <div className="bg-white p-6 rounded-lg shadow-lg mb-6">
            <h2 className="font-semibold mb-4 text-lg">Transaction Details</h2>
            <input type="text" placeholder="Enter Reference Number" className="w-full p-3 border rounded mb-4" />

            <label className="block mb-2 font-medium">Customer</label>
            <input type="text" value="Walk-in Customer" disabled className="w-full p-3 border rounded mb-4" />

            <label className="block mb-2 font-medium">Choose Product</label>
            <input
              type="text"
              placeholder="Scan / Search product by code"
              className="w-full p-3 border rounded mb-4"
            />
          </div>

          <div className="bg-white p-6 rounded-lg shadow-lg mb-6">
            <h2 className="font-semibold mb-4 text-lg">Selected Products</h2>
            <table className="w-full text-left">
              <thead>
                <tr className="text-gray-500">
                  <th className="p-2">Product</th>
                  <th className="p-2">Code</th>
                  <th className="p-2">Price</th>
                  <th className="p-2">Qty</th>
                  <th className="p-2">Subtotal</th>
                  <th className="p-2">Action</th>
                </tr>
              </thead>
              <tbody>
                {selectedProducts.map((product, index) => (
                  <tr key={index} className="border-t">
                    <td className="p-2">{product.name}</td>
                    <td className="p-2">{product.code}</td>
                    <td className="p-2">${product.price.toFixed(2)}</td>
                    <td className="p-2 flex items-center space-x-2">
                      <button
                        onClick={() => handleQuantityChange(index, -1)}
                        className="p-1 bg-blue-500 text-white rounded-full hover:bg-blue-600"
                      >
                        <FaMinus />
                      </button>
                      <span className="px-2">{product.quantity}</span>
                      <button
                        onClick={() => handleQuantityChange(index, 1)}
                        className="p-1 bg-blue-500 text-white rounded-full hover:bg-blue-600"
                      >
                        <FaPlus />
                      </button>
                    </td>
                    <td className="p-2">${(product.price * product.quantity).toFixed(2)}</td>
                    <td className="p-2">
                      <button
                        onClick={() => handleDelete(index)}
                        className="text-red-500 hover:text-red-700 transition-colors"
                      >
                        <FaTrash />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Payment Section */}
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h2 className="font-semibold mb-4 text-lg">Payment</h2>
            <div className="flex flex-col space-y-3 mb-4">
              {['Credit Card', 'Cash', 'Mobile Payment', 'Other'].map((method) => (
                <label key={method} className="flex items-center space-x-2">
                  <input
                    type="radio"
                    name="paymentMethod"
                    value={method}
                    onChange={() => setPaymentMethod(method)}
                    className="form-radio h-4 w-4 text-blue-600"
                  />
                  <span className="text-gray-700">{method}</span>
                </label>
              ))}
            </div>

            <div className="flex justify-between items-center mt-6 font-bold text-lg">
              <span>Grand Total:</span>
              <span>${totalCost.toFixed(2)}</span>
            </div>

            <button
              className="w-full mt-4 bg-green-500 text-white font-semibold p-3 rounded-lg shadow-md hover:bg-green-600 transition-colors"
              disabled={!paymentMethod}
            >
              Confirm Payment
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default POSInterface;
