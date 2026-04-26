import React from "react";
import { ShoppingCartIcon } from "@heroicons/react/24/outline";
import { UserIcon } from "@heroicons/react/24/outline";
import { Search } from "./index";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const NavBar = () => {
  const cart = useSelector((state) => state.cart.productsNumber);

  return (
    <header className="">
      <div className="flex bg-[var(--color-primary)] text-white h-[60px]">

        {/* NAV LEFT: Logo + Delivery location */}
        <div className="flex items-center m-1 md:m-4 flex-shrink-0">
          <Link to={"/"}>
          <figure className="flex-shrink-0 mr-1">
            <img
              className="h-8 w-auto m-2 cursor-pointer"
              src="/amazon.png"
              alt="Amazon"
            />
          </figure>
          </Link>
          {/* Only visible on large screens */}
          <div className="pr-1 pl-1 lg:pr-4 lg:pl-1 hidden lg:block">
            <div className="text-xs xl:text-sm">Deliver to</div>
            <div className="text-sm xl:text-base font-bold">United States</div>
          </div>
        </div>

        {/* NAV MIDDLE: Search bar */}
        {/* `grow` makes this section fill all remaining horizontal space */}
        <div className="flex grow relative items-center">
          <Search />
        </div>

        {/* NAV RIGHT: Sign in, Orders, Cart */}
        <div className="flex items-center m-2 lg:m-4 ml-auto">

          {/* Sign In / Accounts & Lists */}
          <div className="pr-4 pl-4">
            {/* Desktop: two-line layout */}
            <div className="hidden lg:block">
            <div className="hidden text-xs xl:text-sm">Hello, sign in</div>
            <div className="hidden text-sm xl:text-base font-bold cursor-pointer">
              Accounts & Lists
              </div>
            </div>
            {/* Mobile: icon + label side by side */}
            <div className="flex items-center gap-2 lg:hidden">
              <UserIcon className="h-[24px] hidden md:block" />
              <div className="text-[10px] sm:text-xs md:text-sm font-bold whitespace-nowrap">Sign In</div>
            </div>
          </div>

          {/* Returns & Orders — desktop only */}
          <div className="pr-4 pl-4 hidden lg:block">
            <div className="text-xs xl:text-sm cursor-pointer">Returns</div>
            <div className="text-sm xl:text-base font-bold cursor-pointer">& Orders</div>
          </div>

          {/* Cart — always visible */}
          <Link to={"/checkout"} className="cursor-pointer">
            <div className="flex pr-1 pl-1">
              <ShoppingCartIcon className="h-[48px]" />
              {/* Cart item count — positioned top-right of the icon */}
              <div className="relative">
                <div className="absolute right-[9px] font-bold m-2 text-orange-400">
                  {cart}
                </div>
              </div>
              <div className="mt-7 text-xs xl:text-sm font-bold">Cart</div>
            </div>
          </Link>

        </div>
      </div>

      {/* SECONDARY NAV: Quick links bar */}
      <div className="flex bg-[var(--color-lightBlue)] text-white space-x-3 text-xs xl:text-sm p-2 pl-6">
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