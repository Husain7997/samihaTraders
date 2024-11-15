
const invoices = [
  { refCode: '87305915', customer: 'Jhon Doe', amount: 1200.0, status: 'Due' },
  { refCode: '87305913', customer: 'Victor James', amount: 300.0, status: 'Paid' },
  { refCode: '87305912', customer: 'Jonathon Ronan', amount: 530.5, status: 'Paid' },
  { refCode: '87305925', customer: 'Angela Carter', amount: 633.5, status: 'Due' },
  { refCode: '57305925', customer: 'Josef Stalin', amount: 133.5, status: 'Paid' },
];

const InvoiceTable = () => {
  return (
    <div className="p-4 max-w-lg mx-auto">
      <h2 className="text-xl font-semibold mb-4">Recent Invoices</h2>
      <table className="w-full text-left border-separate border-spacing-y-2">
        <thead>
          <tr>
            <th className="p-2 text-gray-500">REF. CODE</th>
            <th className="p-2 text-gray-500">CUSTOMER</th>
            <th className="p-2 text-gray-500">AMOUNT</th>
            <th className="p-2 text-gray-500">STATUS</th>
          </tr>
        </thead>
        <tbody>
          {invoices.map((invoice, index) => (
            <tr key={index} className="bg-white shadow-md rounded-lg">
              <td className="p-2 text-blue-600 underline cursor-pointer">{invoice.refCode}</td>
              <td className="p-2">{invoice.customer}</td>
              <td className="p-2">${invoice.amount.toFixed(2)}</td>
              <td className="p-2">
                <span
                  className={`px-3 py-1 rounded-full text-sm font-semibold ${
                    invoice.status === 'Paid'
                      ? 'bg-green-100 text-green-600'
                      : 'bg-red-100 text-red-600'
                  }`}
                >
                  {invoice.status}
                </span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default InvoiceTable;
