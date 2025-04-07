import { Link } from 'react-router-dom';
import { LuChevronRight } from 'react-icons/lu';
import CustomerCard from '../components/CustomerCard';

const mockCustomers = [
    {id: 1, name: "Alex Johnson", email: "alex@example.com"},
    {id: 2, name: "Sam Wilson", email: "sam@example.com"}
];

export default function Customers() {
    return (
        <div className="mt-2 p-4 ml-[300px]">
            <div className="flex flex-col md:flex-row gap-2 m-4 justify-between">
                <h1 className="text-5xl text-blue-950 font-bold">Customers</h1>
                <div className="flex items-center gap-1 p-2 bg-blue-50 md:bg-transparent text-blue-800 text-m">
                    <span>Admin</span>
                    <LuChevronRight className="translate-0.25"/>
                    <span>Customers</span>
                </div>
            </div>
            <div className="border-b-1 border-black mb-4"></div>
            <div className="grid sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-2">
                {
                    mockCustomers.length !== 0 ? 
                    mockCustomers.map(customer =>
                        <Link to={`/customers/${customer.id}`} key={customer.id}>
                            <CustomerCard customer={customer} />
                        </Link>
                    ) : 
                    <div className="text-sm">No customers found.</div>
                }
            </div>
        </div>
    )
};
