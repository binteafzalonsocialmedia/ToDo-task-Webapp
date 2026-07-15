import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";

function EditedTask({ tasks, editTask }) {
    const { id } = useParams();
    const taskId = Number(id);
    const foundTask = tasks.find((task) =>
        task.id === taskId);
    console.log(foundTask);
    const [editedTitle, setEditedTitle] = useState(foundTask.title);
    const navigate = useNavigate();

    return (
        <div className="flex items-center h-screen justify-center items-center bg-gray-100 text-center">
            <div className="flex text-center px-10 p-8 flex-col rounded-lg bg-white shadow-xl  gap-4  hover:transition duraton-300 ">
                <h1 className="text-3xl font-bold text-center">Edit Your Task Here</h1>
                <input value={editedTitle} className="bg-gray-200 p-2 rounded-lg "
                    onChange={(event) => setEditedTitle(event.target.value)} type="text" placeholder="Write new title here..............." />
                <div className="flex flex-row gap-4 ">
                    <button className="flex border  bg-green-400 p-1 px-2 rounded" onClick={() => { editTask(taskId, editedTitle); navigate("/") }}>Save</button>
                </div>
            </div>
        </div>
    );
};
export default EditedTask;