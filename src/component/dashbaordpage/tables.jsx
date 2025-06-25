import React, { useContext } from 'react';
import Avatar from '@mui/material/Avatar';
import AvatarGroup from '@mui/material/AvatarGroup';
import '../../App.css';
import { api } from '../../template/layout';

const Tables = () => {
  const context = useContext(api);

  return (
    <div className="p-4 text-gray-700 dark:text-gray-100">
      <h6 className="font-[700] mt-[-10px]">Authors Tables</h6>

      {/* ✅ Scrollable container */}
      <div className="overflow-x-auto w-full mt-4">
        <table className="min-w-[700px] w-full border-collapse">
          <thead>
            <tr className="border-b text-gray-600 dark:text-gray-300">
              <th className="text-left font-[600] p-2 border-b border-gray-100 text-[14px]">Author</th>
              <th className="text-left font-[600] p-2 border-b border-gray-100 text-[14px]">Function</th>
              <th className="text-left font-[600] p-2 border-b border-gray-100 text-[14px]">Status</th>
              <th className="text-left font-[600] p-2 border-b border-gray-100 text-[14px]">Employed</th>
            </tr>
          </thead>

          <tbody>
            {[1, 2].map((_, index) => (
              <tr key={index} className="border-b border-gray-400">
                {/* Author */}
                <td className="p-2 border-b border-gray-300">
                  <div className="flex items-center gap-2">
                    <img
                      src="/image/img-project.webp"
                      alt="avatar"
                      className="w-[30px] md:w-10 h-[30px] md:h-10 rounded-full object-cover"
                    />
                    <p className="m-0 font-[600] text-gray-600 dark:text-gray-300 text-sm md:text-[16px]">Client</p>
                  </div>
                </td>

                {/* Function (avatars) */}
                <td className="p-2 border-b border-gray-300">
                  <AvatarGroup spacing="medium" sx={{ width: '100px' }}>
                    <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" sx={{ width: 32, height: 32 }} />
                    <Avatar alt="Travis Howard" src="/static/images/avatar/2.jpg" sx={{ width: 32, height: 32 }} />
                    <Avatar alt="Cindy Baker" src="/static/images/avatar/3.jpg" sx={{ width: 32, height: 32 }} />
                  </AvatarGroup>
                </td>

                {/* Status */}
                <td className="p-2 border-b border-gray-300">
                  <p className="py-[3px] bg-sky-600 text-center text-gray-100 rounded-2 font-[600] text-[12px] md:text-[14px] w-[50px] md:w-[60px]">
                    active
                  </p>
                </td>

                {/* Progress */}
                <td className="p-2 border-b border-gray-300">
                  <div className="w-[100px] md:w-[150px] flex flex-col leading-none gap-1">
                    <p className="m-0 font-[600]">80%</p>
                    <progress
                      id={context.isDarkMode ? 'darkprogress' : 'lightprogress'}
                      className="rounded-full appearance-none m-0"
                      style={{ height: '5px' }}
                      value={80}
                      max={100}
                    />
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Tables;
