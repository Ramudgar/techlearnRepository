import axios from "axios";
import React, { useEffect, useState } from "react";
import ProductCard from "./productCard";

function Productview() {
  // use useEffect to get the data from the backend

  const [products, setProduct] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:5000/getProduct")
      .then((response) => {
        // console.log(response);
        console.log(response.data);
        setProduct(response.data.product);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <>
      {products.map((product) => (
        <ProductCard
          name={product.name}
          price={product.price}
          description={product.description}
          quantity={product.quantity}
          category={product.category}
          image={product.image}
        />
      ))}
    </>
  );
}
export default Productview;
