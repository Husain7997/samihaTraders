
import { PieChart, Pie, Cell, Legend } from 'recharts';

const data = [
  { name: 'Weekly', value: 75, color: '#5d5fee' },
  { name: 'Monthly', value: 50, color: '#4ecfff' },
  { name: 'Yearly', value: 30, color: '#ff6f61' },
];

const MultiRingChart = () => {
  return (
    <div className="flex flex-col items-center p-4">
      <h2 className="text-center text-lg font-semibold mb-4">Sales Target</h2>
      <PieChart width={400} height={400}>
        <Pie
          data={[data[0]]}
          dataKey="value"
          cx="50%"
          cy="50%"
          innerRadius={80}
          outerRadius={90}
          startAngle={90}
          endAngle={90 + (360 * data[0].value) / 100}
          fill={data[0].color}
          paddingAngle={5}
        >
          <Cell fill={data[0].color} />
        </Pie>
        <Pie
          data={[data[1]]}
          dataKey="value"
          cx="50%"
          cy="50%"
          innerRadius={100}
          outerRadius={110}
          startAngle={90}
          endAngle={90 + (360 * data[1].value) / 100}
          fill={data[1].color}
          paddingAngle={5}
        >
          <Cell fill={data[1].color} />
        </Pie>
        <Pie
          data={[data[2]]}
          dataKey="value"
          cx="50%"
          cy="50%"
          innerRadius={120}
          outerRadius={130}
          startAngle={90}
          endAngle={90 + (360 * data[2].value) / 100}
          fill={data[2].color}
          paddingAngle={5}
        >
          <Cell fill={data[2].color} />
        </Pie>
        <Legend layout="horizontal" align="center" verticalAlign="bottom" />
      </PieChart>
    </div>
  );
};

export default MultiRingChart;
