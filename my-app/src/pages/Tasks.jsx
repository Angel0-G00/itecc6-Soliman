import { useEffect, useState } from 'react';
import { LuChevronRight, LuPlus } from 'react-icons/lu';
import TaskCard from '../components/TaskCard';

const mockTasks = [
    { id: 1, desc: "Activity", done: false },
    { id: 2, desc: "Assignment", done: false },
    { id: 3, desc: "Watch Ghibli Movies", done: true },
];

export default function Tasks({ searchKey }) {
    const [tasks, setTasks] = useState(mockTasks);
    const [description, setDescription] = useState("");

    useEffect(() => {
        setTasks(mockTasks.filter((item) => item.desc.includes(searchKey)));
    }, [searchKey]);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (description.trim() !== "") {
            setTasks([...tasks, {
                id: tasks.reduce((max, task) => (task.id > max ? task.id : max), 1),
                desc: description.trim(),
                done: false
            }])
        }
        setDescription("");
    }

    return (
        <div className="mt-2 p-4 ml-[300px]">
            <div className="flex flex-col md:flex-row gap-2 m-4 justify-between">
                <h1 className="text-5xl text-blue-950 font-bold">Tasks</h1>
                <div className="flex items-center gap-1 p-2 bg-blue-50 md:bg-transparent text-blue-800 text-m">
                    <span>Admin</span>
                    <LuChevronRight className="translate-0.25" />
                    <span>Tasks</span>
                </div>
            </div>
            <div className="border-b-1 border-black mb-4"></div>
            <div className="border-1 border-blue-800 rounded p-2 mb-4">
                <form action="" className="flex justify-between">
                    <input type="text" placeholder="What do you want to do?" value={description} maxLength={30} onChange={(e) => setDescription(e.target.value)} className="focus:outline-none w-full mr-2" />
                    <button onClick={handleSubmit} className="bg-blue-800 text-white p-2 rounded cursor-pointer">
                        <LuPlus />
                    </button>
                </form>
            </div>
            <div className="grid sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-2">
                {
                    mockTasks.length !== 0 ?
                        mockTasks.map(task => <TaskCard task={task} key={task.id} />) :
                        <div className="text-sm">No tasks found for "{searchKey}".</div>
                }
            </div>
        </div>
    );
}
