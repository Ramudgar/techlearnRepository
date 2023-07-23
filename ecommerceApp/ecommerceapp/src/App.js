import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import "./App.css";
import NavbarComponent from "./Components/user_frontend/navbar";
import Homepage from "./Components/user_frontend/homepage";
import Link from "./Components/user_frontend/link";
function App() {
  return (
    <Router>
      <NavbarComponent />

      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/link" element={<Link />} />
      </Routes>
       
    </Router>
  );
}

export default App;
