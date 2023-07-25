import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import "./App.css";
import NavbarComponent from "./Components/user_frontend/navbar";
import Homepage from "./Components/user_frontend/homepage";
import Link from "./Components/user_frontend/link";
import Register from "./Components/user_frontend/register";
import Login from "./Components/user_frontend/login";
function App() {
  return (
    <Router>
      <NavbarComponent />

      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/link" element={<Link />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </Router>
  );
}

export default App;
