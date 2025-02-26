import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPenToSquare, faTrash } from '@fortawesome/free-solid-svg-icons';

export const Todo = ({ task, toggleComplete, deleteToDo, editToDo }) => {
    return (
        <div className="Todo flex justify-between items-center p-4 bg-white rounded-lg shadow-md">
            <div className="flex items-center">
                <input
                    type="checkbox"
                    checked={task.completed}
                    onChange={() => toggleComplete(task.id)}
                    className="mr-3 h-5 w-5 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                />
                <p className={`text-lg ${task.completed ? 'line-through text-gray-500' : 'text-gray-800'} font-medium`}>
                    {task.task}
                </p>
            </div>
            <div className="flex items-center space-x-3">
                <FontAwesomeIcon
                    icon={faPenToSquare}
                    onClick={() => editToDo(task.id)}
                    className="text-green-500 hover:text-green-600 cursor-pointer"
                />
                <FontAwesomeIcon
                    icon={faTrash}
                    onClick={() => deleteToDo(task.id)}
                    className="text-red-500 hover:text-red-600 cursor-pointer"
                />
            </div>
        </div>
    )
}
