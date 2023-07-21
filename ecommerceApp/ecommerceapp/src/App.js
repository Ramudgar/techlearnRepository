import "./App.css";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import NavbarComponent from "./Components/user_frontend/navbar";
function App() {
  return (
    <Router>
      <NavbarComponent />

      {/* <Routes>
            <Route path="/" element={<Home />} />
             
          </Routes> */}
    </Router>
  );
}

export default App;
