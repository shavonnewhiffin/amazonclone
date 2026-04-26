import { useParams, Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { ProductDetails } from "./";
import { US_CURRENCY } from "../utils/Constants";
import { callAPI } from "../utils/CallApi";
import { addToCart } from "../redux/cartSlice";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSpinner } from "@fortawesome/free-solid-svg-icons";

const ProductPage = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [quantity, setQuantity] = useState("1");
  const dispatch = useDispatch();

  const getProduct = () => {
    callAPI(`data/products.json`).then((productResults) => {
      setProduct(productResults[id]);
    });
  };

  const addQuantityToProduct = () => {
    setProduct((product.quantity = quantity));
    return product;
  };

  useEffect(() => {
    getProduct();
  }, []);

  // Loading State
  if (!product?.title) return <div className="flex items-center justify-center  h-screen text-6xl animate-spin text-[var(--color-lightBlue)]"><FontAwesomeIcon icon={faSpinner} /></div>;

  return (
    product && (
      <div className="min-h-screen bg-amazonclone-background">
        <div className="max-w-[1500px] m-auto p-4">
          <div className="grid grid-cols-1 md:grid-cols-10 gap-2">
            {/* Left */}
            <div className="md:col-span-3 p-8 rounded bg-white m-auto">
              <img src={`${product.image}`} alt="Main product" />
            </div>
            {/* Middle + Right wrapper */}
            <div className="md:col-span-7 grid grid-cols-1 lg:grid-cols-7 gap-2">
              {/* Middle */}
              <div className="lg:col-span-5 p-4 rounded bg-white divide-y divide-gray-400">
                <div className="mb-3">
                  <ProductDetails product={product} ratings={true} />
                </div>
                <div className="text-base xl:text-lg mt-3">
                  {product.description}
                </div>
              </div>
              {/* Right */}
              <div className="lg:col-span-2 p-4 rounded bg-white">
                <div className="text-xl xl:text-2xl text-red-700 font-semibold">
                  {US_CURRENCY.format(product.price)}
                </div>
                <div className="text-base xl:text-lg text-gray-500 font-semibold">
                  RRP:{" "}
                  <span className="line-through">
                    {US_CURRENCY.format(product.oldPrice)}
                  </span>
                </div>
                <div className="text-sm xl:text-base text-blue-500 font-semibold mt-3">
                  FREE Returns
                </div>
                <div className="text-sm xl:text-base text-blue-500 font-semibold mt-1">
                  FREE Delivery
                </div>
                <div className="text-base xl:text-lg text-green-700 font-semibold mt-1">
                  In Stock
                </div>
                <div className="text-base xl:text-lg mt-1 ">
                  Quantity:
                  <select
                    onChange={(e) => setQuantity(e.target.value)}
                    className="p-2 ml-1 bg-white border rounded-md focus:border-indigo-600"
                  >
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                  </select>
                </div>
                <Link to={"/checkout"}>
                  <button
                    onClick={() => dispatch(addToCart(addQuantityToProduct()))}
                    className="btn">
                    Add to Cart
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  );
};

export default ProductPage;