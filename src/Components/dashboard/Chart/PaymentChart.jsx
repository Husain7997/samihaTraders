import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const data = [
  { day: '1k', sent: 50, received: 30 },
  { day: '2k', sent: 40, received: 45 },
  { day: '3k', sent: 60, received: 25 },
  { day: '4k', sent: 30, received: 55 },
  { day: '5k', sent: 50, received: 35 },
  { day: '6k', sent: 20, received: 50 },
  { day: '7k', sent: 40, received: 20 },
  { day: '8k', sent: 25, received: 40 },
  { day: '9k', sent: 35, received: 30 },
  { day: '10k', sent: 15, received: 45 },
  { day: '11k', sent: 25, received: 35 },
];

const PaymentChart = () => {
  return (
    <div className="flex flex-col items-center p-4">
      <h2 className="text-center text-lg font-semibold mb-4">Payment Sent & Received (Last 5 Days)</h2>
      <ResponsiveContainer width="100%" height={400}>
        <LineChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="day" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey="sent" stroke="#8884d8" strokeWidth={2} />
          <Line type="monotone" dataKey="received" stroke="#a2a5b9" strokeWidth={2} strokeDasharray="5 5" />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default PaymentChart;
