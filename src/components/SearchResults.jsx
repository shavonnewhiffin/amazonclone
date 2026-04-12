import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { callAPI } from "../utils/CallApi";

const SearchResults = () => {
  // Retrieving the params based off the search in Search.jsx
  const [searchParams] = useSearchParams();

  const [products, setProducts] = useState([]);

  // Retrieve products based on search params
  const getSearchResults = () => {
    const searchTerm = searchParams.get("searchTerm");
    const category = searchParams.get("category");

    callAPI(`data/search.json`)
      // Retrieve products for the category, filter each product, make each product lowercase and check if it includes the search term, then set products to the filtered results
      .then((searchResults) => {
        const searchTerm = searchParams.get("searchTerm") || "";
        const category = searchParams.get("category") || "All";
      
        const categoryResults = searchResults[category] || [];
      
        const results = searchTerm
          ? categoryResults.filter((product) =>
              product.title.toLowerCase().includes(searchTerm.toLowerCase())
            )
          : categoryResults;
      
        setProducts(results);
        console.log("CATEGORY:", category);
console.log("DATA:", searchResults);
console.log("RESULT:", searchResults[category]);
      });
  };

  useEffect(() => {
    getSearchResults();
  }, [searchParams]);

  return (
    <div className="min-w-[1200px] max-w-[1300px] m-auto">
      {
        products.map((product, key) => {
          return (
            <div className="" key={key}>
              {product.title}
            </div>
          );
        })}
    </div>
  );
};

export default SearchResults;
