import React from "react";

function ProductCard({ name, price, quantity, description, category, image }) {
  const tokens = localStorage.getItem("token");
  const userData = localStorage.getItem("userData");

  console.log(userData);

  return (
    <>
      <div className="container py-5">
        <div className="row">
          <div className=" d-flex border border-primary shadow m-2 justify-content-between align-items-center col-lg-10">
            <div className="media-body ">
              <h5 className="mt-0 font-weight-bold mb-2">{name}</h5>
              <p className="font-italic text-muted mb-0 small">{description}</p>
              <div className="d-flex align-items-center justify-content-between mt-1">
                <h6 className="font-weight-bold my-2">
                  {price} &emsp; {quantity}
                </h6>
                <span>{category}</span>
              </div>
            </div>
            <div>
              <img
                src={image}
                alt="Generic placeholder"
                width={200}
                className="ml-lg-5 order-1 order-lg-2"
              />
            </div>
            <div className="">
              {/* if token then create button for edit and delete else add to cart */}
              {tokens ? (
                <>
                  <button className="btn btn-primary">Edit</button>
                  <button className="btn btn-danger">Delete</button>
                </>
              ) : (
                <>
                  <button className="btn btn-primary">Add to cart</button>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ProductCard;
