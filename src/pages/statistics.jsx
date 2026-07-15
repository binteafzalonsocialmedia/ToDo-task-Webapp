function Statistics({ tasks }) {
    return (
        <div className="bg-gray-100 min-h-screen flex flex-col jusify-center items-center p-8  gap-6 ">

            <div className="flex flex-col p-4 ">
                <h1 className="text-3xl font-bold">📊 Statistics</h1>
                <p className="text-gray-500">Overview of your task progress.</p>
            </div>

            <div className="flex flex-col md:flex-row  gap-4 ">
                <div className="shadow-lg rounded-xl p-6 hover:shadow-xl hover:-translate-y-1 hover:transition duration-300 hover:scale-105 hover:border border-gray-600 hover:bg-white hover:shadow-2xl hover:-translate-y-2 transition-all duration-300">
                    <span className="p-2 m-2 " >
                        <span className="border-white m-2 rounded bg-purple-500 p-1">☑️</span>
                        Tasks Done
                    </span>
                    <div className="text-3xl font-bold mt-3">{tasks.filter(task => task.completed).length}</div>
                    <p>Completed</p>
                </div>

                <div className="shadow-lg rounded-xl p-6 hover:shadow-xl hover:-translate-y-1 hover:transition duration-300 hover:scale-105 hover:border border-gray-600 hover:bg-white hover:shadow-2xl hover:-translate-y-2 transition-all duration-300">
                    <span className="p-2 m-2 " >
                        <span className="border-white m-2 rounded bg-purple-500 p-1">⏳</span>
                        Pending Tasks
                    </span>
                    <div className="text-3xl font-bold mt-3">{tasks.filter(task => !task.completed).length}</div>
                    <p>Not done Yet</p>
                </div>

                <div className="shadow-lg rounded-xl p-6 hover:shadow-xl  hover:-translate-y-1 hover:transition duration-300 hover:scale-105 hover:border border-gray-600 hover:bg-white hover:shadow-2xl hover:-translate-y-2 transition-all duration-300">
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
        </div>

    )
};

export default Statistics;