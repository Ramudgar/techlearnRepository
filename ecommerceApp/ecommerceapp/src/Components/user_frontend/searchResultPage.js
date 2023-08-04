import React from "react";

const SearchResultsPage = ({ results }) => {
    console.log(results);
  return (
    <div>
      <h2>Search Results</h2>
      {results.map((product) => (
        <div key={product._id}>
          <p>{product.name}</p>
          {/* Display other product details as needed */}
        </div>
      ))}
    </div>
  );
};

export default SearchResultsPage;
