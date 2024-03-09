import React from 'react';
import data from "../../appData.json";

const LeaveType = () => {
  const listData =  data.leaveMangement[0].leaveTypeList
  return (
    <div>
      <table className="table-auto w-full text-sm text-left rtl:text-right text-black  dark:text-gray-400">
  <thead className='text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400'>
    <tr className='h-[100px]'>
      <th className='px-6 py-3'>Leave Type Name</th>
      <th className='px-6 py-3'>Leave Type Details</th>
      <th className='px-6 py-3'>Created ON</th>
      <th className='px-6 py-3'>Status</th>
    </tr>
  </thead>
  <tbody>
    {listData.map((item)=>(
      <tr className ="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700 h-[100px]">
      <td className='px-6 py-3 '> {item.name}</td>
      <td className=''>{item.details}</td>
      <td className=''>{item.createdOn}</td>
      <td className=' '>{item.status}</td>
    </tr>
    ))}
    
  </tbody>
</table>
​

    </div>
  )
}

export default LeaveType