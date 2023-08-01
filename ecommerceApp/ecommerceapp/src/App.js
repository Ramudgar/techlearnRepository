import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import "./App.css";
import Productview from "./Components/user_frontend/Productview";
import EditProductForm from "./Components/user_frontend/editProduct";
import Homepage from "./Components/user_frontend/homepage";
import Link from "./Components/user_frontend/link";
import Login from "./Components/user_frontend/login";
import NavbarComponent from "./Components/user_frontend/navbar";
import ProductForm from "./Components/user_frontend/productForm";
import Register from "./Components/user_frontend/register";
import ProtectedRoute from "./Components/config/protectedRoute";
function App() {
  return (
    <Router>
      <NavbarComponent />

      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/link" element={<Link />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route
          path="/productform"
          element={
            <ProtectedRoute>
              <ProductForm />
            </ProtectedRoute>
          }
        />

        <Route path="/productview" element={<Productview />} />
        <Route path="/editProduct/:id" element={<EditProductForm />} />
      </Routes>
    </Router>
  );
}

export default App;
