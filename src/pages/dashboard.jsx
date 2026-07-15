import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function Dashboard({ tasks, addTask, deleteTask, toggleTask, editTask }) {

    const [title, setTitle] = useState("");
    const [search, setSearch] = useState("");

    return (

        <div className="min-h-screen bg-gray-100 flex flex-col md:flex-row">


            <div className="hidden md:flex flex-col w-64 bg-white shadow-xl p-4">
                {/* navbar */}
                <h1 className="text-xl sm:text-2xl md:text-2xl lg:text-3xl font-bold text-center">Taskify</h1>
                <div className="m-0 p-4 text-black flex flex-col justify-center">
                    <Link to="/" className="text-black bg-white hover:text-white p-1 hover:bg-purple-700 hover:rounded-lg active:scale-110 hover:shadow-lg">
                        <span>🏠︎</span>
                        Dashboard</Link>
                    <Link to="/" className="text-black bg-white hover:text-white p-1 hover:bg-purple-700 hover:rounded-lg active:scale-110 hover:shadow-lg">
                        <span>🎯</span>
                        My Tasks</Link>
                    <Link to="/pending" className="text-black bg-white hover:text-white p-1 hover:bg-purple-700 hover:rounded-lg active:scale-110 hover:shadow-lg">
                        <span>🗓️</span>
                        Pending </Link>
                    <Link to="/completed" className="text-black bg-white hover:text-white p-1 hover:bg-purple-700 hover:rounded-lg active:scale-110 hover:shadow-lg">
                        <span>✅</span>
                        Completed</Link>
                    <Link to="/statistics" className="text-black bg-white hover:text-white p-1 hover:bg-purple-700 hover:rounded-lg active:scale-110 hover:shadow-lg">
                        <span>📈</span>
                        Statistics</Link>
                </div>
                {/* plan selection */}
                <div className="flex flex-col text-center items-center justify-center bg-purple-600 rounded m-2 p-2 sm:m-2 sm:p-2 md:m-2 md:p-2 lg:m-4 lg:p-2">
                    <div className="border border-white bg-blue-200 rounded-full p-2">🚀</div>
                    <h3 className="p-2">Upgrade to Pro</h3>
                    <p className="p-2">Unlock all features and get full access </p>
                    <button className="p-2 w-fit rounded text-center border bg-white text-black">Upgrade Now</button>
                </div>
            </div>

            {/* dashboard */}
            <div className="flex-1 p-4 md:p-8">

                <div className="flex flex-col justify-between  sm:flex-col md:flex-row gap-2 sm:gap-8 md:gap-12 lg:gap-20">
                    <div className="flex flex-col">
                        <h1 className="text-xl sm:text-2xl md:text-2xl lg:text-3xl font-bold ">Good morning, Alex!</h1>
                        <p className="font-normal">Let's get some tasks done today.</p>
                    </div>

                    <span className="flex justify-between gap-2 ">
                        <span className="p-2 border h-fit bg-purple-400 rounded-lg ">🔔</span>
                        <span className="p-2 ">👤</span>
                    </span>
                </div>


                {/* cards */}
                <div className="grid grid-cols sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 w-full gap-4 p-4 py-8 m-4 ">

                    <div className="shadow-lg rounded-xl p-4 hover:shadow-xl hover:-translate-y-1 hover:transition duration-300 hover:scale-105 hover:border border-gray-600 hover:bg-white hover:shadow-2xl hover:-translate-y-2 transition-all duration-300">
                        <span className="p-2 m-2">
                            <span className="border-white m-2 rounded bg-purple-500 p-1">📋</span>
                            Total Tasks
                        </span>
                        <div className="m-2">
                            <h1 className="text-3xl font-bold mt-3">
                                {tasks.length}
                            </h1></div>
                        <p>Your All Tasks </p>
                    </div>

                    <div className="shadow-lg rounded-xl p-4 hover:shadow-xl hover:-translate-y-1 hover:transition duration-300 hover:scale-105 hover:border border-gray-600 hover:bg-white hover:shadow-2xl hover:-translate-y-2 transition-all duration-300">
                        <span className="p-2 m-2 " >
                            <span className="border-white m-2 rounded bg-purple-500 p-1">☑️</span>
                            Tasks Done
                        </span>
                        <div className="text-3xl font-bold mt-3">{tasks.filter(task => task.completed).length}</div>
                        <p>Completed</p>
                    </div>

                    <div className="shadow-lg rounded-xl p-4 hover:shadow-xl hover:-translate-y-1 hover:transition duration-300 hover:scale-105 hover:border border-gray-600 hover:bg-white hover:shadow-2xl hover:-translate-y-2 transition-all duration-300">
                        <span className="p-2 m-2 " >
                            <span className="border-white m-2 rounded bg-purple-500 p-1">⏳</span>
                            Pending Tasks
                        </span>
                        <div className="text-3xl font-bold mt-3">{tasks.filter(task => !task.completed).length}</div>
                        <p>Not done Yet</p>
                    </div>

                    <div className="shadow-lg rounded-xl p-4 hover:shadow-xl  hover:-translate-y-1 hover:transition duration-300 hover:scale-105 hover:border border-gray-600 hover:bg-white hover:shadow-2xl hover:-translate-y-2 transition-all duration-300">
                        <span className="p-2 m-2 " >
                            <span className="border-white m-2 rounded bg-purple-500 p-1">📈</span>
                            Percentage Progress
                        </span>
                        <div className="text-3xl font-bold mt-3">{tasks.length === 0
                            ? "0%"
                            : Math.round(
                                tasks.filter(task => task.completed).length /
                                tasks.length * 100
                            ) + "%"
                        }</div>
                        <p>task details</p>
                    </div>
                </div>


                <div className="flex justify-between my-4 gap-4">
                    <input type="search" name="" value={search} onChange={(e) => setSearch(e.target.value)} className="border border-gray-300 rounded-xl px-4 py-3 flex-1 focus:outline-none focus:ring-2 focus:ring-purple-500" id="" placeholder="🔍︎ Search Tasks here......."
                    />
                    <span>
                        <button className="border rounded bg-purple-400 m-1 p-2 px-4 hover:bg-purple-700 hover:scale-105 hover:text-white cursor-pointer" onClick={() => { }}>Search</button>
                    </span>
                </div>

                <div className="flex flex-col md:flex-row gap-4 bg-white rounded-xl shadow-lg p-6">

                    <label htmlFor="text">Task Title:</label>

                    <input type="title" value={title} onChange={(event) => setTitle(event.target.value)} name="title" className="border w-full flex-3 border-black p-1 m-1 rounded flex-1 hover:transition duration-300" placeholder="Add task title here....." />
                    <button className="border rounded bg-purple-400 py-1 px-4 hover:bg-purple-700 cursor-pointer hover:scale-110 hover:text-white hover:-translate-y-1 w-fit  hover:shadow-xl" onClick={() => { addTask(title); setTitle(""); }} >Add Task</button>
                </div>


                {/* taskcards */}
                <div className="grid sm:grid-cols-1 lg:grid-cols-2">

                    {tasks
                        .filter(task => task.title.toLowerCase().includes(search.toLowerCase()))
                        .map((task, id) => (
                            <div name="task" key={task.id} className={`shadow-xl rounded-lg p-3 items-center flex flex-col justify-between ${task.completed ? "bg-green-200 border-l-4 border  border-green-500" : "bg-white border-l-4 border border-purple-600"} gap-4 m-4 hover:shadow-xxl hover:-translate-y-1 hover:transition duration-300 hover:border `}>
                                <h2>{task.title}</h2>
                                <span className="flex flex-row gap-6 ">
                                    <button className="border p-1 rounded-lg  cursor-pointer " onClick={() => deleteTask(task.id)}>Delete Task</button>
                                    <Link to={"/editTask/" + task.id} className="border p-1 rounded-lg cursor-pointer bg-blue-300" key={task.id} >Edit Task</Link>
                                    <button className="border p-1 rounded-lg cursor-pointer hover:scale-105" value="title" onClick={() => toggleTask(task.id)}> {task.completed ? "Task Completed" : "Pending Task"}</button>
                                </span>
                            </div>
                        ))}

                </div>


            </div>
        </div>
    );
};

export default Dashboard;