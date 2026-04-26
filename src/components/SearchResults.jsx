import { useSearchParams, Link, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { ProductDetails } from "./";
import { callAPI } from "../utils/CallApi";
import { US_CURRENCY } from "../utils/Constants";

const SearchResults = () => {
  const [searchParams] = useSearchParams();
  const [products, setProducts] = useState(null);

  const getSearchResults = () => {
    const searchTerm = searchParams.get("searchTerm");
    const category = searchParams.get("category");

    callAPI(`data/search.json`).then((searchResults) => {
        const baseProducts =
        category === "All"
          ? searchResults["All"]
          : searchResults[category];
      
      const results = searchTerm
        ? baseProducts.filter((product) =>
            product.title.toLowerCase().includes(searchTerm.toLowerCase())
          )
        : baseProducts;
      
      setProducts(results);
      });
    ;
  }
  useEffect(() => {
    getSearchResults();
  }, [searchParams]);

  return (
    <div className="w-full max-w-[1300px] m-auto pt-4 px-2">
      {products &&
        products.map((product, key) => {
          return (
            <Link key={key} to={`/product/${product.id}`}>
              <div className="grid grid-cols-1 sm:grid-cols-12 rounded mt-1 mb-1">
                <div className="sm:col-span-2 p-4 bg-gray-200 flex items-center justify-center">
                  <img
                    className="max-h-[180px] w-auto m-auto"
                    src={product.image_small}
                    alt="Search result product"
                  />
                </div>
                <div className="sm:col-span-10 bg-gray-50 border border-gray-100 hover:bg-gray-100">
                  <div className="font-medium text-black p-2">
                    <ProductDetails product={product} ratings={true} />
                    <div className="text-xl xl:text-2xl pt-1">
                      {US_CURRENCY.format(product.price)}
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          );
        })}
    </div>
  );
};

export default SearchResults;