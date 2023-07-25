import React from "react";

function ProductForm() {
  return (
    <>
      <div className="container">
        <form>
          <div className="form-group">
            <label htmlFor="inputproductName">Product Name</label>
            <input
              type="text"
              className="form-control"
              id="inputproductName"
              placeholder="Product Name"
            />
          </div>
          <div className="form-group">
            <label htmlFor="price">Price</label>
            <input
              type="number"
              className="form-control"
              id="price"
              placeholder="Price"
            />
          </div>
          <div className="form-group">
            <label htmlFor="quantity">Quantity</label>
            <input
              type="number"
              className="form-control"
              id="quantity"
              placeholder="quantity"
            />
          </div>
          <div className="form-group">
            <label htmlFor="description">Description</label>
            <input
              type="text"
              className="form-control"
              id="description"
              placeholder="Username"
            />
          </div>
          <div className="form-group">
            <h5>Select a category:</h5>
            <select id="categoryDropdown">
              <option value="Laptop">Laptop</option>
              <option value="Mobile">Mobile</option>
              <option value="Tablet">Tablet</option>
            </select>
          </div>
          <button type="submit" className="btn btn-primary">
            Sign Up
          </button>
        </form>
      </div>
    </>
  );
}

export default ProductForm;
