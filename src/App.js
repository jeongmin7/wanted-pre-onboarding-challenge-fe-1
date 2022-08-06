import { Route, Routes } from "react-router-dom";
import Auth from "./components/Auth";
import Home from "./components/Home";
import Login from "./components/Login";
import SignUp from "./components/SignUp";
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/auth" element={<Auth />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
      </Routes>
    </div>
  );
}

export default App;
