import { useState } from 'react';

function CreateSale() {
  // State for handling form inputs
  const [sale, setSale] = useState({
    date: '',
    customer: '',
    warehouse: '',
    products: [
      { name: 'Smartphone', code: '87236628', unitCost: 100, stock: 100, quantity: 1, discount: 0, tax: 0, subtotal: 100 },
      { name: 'Smart Watch', code: '51935484', unitCost: 100, stock: 150, quantity: 1, discount: 0, tax: 0, subtotal: 100 },
      { name: 'Laptop', code: '33226654', unitCost: 100, stock: 160, quantity: 1, discount: 0, tax: 0, subtotal: 100 },
      { name: 'Headphones', code: '51935485', unitCost: 100, stock: 250, quantity: 1, discount: 0, tax: 0, subtotal: 100 }
    ],
    orderTax: 0,
    discount: 0,
    shippingCost: 0,
    note: '',
  });

  // Handlers for input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setSale({ ...sale, [name]: value });
  };

  const handleQuantityChange = (index, quantity) => {
    const updatedProducts = sale.products.map((product, i) => 
      i === index ? { ...product, quantity, subtotal: (product.unitCost + product.tax) * quantity - product.discount } : product
    );
    setSale({ ...sale, products: updatedProducts });
  };

  const calculateTotal = () => {
    const productTotal = sale.products.reduce((total, product) => total + product.subtotal, 0);
    const grandTotal = productTotal + parseFloat(sale.orderTax) + parseFloat(sale.discount) + parseFloat(sale.shippingCost);
    return grandTotal.toFixed(2);
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h2 className="text-2xl font-bold mb-4">Create Sales</h2>
      <form className="bg-white p-6 rounded-md shadow-md space-y-6">

        {/* Date and Customer */}
        <div className="grid grid-cols-3 gap-4">
          <div>
            <label className="block text-gray-700">Date</label>
            <input type="date" name="date" value={sale.date} onChange={handleInputChange} className="w-full px-3 py-2 border rounded-md" required />
          </div>
          <div>
            <label className="block text-gray-700">Customer</label>
            <select name="customer" value={sale.customer} onChange={handleInputChange} className="w-full px-3 py-2 border rounded-md">
              <option value="">Select Customer</option>
              <option value="John Doe">John Doe</option>
              <option value="Jane Smith">Jane Smith</option>
            </select>
          </div>
          <div>
            <label className="block text-gray-700">Warehouse</label>
            <select name="warehouse" value={sale.warehouse} onChange={handleInputChange} className="w-full px-3 py-2 border rounded-md">
              <option value="">Select Warehouse</option>
              <option value="Warehouse A">Warehouse A</option>
              <option value="Warehouse B">Warehouse B</option>
            </select>
          </div>
        </div>

        {/* Product Selection */}
        <div>
          <h3 className="text-lg font-semibold mb-2">Selected Products for Sale</h3>
          <table className="w-full table-auto border-collapse border border-gray-300">
            <thead>
              <tr className="bg-gray-200">
                <th className="border p-2">Product</th>
                <th className="border p-2">Code</th>
                <th className="border p-2">Unit Cost</th>
                <th className="border p-2">Stock</th>
                <th className="border p-2">Quantity</th>
                <th className="border p-2">Discount</th>
                <th className="border p-2">Tax</th>
                <th className="border p-2">Subtotal</th>
              </tr>
            </thead>
            <tbody>
              {sale.products.map((product, index) => (
                <tr key={index}>
                  <td className="border p-2">{product.name}</td>
                  <td className="border p-2">{product.code}</td>
                  <td className="border p-2">${product.unitCost}</td>
                  <td className="border p-2">{product.stock}</td>
                  <td className="border p-2">
                    <input
                      type="number"
                      value={product.quantity}
                      min="1"
                      onChange={(e) => handleQuantityChange(index, parseInt(e.target.value))}
                      className="w-16 p-1 border rounded-md"
                    />
                  </td>
                  <td className="border p-2">${product.discount.toFixed(2)}</td>
                  <td className="border p-2">${product.tax.toFixed(2)}</td>
                  <td className="border p-2">${product.subtotal.toFixed(2)}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Order Tax, Discount, Shipping, and Total Calculation */}
        <div className="grid grid-cols-3 gap-4">
          <div>
            <label className="block text-gray-700">Order Tax</label>
            <input type="number" name="orderTax" value={sale.orderTax} onChange={handleInputChange} className="w-full px-3 py-2 border rounded-md" />
          </div>
          <div>
            <label className="block text-gray-700">Discount</label>
            <input type="number" name="discount" value={sale.discount} onChange={handleInputChange} className="w-full px-3 py-2 border rounded-md" />
          </div>
          <div>
            <label className="block text-gray-700">Shipping Cost</label>
            <input type="number" name="shippingCost" value={sale.shippingCost} onChange={handleInputChange} className="w-full px-3 py-2 border rounded-md" />
          </div>
        </div>

        {/* Notes */}
        <div>
          <label className="block text-gray-700">Notes</label>
          <textarea name="note" value={sale.note} onChange={handleInputChange} className="w-full px-3 py-2 border rounded-md" rows="3"></textarea>
        </div>

        {/* Grand Total */}
        <div className="text-right font-bold text-xl">
          Grand Total: ${calculateTotal()}
        </div>

        {/* Submit Button */}
        <div className="flex justify-end">
          <button type="submit" className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700">Submit Sales</button>
        </div>
      </form>
    </div>
  );
}

export default CreateSale;
