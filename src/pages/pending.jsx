function Pending({ tasks }) {
    return (
        <div className="bg-gray-100 min-h-screen ">
            <div className=" m-8 p-8 shadow-lg rounded-xl p-4 hover:shadow-xl hover:-translate-y-1 hover:transition duration-300 hover:scale-105 hover:border border-gray-600 hover:bg-white hover:shadow-xl hover:-translate-y-2  duration-300">
                <h1 className="text-3xl font-bold " >
                    ⏳
                    Pending Tasks
                </h1>
                <div className="text-3xl font-bold mt-3">{tasks.filter(task => !task.completed).length}</div>
                <p>Not done Yet</p>
            </div>
        </div>
    )
};

export default Pending;