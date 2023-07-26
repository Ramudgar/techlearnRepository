import axios from "axios";
import React, { useEffect, useState } from "react";

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
      <div className="container py-5">
        <div className="row text-center text-white mb-5">
          <div className="col-lg-7 mx-auto">
            <h1 className="display-4">Product List</h1>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-8 mx-auto">
            {/* List group*/}
            <ul className="list-group shadow">
              {/* list group item */}
              <li className="list-group-item">
                {/* Custom content*/}

                {products.map((product) => (
                    
                  <div className="media align-items-lg-center flex-column flex-lg-row p-3">
                    <div className="media-body order-2 order-lg-1">
                      <h5 className="mt-0 font-weight-bold mb-2">
                        {product.name}
                      </h5>
                      <p className="font-italic text-muted mb-0 small">
                        {product.description}
                      </p>
                      <div className="d-flex align-items-center justify-content-between mt-1">
                        <h6 className="font-weight-bold my-2">
                          {product.price} &emsp; {product.quantity}
                        </h6>
                      </div>
                    </div>
                    <img
                      src={product.image}
                      alt="Generic placeholder"
                      width={200}
                      className="ml-lg-5 order-1 order-lg-2"
                    />
                  </div>
                ))}

                {/* End */}
              </li>{" "}
              {/* End */}
            </ul>{" "}
            {/* End */}
          </div>
        </div>
      </div>
    </>
  );
}

export default Productview;
