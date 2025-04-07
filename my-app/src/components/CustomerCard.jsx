import { LuArrowRight } from 'react-icons/lu';

export default function CustomerCard({ customer }) {
  return (
      <article className="relative bg-blue-100 p-4 border-[rgba(0,0,0,0.1)] border-1 shadow-xs transition-all hover:text-blue-800 hover:shadow-lg hover:scale-105 hover:z-10 rounded-lg">
          <h2 className="text-2xl text-blue-700 font-bold">{customer.name}</h2>
          <p className="text-base italic">{customer.email}</p>
          <div className="inline-block bg-green-200 text-green-600 text-xs py-1 px-2 absolute top-2 right-2 text-center rounded">Active</div>
          <div className="absolute top-13 right-5 text-black">
            <LuArrowRight />
          </div>
      </article>
  )
};
