import { useContext } from 'react';
import {
    BarChart,
    Bar,
    YAxis,
    Tooltip,
    ResponsiveContainer,
} from 'recharts';
import { api } from '../App';
import { BsFillRocketTakeoffFill } from "react-icons/bs";
import { RiAlignItemLeftFill } from "react-icons/ri";
import { FaMoneyBill } from 'react-icons/fa';
import { FaCartShopping } from 'react-icons/fa6';

const data = [
    { name: 'Jan', value: 400 },
    { name: 'Feb', value: 300 },
    { name: 'Mar', value: 500 },
    { name: 'Apr', value: 200 },
    { name: 'Mar', value: 500 },
    { name: 'Apr', value: 200 },
];

const ColChart = () => {
    const context = useContext(api);
    const isDarkMode = context.isDarkMode;

    const list_col_chart = [
        {
            icon: <FaMoneyBill className='text-white text-[18px]' />,
            title: 'user',
            num: '2,500',
            value: '50'

        },
        {
            icon: <BsFillRocketTakeoffFill className='text-white text-[18px]' />,
            title: 'click',
            num: '1,730',
            value: '80'

        },
        {
            icon: <FaCartShopping className='text-white text-[18px]' />,
            title: 'sales',
            num: '3,580',
            value: '95'

        },
        {
            icon: <RiAlignItemLeftFill className='text-white text-[18px]' />,
            title: 'item',
            num: '500',
            value: '70'

        },
    ]

    const axisColor = isDarkMode ? '#ccc' : '#333';
    const backgroundColor = isDarkMode ? 'rgb(0,0,0)' : '#fff';
    const tooltipBg = isDarkMode ? '#1f2937' : '#fff';
    const tooltipText = isDarkMode ? '#f3f4f6' : '#111';
    const barColor = isDarkMode ? 'rgb(255, 255, 255)' : 'rgb(0, 0, 0)';

    return (
        <div className="mt-5 p-4 rounded-xl transition-colors duration-300" style={{ backgroundColor }}>

            <div>
                <ResponsiveContainer width="100%" height={200}>
                    <BarChart data={data}>
                        <YAxis stroke={axisColor} axisLine={false} tickLine={false} />
                        <Tooltip
                            contentStyle={{
                                backgroundColor: tooltipBg,
                                border: 'none',
                                color: tooltipText,
                            }}
                        />
                        <Bar dataKey="value" fill={barColor} barSize={10} radius={[6, 6, 6, 6]} />
                    </BarChart>
                </ResponsiveContainer>
            </div>
            <div className='mt-2'>
                <h5 className='text-zinc-900 dark:text-zinc-50'> Active User</h5>
                <p className='text-gray-500 dark:text-gray-200'><span className='text-emerald-700 dark:text-emerald-400'>(+20)</span>  than last week</p>

            </div>
            <div className='mt-4 flex gap-5 pe-4'>
                {list_col_chart.map(item => (
                    <div className='text-black '>
                        <div className='flex gap-2'>
                            <div className='w-[25px] h-[25px] flex items-center justify-center px-1 rounded-2 bg-blue-800'>
                               {item.icon}
                            </div>
                            <p className='text-[20px] mt-[-5px] text-zinc-900 dark:text-zinc-100'>{item.title}</p>
                        </div>
                        <h4 className='mt-[-10px] text-zinc-900 dark:text-zinc-100'>{item.num}</h4>
                        <div className='mt-[-17px]'>
                            <progress
                                value={item.value}
                                max="100"
                                className=" h-[4px] w-[70px] rounded overflow-hidden [&::-webkit-progress-bar]:bg-gray-100 [&::-webkit-progress-value]:bg-blue-500"
                            />
                        </div>
                    </div>
                ))}


            </div>
        </div>
    );
};

export default ColChart;
