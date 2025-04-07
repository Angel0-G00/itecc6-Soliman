import { LuChevronRight } from 'react-icons/lu';

const Dashboard = () => {
    return (
      <div className="mt-2 p-4 ml-[300px]">
        <div className="flex flex-col md:flex-row gap-2 m-4 justify-between">
          <h1 className="text-5xl text-blue-950 font-bold">Dashboard</h1>
          <div className="flex items-center gap-1 p-2 bg-blue-50 md:bg-transparent text-blue-800 text-m">
            <span>Admin</span>
            <LuChevronRight className="translate-0.25" />
            <span>Dashboard</span>
          </div>
        </div>
        <div className="border-b-1 border-black mb-4"></div>
        <div className="grid sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-2">
          <div className="bg-blue-100 p-4 rounded border-[rgba(0,0,0,0.1)] border-1 shadow">
            <h3 className="text-xl">Total Customers</h3>
            <p className="text-lg text-blue-800">24</p>
          </div>
          <div className="bg-blue-100  p-4 rounded border-[rgba(0,0,0,0.1)] border-1 shadow">
            <h3 className="text-xl">Active Projects</h3>
            <p className="text-lg text-blue-800">5</p>
          </div>
          <div className="bg-blue-100 p-4 rounded border-[rgba(0,0,0,0.1)] border-1 shadow">
            <h3 className="text-xl">Active Projects</h3>
            <p className="text-lg text-blue-800">5</p>
          </div>
        </div>
      </div>
    );
  };
  
  export default Dashboard;
  