import React from 'react'
import {data} from '../../utils/rawData'
interface dataInterface{
    name:  string
    title:  string
    price: string
    company:  string
    location: string 
}
export default function Table() {
  return (
    <div>
        <table className="min-w-full divide-y divide-gray-200 ">
  <thead className="sr-only">
    <tr>
      <th className="py-2"></th>
      <th className="py-2"></th>
      <th className="py-2"></th>
      <th className="py-2"></th>
      <th className="py-2"></th>
    </tr>
  </thead>
  <tbody className='no-scrollbar'>
  {data.map((item:dataInterface, index:number) => (
      <tr key={index} className={index % 2 === 0 ? 'bg-white px-20 overflow-y-scroll  ' : 'bg-[#F6F6F6] px-20 overflow-y-scroll no-scrollbar' }>
        <td className="py-2 px-4">{item.name}</td>
        <td className="py-2 px-4">{item.title}</td>
        <td className="py-2 px-4">{item.price}</td>
        <td className="py-2 px-4">{item.company}</td>
        <td className="py-2 px-4">{item.location}</td>
      </tr>
    ))}
   
  </tbody>
</table>

    </div>
  )
}
