
const salesData = [
  { refCode: '87305928', customer: 'Jhon Doe', status: 'Completed', grandTotal: 1200.0, paid: 1200.0, due: 0.0, paymentStatus: 'Paid' },
  { refCode: '87305929', customer: 'Angela Carter', status: 'Incomplete', grandTotal: 1450.0, paid: 1000.0, due: 450.0, paymentStatus: 'Due' },
  { refCode: '87305927', customer: 'Victor James', status: 'Completed', grandTotal: 1200.0, paid: 1200.0, due: 0.0, paymentStatus: 'Paid' },
  { refCode: '87305926', customer: 'Anda Smith', status: 'Completed', grandTotal: 1200.0, paid: 1200.0, due: 0.0, paymentStatus: 'Paid' },
  { refCode: '87305915', customer: 'Jennifer Lora', status: 'Completed', grandTotal: 1200.0, paid: 1200.0, due: 0.0, paymentStatus: 'Paid' },
];

const SalesTable = () => {
  return (
    <div className="p-4 max-w-5xl mx-auto">
      <h2 className="text-xl font-semibold mb-4">Recent Sales</h2>
      <table className="w-full text-left border-separate border-spacing-y-2">
        <thead>
          <tr>
            <th className="p-2 text-gray-500">REFERENCE</th>
            <th className="p-2 text-gray-500">CUSTOMER</th>
            <th className="p-2 text-gray-500">STATUS</th>
            <th className="p-2 text-gray-500">GRAND TOTAL</th>
            <th className="p-2 text-gray-500">PAID</th>
            <th className="p-2 text-gray-500">DUE</th>
            <th className="p-2 text-gray-500">PAYMENT STATUS</th>
          </tr>
        </thead>
        <tbody>
          {salesData.map((sale, index) => (
            <tr key={index} className="bg-white shadow-md rounded-lg">
              <td className="p-2 text-blue-600 underline cursor-pointer">{sale.refCode}</td>
              <td className="p-2">{sale.customer}</td>
              <td className="p-2">
                <span
                  className={`px-3 py-1 rounded-full text-sm font-semibold ${
                    sale.status === 'Completed' ? 'bg-green-100 text-green-600' : 'bg-red-100 text-red-600'
                  }`}
                >
                  {sale.status}
                </span>
              </td>
              <td className="p-2">${sale.grandTotal.toFixed(2)}</td>
              <td className="p-2">${sale.paid.toFixed(2)}</td>
              <td className="p-2">${sale.due.toFixed(2)}</td>
              <td className="p-2">
                <span
                  className={`px-3 py-1 rounded-full text-sm font-semibold ${
                    sale.paymentStatus === 'Paid' ? 'bg-green-100 text-green-600' : 'bg-red-100 text-red-600'
                  }`}
                >
                  {sale.paymentStatus}
                </span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default SalesTable;
