import React from "react";
import { ShoppingCartIcon } from "@heroicons/react/24/outline";
import { Search } from "./index";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <header className="min-w-[1000px]">
      <div className="flex bg-[var(--color-primary)] text-white h-[60px]">
        {/* Left */}
        <div className="flex items-center m-4">
          {/* Amazon Logo */}
          <Link to={"/"}>
            <img className="h-[35px] w-[100px] m-2 cursor-pointer" src="/amazon.png" alt="" />
          </Link>
          <div className="pr-4 pl-4">
            <div className="text-xs xl:text-sm">Deliver to</div>
            <div className="text-sm xl:text-base font-bold">United States</div>
          </div>
        </div>

        {/* Middle */}
        <div className="flex grow relative items-center">
          <Search />
        </div>

        {/* Right */}
        <div className="flex items-center m-4">
          <div className="pr-4 pl-4">
            <div className="text-xs xl:text-sm">Hello, sign in</div>
            <div className="text-sm xl:text-base font-bold cursor-pointer">
              Accounts & Lists
            </div>
          </div>
          <div className="pr-4 pl-4">
            <div className="text-xs xl:text-sm cursor-pointer">Returns</div>
            <div className="text-sm xl:text-base font-bold cursor-pointer">& Orders</div>
          </div>
          <Link to={"/checkout"} className="cursor-pointer">
          <div className="flex pr-3 pl-3">
            <ShoppingCartIcon className="h-[48px]" />
          <div className="mt-7 text-xs xl:text-sm font-bold">Cart</div>
          </div>
          </Link>
        </div>
      </div>
      <div className="flex  bg-[var(--color-lightBlue)] text-white space-x-3 text-xs xl:text-sm p-2 p1-6">
        <div className="cursor-pointer">Today's Deals</div>
        <div className="cursor-pointer">Customer Service</div>
        <div className="cursor-pointer">Registry</div>
        <div className="cursor-pointer">Gift Cards</div>
        <div className="cursor-pointer">Sell</div>
      </div>
    </header>
  );
};

export default NavBar;
