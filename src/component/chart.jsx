import { useContext } from 'react';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from 'recharts';
import { api } from '../App';

const data = [
  { name: 'Jan', value: 400 },
  { name: 'Feb', value: 300 },
  { name: 'Mar', value: 500 },
  { name: 'Apr', value: 200 },
];

const Chart = () => {
  const context = useContext(api);
  const isDarkMode = context.isDarkMode;

  const axisColor = isDarkMode ? '#ccc' : '#333';
  const gridColor = isDarkMode ? '#444' : '#ddd';
  const backgroundColor = isDarkMode ? 'rgb(0,0,0)' : '#fff'; // slate-800 تقريبا
  const tooltipBg = isDarkMode ? '#1f2937' : '#fff';
  const tooltipText = isDarkMode ? '#f3f4f6' : '#111';

  return (
    <div className="mt-5 p-4 rounded-xl transition-colors duration-300" style={{ backgroundColor }}>
      <h5 className='text-zinc-900 dark:text-zinc-100'>Sales Overview</h5>
      <p className='text-gray-500 dark:text-gray-200'><span className='text-emerald-700 dark:text-emerald-400'>(+5) more</span>  in 2021</p>
      <div>
        <ResponsiveContainer width="100%" height={220}>
          <LineChart data={data}>
            <CartesianGrid stroke={gridColor} strokeDasharray="3 3" />
            <XAxis dataKey="name" stroke={axisColor} />
            <YAxis stroke={axisColor} />
            <Tooltip
              contentStyle={{
                backgroundColor: tooltipBg,
                border: 'none',
                color: tooltipText,
              }}
            />
            <Line
              type="monotone"
              dataKey="value"
              stroke="#38bdf8" // blue-400 من Tailwind
              strokeWidth={2}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>

    </div>
  );
};

export default Chart;
