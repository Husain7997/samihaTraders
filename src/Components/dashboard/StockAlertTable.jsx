

// Sample data for the table
const stockData = [
  { code: '87305928', product: 'Smartphone', warehouse: 'Warehouse 02', quantity: 5, alertQuantity: 10 },
  { code: '87305912', product: 'Mask', warehouse: 'Warehouse 02', quantity: 10, alertQuantity: 5 },
  { code: '87305452', product: 'Laptop', warehouse: 'Warehouse 01', quantity: 100, alertQuantity: 5 },
  { code: '87305231', product: 'Earphone', warehouse: 'Warehouse 03', quantity: 10, alertQuantity: 50 },
  { code: '87305452', product: 'Laptop', warehouse: 'Warehouse 01', quantity: 100, alertQuantity: 5 },
  { code: '87302331', product: 'Earphone', warehouse: 'Warehouse 02', quantity: 10, alertQuantity: 50 },
];

const StockAlertTable = () => {
  return (
    <div className="container mx-auto p-4">
      <h3 className="text-xl font-bold mb-4">Stock Alert</h3>
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white border border-gray-200">
          <thead>
            <tr>
              <th className="px-4 py-2 text-left border-b font-semibold text-gray-600">CODE</th>
              <th className="px-4 py-2 text-left border-b font-semibold text-gray-600">PRODUCT</th>
              <th className="px-4 py-2 text-left border-b font-semibold text-gray-600">WAREHOUSE</th>
              <th className="px-4 py-2 text-left border-b font-semibold text-gray-600">QUANTITY</th>
              <th className="px-4 py-2 text-left border-b font-semibold text-gray-600">ALERT QUANTITY</th>
            </tr>
          </thead>
          <tbody>
            {stockData.map((item, index) => (
              <tr key={index} className="odd:bg-white even:bg-gray-50">
                <td className="px-4 py-2 border-b">{item.code}</td>
                <td className="px-4 py-2 border-b">{item.product}</td>
                <td className="px-4 py-2 border-b">{item.warehouse}</td>
                <td className="px-4 py-2 border-b">{item.quantity.toString().padStart(2, '0')}</td>
                <td className={`px-4 py-2 border-b font-semibold ${item.quantity < item.alertQuantity ? 'text-red-500' : ''}`}>
                  {item.alertQuantity.toString().padStart(2, '0')}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default StockAlertTable;
