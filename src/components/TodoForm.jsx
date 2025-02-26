import React, { useState } from 'react';

export const TodoForm = ({ addToDo }) => {
    const [value, setValue] = useState("");

    const handleSubmit = e => {
        e.preventDefault();
        if (value.trim()) {
          addToDo(value);
          setValue("");
        }
    };

    return (
        <form onSubmit={handleSubmit} className="flex gap-2 mb-4">
            <input
             type="text"
             className="flex-1 border border-gray-300 p-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-black"
            value={value}
            placeholder="Enter task"
            onChange={(e) => setValue(e.target.value)}
            />

            <button
                type="submit"
                className="px-4 py-2 bg-blue-500 text-white font-semibold rounded-lg hover:bg-blue-600 transition">
                    Add Task
            </button>
        </form>
    )
}
