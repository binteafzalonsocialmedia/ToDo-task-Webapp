function App() {
  return (
    <div className="bg-white m-0 p-2 flex flex-row">

      <div className="flex flex-col shadow-xl hidden sm:hidden md:flex lg:flex">
        {/* navbar */}
        <h1 className="text-xl sm:text-2xl md:text-2xl lg:text-3xl font-bold text-center">Taskify</h1>
        <div className="m-0 p-4 text-black flex flex-col justify-center">
          <a href="http://" className="text-black bg-white hover:text-white p-1 hover:bg-purple-700 hover:rounded-lg active:scale-110 hover:shadow-lg">
            <span>🏠︎</span>
            Dashboard</a>
          <a href="http://" className="text-black bg-white hover:text-white p-1 hover:bg-purple-700 hover:rounded-lg active:scale-110 hover:shadow-lg">
            <span>🎯</span>
            My Tasks</a>
          <a href="http://" className="text-black bg-white hover:text-white p-1 hover:bg-purple-700 hover:rounded-lg active:scale-110 hover:shadow-lg">
            <span>⏲</span>
            Today</a>
          <a href="http://" className="text-black bg-white hover:text-white p-1 hover:bg-purple-700 hover:rounded-lg active:scale-110 hover:shadow-lg">
            <span>🗓️</span>
            Upcoming</a>
          <a href="http://" className="text-black bg-white hover:text-white p-1 hover:bg-purple-700 hover:rounded-lg active:scale-110 hover:shadow-lg">
            <span>✅</span>
            Completed</a>
          <a href="http://" className="text-black bg-white hover:text-white p-1 hover:bg-purple-700 hover:rounded-lg active:scale-110 hover:shadow-lg">
            <span>☷</span>
            Categories</a>
          <a href="http://" className="text-black bg-white hover:text-white p-1 hover:bg-purple-700 hover:rounded-lg active:scale-110 hover:shadow-lg">
            <span>📈</span>
            Statistics</a>
          <a href="http://" className="text-black bg-white hover:text-white p-1 hover:bg-purple-700 hover:rounded-lg active:scale-110 hover:shadow-lg">
            <span>⚙️</span>
            Settings</a>
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
      <div className="flex flex-col p-2">

        <div className="flex flex-col sm:flex-col md:flex-row gap-2 sm:gap-8 md:gap-12 lg:gap-20">
          <div className="flex flex-col">
            <h1 className="text-xl sm:text-2xl md:text-2xl lg:text-3xl font-bold ">Good morning, Alex!</h1>
            <p className="font-normal">Let's get some tasks done today.</p>
          </div>

          <span className="flex justify-between gap-2 ">
            <span><input type="search" name="" id="" placeholder="🔍︎ Search tasks...." className="w-fit border px-4 rounded-full p-2" /></span>
            <span className="p-2 border h-fit bg-purple-400 rounded-lg ">🔔</span>
            <span className="p-2 ">👤</span>
          </span>
        </div>


        {/* cards */}
        <div className="grid grid-cols sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 w-full gap-4 p-4 py-8 m-4 ">

          <div className="shadow-lg rounded-xl p-4 hover:shadow-xl hover:-translate-y-1 hover:transition duration-300 hover:scale-105 hover:border border-purple-600 hover:bg-purple-400">
            <span className="p-2 m-2">
              <span className="border-white m-2 rounded bg-purple-500 p-1">📋</span>
              Total Tasks
            </span>
            <div className="m-2"> 24</div>
            <p>task details</p>
          </div>

          <div className="shadow-lg rounded-xl p-4 hover:shadow-xl hover:-translate-y-1 hover:transition duration-300 hover:scale-105 hover:border border-purple-600 hover:bg-purple-400">
            <span className="p-2 m-2 " >
              <span className="border-white m-2 rounded bg-purple-500 p-1">☑️</span>
              Tasks Done
            </span>
            <div className="m-2 "> 24</div>
            <p>task details</p>
          </div>

          <div className="shadow-lg rounded-xl p-4 hover:shadow-xl hover:-translate-y-1 hover:transition duration-300 hover:scale-105 hover:border border-purple-600 hover:bg-purple-400">
            <span className="p-2 m-2 " >
              <span className="border-white m-2 rounded bg-purple-500 p-1">⏳</span>
              Pending Tasks
            </span>
            <div className="m-2 "> 24</div>
            <p>task details</p>
          </div>

          <div className="shadow-lg rounded-xl p-4 hover:shadow-xl  hover:-translate-y-1 hover:transition duration-300 hover:scale-105 hover:border border-purple-600 hover:bg-purple-400">
            <span className="p-2 m-2 " >
              <span className="border-white m-2 rounded bg-purple-500 p-1">⭕</span>
              Incomplete Tasks
            </span>
            <div className="m-2 "> 24</div>
            <p>task details</p>
          </div>
        </div>


        <div className="grid grid-cols sm:grid-cols-1 md:grid-cols-2 gap-4">
          <input type="search" name="" className="border border-black p-2 m-1 rounded flex-1 hover:transition duration-300 " id="" placeholder="🔍︎ Search Tasks here......."
          />
          <span>
            <button className="border rounded bg-purple-400 m-1 p-2 px-4 hover:bg-purple-700 hover:scale-105 hover:text-white cursor-pointer">Search</button>
            <button className="border rounded bg-purple-400 m-1 p-2 px-4 hover:bg-purple-700 cursor-pointer hover:scale-110 hover:text-white hover:-translate-y-1 hover:shadow-xl">+ Add Task</button>
          </span>
        </div>

      </div>
    </div>
  );
}

export default App;

