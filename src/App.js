import { Route, Routes } from "react-router-dom";
import Auth from "./pages/Auth";
import Home from "./pages/Home";
import SignUp from "./pages/SignUp";
import Todo from "./pages/Todo";
import TodoDetail from "./pages/TodoDetail";
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/auth" element={<Auth />} />
        <Route path="/todos" element={<Todo />} />
        <Route path="/todos/:id" element={<TodoDetail />} />

        <Route path="/signup" element={<SignUp />} />
      </Routes>
    </div>
  );
}

export default App;
