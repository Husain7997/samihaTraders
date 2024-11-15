
import { PieChart, Pie, Cell, Legend } from 'recharts';

// Sample data for the chart
const data = [
  { name: 'Earphones', value: 400 },
  { name: 'Laptop', value: 300 },
  { name: 'Smartphone', value: 500 },
  { name: 'Camera', value: 200 },
  { name: 'Tablet', value: 350 },
];

// Define colors for each segment
const COLORS = ['#D291FF', '#FF9AE7', '#6B3FA0', '#AD5EF7', '#FF8B8B'];

const TopSale = () => {
  return (
    <div>
      <h3>Top Selling Products (2023)</h3>
      <PieChart width={400} height={400}>
        <Pie
          data={data}
          cx="50%"
          cy="50%"
          innerRadius={60}
          outerRadius={100}
          dataKey="value"
          label
        >
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
          ))}
        </Pie>
        <Legend layout="horizontal" verticalAlign="bottom" align="center" />
      </PieChart>
    </div>
  );
};

export default TopSale;
