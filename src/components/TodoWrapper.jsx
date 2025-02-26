import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Todo } from './Todo.jsx';
import { TodoForm } from './TodoForm.jsx';
import { v4 as uuidv4 } from 'uuid';
import { EditTodoForm } from './EditTodoForm.jsx';

export const TodoWrapper = () => {
    const [toDos, setToDos] = useState([]);
    const [showCompleted, setShowCompleted] = useState(false);
    const navigate = useNavigate();

    const addToDo = toDo => {
        setToDos([...toDos, {
            id: uuidv4(),
            task: toDo,
            completed: false,
            isEditing: false
        }]);
    };

    const toggleComplete = id => {
        setToDos(toDos.map(todo => todo.id === id ? { ...todo, completed: !todo.completed } : todo ));
    };

    const deleteToDo = id => {
        setToDos(toDos.filter(todo => todo.id !== id));
    };

    const editToDo = id => {
        setToDos(toDos.map(todo => todo.id === id ? { ...todo, isEditing: !todo.isEditing } : todo));
    };

    const editTask = (newTask, id) => {
        setToDos(toDos.map(todo => todo.id === id ? { ...todo, task: newTask, isEditing: false } : todo));
    };

    const toggleCompletedFilter = () => {
        setShowCompleted(!showCompleted);
    };

    const filteredTasks = showCompleted ? toDos.filter(todo => todo.completed) : toDos;

    return (
        <div className="TodoWrapper max-w-lg mx-auto p-6 bg-white rounded-lg shadow-lg">
            <div className="flex justify-between items-center mb-4">
                <button 
                  className="px-4 py-2 border border-blue-500 rounded-lg text-blue-500 font-semibold hover:bg-blue-500 hover:text-white transition"
                  onClick={toggleCompletedFilter}>
                    {showCompleted ? 'Show All' : 'Show Completed'}
                </button>
            </div>
            <TodoForm addToDo={addToDo} />
            <div className="mt-4 space-y-4">
              {filteredTasks.map(todo => (
                  todo.isEditing ? (
                      <EditTodoForm
                          key={todo.id}
                          editToDo={editTask}
                          task={todo}
                      />
                  ) : (
                      <Todo
                          key={todo.id}
                          task={todo}
                          toggleComplete={toggleComplete}
                          deleteToDo={deleteToDo}
                          editToDo={editToDo}
                      />
                  )
              ))}
            </div>
        </div>
    )
}
