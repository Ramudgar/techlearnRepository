import axios from "axios";
import { useState } from "react";
import {
  Route,
  BrowserRouter as Router,
  Routes,
  useNavigate,
} from "react-router-dom";
import "./App.css";
import ProtectedRoute from "./Components/config/protectedRoute";
import Productview from "./Components/user_frontend/Productview";
import EditProductForm from "./Components/user_frontend/editProduct";
import Homepage from "./Components/user_frontend/homepage";
import Link from "./Components/user_frontend/link";
import Login from "./Components/user_frontend/login";
import NavbarComponent from "./Components/user_frontend/navbar";
import ProductForm from "./Components/user_frontend/productForm";
import Register from "./Components/user_frontend/register";
import SearchResultsPage from "./Components/user_frontend/searchResultPage";

function App() {
  const [results, setResults] = useState([]); // State to store search results
  const navigate = useNavigate();

  // Function to handle search
  const handleSearch = async (query) => {
    try {
      const response = await axios.get(
        `http://localhost:5000/searchProduct?name=${query}`
      );
      setResults(response.data.products);
      // navigate("/search-results");
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <Router>
      <NavbarComponent onSearch={handleSearch} />

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
        <Route
          path="/editProduct/:id"
          element={
            <ProtectedRoute>
              <EditProductForm />
            </ProtectedRoute>
          }
        />

        <Route
          path="/search-results"
          element={<SearchResultsPage results={results} />}
        />
      </Routes>
    </Router>
  );
}

export default App;
