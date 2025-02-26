import { TodoWrapper } from './components/TodoWrapper'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className="App container mx-auto p-4 bg-gray-50 min-h-screen">
      <h1 className="text-4xl font-bold text-gray-800 mb-6">To Do List</h1>
      <Router>
        <Routes>
          <Route path="/" element={<TodoWrapper />} />
        </Routes>
      </Router>
    </div>
  )
}

export default App;
