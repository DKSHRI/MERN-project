import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  HiOutlineUser,
  HiOutlineShoppingBag,
  HiBars3BottomRight,
} from "react-icons/hi2";
import Searchbar from "./Searchbar";
import Cartdrawer from "./Cartdrawer";

const AnimatedLogo = ({ text }) => {
  const colors = ["#A9E5BB", "#F7B32B", "#FCF6B1", "#F72C25", "#2D1E2F"];

  return (
    <span className="inline-flex">
      {text.split("").map((char, i) => (
        <span
          key={i}
          className="inline-block cursor-pointer transition-all duration-300"
          style={{
            transitionTimingFunction: "cubic-bezier(0.6, 0.4, 0, 1)",
            "--hoverColor": colors[i % colors.length],
          }}
          onMouseEnter={(e) => {
            e.target.style.color =
              e.target.style.getPropertyValue("--hoverColor");
            e.target.classList.add("animate-wobble");
          }}
          onMouseLeave={(e) => {
            setTimeout(() => {
              e.target.style.color = "black";
              e.target.classList.remove("animate-wobble");
            }, 250);
          }}
        >
          {char}
        </span>
      ))}
    </span>
  );
};

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [cartOpen, setCartOpen] = useState(false);

  return (
    <nav className="bg-white shadow py-4 relative">
      <style>
        {`
          @keyframes wobble {
            0% { transform: translateX(0) rotate(0deg); }
            15% { transform: translateX(-4px) rotate(-6deg); }
            30% { transform: translateX(4px) rotate(6deg); }
            45% { transform: translateX(-3px) rotate(-4deg); }
            60% { transform: translateX(3px) rotate(4deg); }
            75% { transform: translateX(-2px) rotate(-3deg); }
            100% { transform: translateX(0) rotate(0deg); }
          }

          .animate-wobble {
            animation: wobble 0.45s cubic-bezier(0.6, 0.4, 0, 1);
          }
        `}
      </style>

      <div className="container mx-auto px-4 flex items-center justify-between">
        <Link to="/" className="text-3xl font-bold">
          <AnimatedLogo text="D99store™️" />
        </Link>

        <div className="hidden md:flex space-x-6 text-sm font-medium">
          {["Man", "Woman", "Topwear", "Bottomwear"].map((item) => (
            <Link
              key={item}
              to={`/${item.toLowerCase()}`}
              className="relative group"
            >
              {item}
              <span className="absolute left-0 -bottom-1 h-0.5 w-0 bg-red-600 transition-all duration-300 group-hover:w-full"></span>
            </Link>
          ))}
        </div>

        <div className="flex items-center space-x-5">
          <Link to="/profile">
            <HiOutlineUser className="h-6 w-6 text-gray-700 hover:text-black transition" />
          </Link>

          <button
            onClick={() => setCartOpen(!cartOpen)}
            className="relative hover:text-black transition"
          >
            <HiOutlineShoppingBag className="h-6 w-6 text-gray-700" />
            <span className="absolute -top-1 -right-1 bg-red-600 text-white text-xs h-4 w-4 flex items-center justify-center rounded-full">
              3
            </span>
          </button>

          <Searchbar />

          <button onClick={() => setMenuOpen(!menuOpen)} className="md:hidden">
            <HiBars3BottomRight className="h-7 w-7 text-gray-700 hover:text-black transition" />
          </button>
        </div>
      </div>

      <div
        className={`md:hidden overflow-hidden transition-all duration-500 bg-white ${
          menuOpen ? "max-h-60 py-4" : "max-h-0"
        }`}
      >
        <div className="flex flex-col space-y-4 px-6 text-sm font-medium">
          {["Man", "Woman", "Topwear", "Bottomwear"].map((item) => (
            <Link
              key={item}
              to={`/${item.toLowerCase()}`}
              className="relative group"
              onClick={() => setMenuOpen(false)}
            >
              {item}
              <span className="absolute left-0 -bottom-1 h-0.5 w-0 bg-red-600 transition-all duration-300 group-hover:w-full"></span>
            </Link>
          ))}
        </div>
      </div>

      {/* Cart Drawer */}
      <Cartdrawer isOpen={cartOpen} onClose={() => setCartOpen(false)} />
    </nav>
  );
};

export default Navbar;
