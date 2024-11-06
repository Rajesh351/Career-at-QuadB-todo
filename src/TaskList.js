import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { MdStarBorder, MdStar } from "react-icons/md";
import { CiBellOn, CiCalendar } from "react-icons/ci";
import { LiaSyncSolid } from "react-icons/lia";
import { setSelectdUser } from './redux/authSlice';

const TaskList = () => {
    const dispatch = useDispatch();
    const { selected } = useSelector(store => store.auth);
    const [taskInput, setTaskInput] = useState("");
    const [tasks, setTasks] = useState([
        { id: 1, name: 'Buy groceries', isCompleted: false },
        { id: 2, name: 'Finish project report', isCompleted: false },
        { id: 3, name: 'Call the bank', isCompleted: false },
        { id: 4, name: 'Schedule dentist appointment', isCompleted: false },
        { id: 5, name: 'Plan weekend trip', isCompleted: false },
    ]);

    // Function to handle task input change
    const handleInputChange = (e) => {
        setTaskInput(e.target.value);
    };

    // Function to add a new task to the task list
    const handleAddTask = () => {
        if (taskInput.trim()) {
            const newTask = { id: Date.now(), name: taskInput.trim(), isCompleted: false };
            setTasks([...tasks, newTask]);
            setTaskInput("");  // Clear the input field
        }
    };

    // Function to toggle the completion status of a task
    const toggleCompletion = (taskId) => {
        setTasks(tasks.map(task =>
            task.id === taskId ? { ...task, isCompleted: !task.isCompleted } : task
        ));
    };

    const handleStarClick = () => {
        // Toggle the value of selected
        dispatch(setSelectdUser(!selected));
    };

    return (
        <div className={`p-5 bg-gray-100 rounded-lg shadow-md ${selected ? 'w-[]' : 'w-[850px]'}`}>
            {/* Add Task Section */}
            <div className="mb-5 p-3 bg-green-100 rounded-lg">
                <div className="text-xs font-light mt-12">
                    <input
                        type="text"
                        value={taskInput}
                        onChange={handleInputChange}
                        className="border-none rounded px-2 py-1 bg-green-100"
                        placeholder="Add a task"
                    />
                </div>
                <div className="flex justify-between items-center mt-5">
                    <div className="flex gap-4 text-lg">
                        <CiBellOn />
                        <LiaSyncSolid />
                        <CiCalendar />
                    </div>
                    <button
                        onClick={handleAddTask}
                        className="bg-green-500 text-white py-2 px-4 rounded"
                    >
                        Add Task
                    </button>
                </div>
            </div>

            {/* Display Incomplete Tasks */}
            <h3 className="text-lg mt-5">Incomplete Tasks</h3>
            <div className="bg-white p-5 rounded-lg mt-2">
                {tasks.filter(task => !task.isCompleted).map((task) => (
                    <div key={task.id} className="flex items-center justify-between py-2 border-b">
                        <div className="flex items-center">
                            <input
                                type="checkbox"
                                checked={task.isCompleted}
                                onChange={() => toggleCompletion(task.id)}
                                className="mr-2"
                            />
                            <span>{task.name}</span>
                        </div>
                        {selected ? (
                            <MdStar size={20} onClick={handleStarClick} />
                        ) : (
                            <MdStarBorder size={20} onClick={handleStarClick} />
                        )}
                    </div>
                ))}
            </div>

            {/* Display Completed Tasks */}
            <h3 className="text-lg mt-5">Completed Tasks</h3>
            <div className="bg-white p-5 rounded-lg mt-2">
                {tasks.filter(task => task.isCompleted).map((task) => (
                    <div key={task.id} className="flex items-center justify-between py-2 border-b line-through text-gray-500">
                        <div className="flex items-center">
                            <input
                                type="checkbox"
                                checked={task.isCompleted}
                                onChange={() => toggleCompletion(task.id)}
                                className="mr-2"
                            />
                            <span>{task.name}</span>
                        </div>
                        <MdStarBorder size={20} />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default TaskList;
