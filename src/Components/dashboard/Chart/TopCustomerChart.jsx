
import { PieChart, Pie, Cell, Tooltip, Legend } from 'recharts';

const data = [
  { name: 'Toggy Business', value: 25.6, color: '#8a2be2' },
  { name: 'Solit IT', value: 32.0, color: '#d8bffd' },
  { name: 'Walk-In Customer', value: 23.8, color: '#4c4cff' },
  { name: 'Medizo Enterprize', value: 9.9, color: '#ffbf47' },
  { name: 'Coze IT', value: 8.7, color: '#ff6f61' },
];

const DonutChart = () => {
  return (
    <div className=" justify-center items-center p-4">
      <h2 className="text-center text-lg font-semibold mb-4">Top 05 Customer (January)</h2>
      <PieChart width={400} height={400}>
        <Pie
          data={data}
          dataKey="value"
          nameKey="name"
          cx="50%"
          cy="50%"
          innerRadius={100}
          outerRadius={150}
          fill="#8884d8"
          paddingAngle={5}
        >
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={entry.color} />
          ))}
        </Pie>
        <Tooltip />
        <Legend layout="horizontal" align="center" verticalAlign="bottom" />
      </PieChart>
    </div>
  );
};

export default DonutChart;
