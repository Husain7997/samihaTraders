
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';

// Sample data for the chart
const data = [
  { day: 'Mon', Sales: 40, Purchase: 70 },
  { day: 'Tue', Sales: 60, Purchase: 80 },
  { day: 'Wed', Sales: 50, Purchase: 110 },
  { day: 'Thu', Sales: 45, Purchase: 75 },
  { day: 'Fri', Sales: 60, Purchase: 90 },
  { day: 'Sat', Sales: 50, Purchase: 100 },
  { day: 'Sun', Sales: 40, Purchase: 80 },
];

const ThisWeeksSales = () => {
  return (
    <div>
      <h3>This week Sales & Purchases</h3>
      <BarChart
        width={700}
        height={300}
        data={data}
        margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="day" />
        <YAxis label={{ value: '$ (thousands)', angle: -90, position: 'insideLeft' }} />
        <Tooltip />
        <Legend verticalAlign="top" align="right" />
        <Bar dataKey="Sales" fill="#3b3bb5" />
        <Bar dataKey="Purchase" fill="#9fa9f9" />
      </BarChart>
    </div>
  );
};

export default ThisWeeksSales;
