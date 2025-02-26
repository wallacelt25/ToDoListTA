import React, { useState } from 'react';

export const EditTodoForm = ({ editToDo, task }) => {
    const [value, setValue] = useState(task.task);

    const handleSubmit = e => {
        e.preventDefault();
        if (value.trim()){
          editToDo(value, task.id);
        }
    };

    return (
        <form onSubmit={handleSubmit} className="flex gap-2 p-4 bg-gray-100 rounded-lg shadow-md">
            <input
                type="text"
                value={value}
                onChange={(e) => setValue(e.target.value)}
                className="flex-1 border border-gray-300 p-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-800"
                placeholder="Update task" 
            />
            <button
                type="submit"
                className="px-4 py-2 bg-green-500 text-white font-semibold rounded-lg hover:bg-green-600 transition">
                    Update Task
            </button>
        </form>
    )
}
