import * as React from "react";
import { Header } from "./Header";
import { ReactComponent as Logo } from "./logotipo.svg";

export const Navigation = () => {
  return (
    <nav className="relative flex px-10 justify-between bg-black border-b">
      <div className="pr-14 py-8 lg:border-r">
        <a
          className="inline-block text-xl text-white font-medium font-heading"
          href="/"
        >
          Corro
        </a>
      </div>

      <div className="sm:flex items-center pl-2 py-8">
        <div className="flex items-center justify-between">
          <a
            className="inline-block text-sm text-white hover:underline font-heading px-5"
            href="/shop"
          >
            Shop
          </a>
          <span className="mx-0 text-gray-900">/</span>
          <a
            className="inline-block text-sm text-white hover:underline font-heading px-5"
            href="#"
          >
            Support
          </a>
          <a
            className="inline-block text-sm text-white hover:underline font-heading px-5"
            href="#"
          >
            Marraqueta
          </a>
        </div>
      </div>
      <div className="flex self-center items-center pl-16 py-8 border-l">
        <button className="navbar-burger sm:hidden self-center">
          <svg
            width={24}
            height={24}
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect y={6} width={24} height={2} fill="white" />
            <rect y={11} width={24} height={2} fill="white" />
            <rect y={16} width={24} height={2} fill="white" />
          </svg>
        </button>
      </div>
    </nav>
  );
};
