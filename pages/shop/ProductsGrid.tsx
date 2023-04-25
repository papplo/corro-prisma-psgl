import { Product } from "@prisma/client";
import * as React from "react";

type ComponentProps = {
  products: Product[];
};
export const ProductsGrid = ({ products }: ComponentProps): JSX.Element => {
  return (
    <>
      <div className="relative z-10 max-w-xl mx-auto text-center">
        <span className="text-lg font-semibold text-gray-400">Shop</span>
        <h2 className="mt-6 mb-6 text-xl text-black uppercase font-heading">
          Llega a la cima con nuestros productos, los más top
        </h2>
      </div>
      <section className="flex bg-slate-50">
        {products &&
          products.map((product: Product) => (
            <div
              className="w-full md:w-1/2 p-5 flex flex-col"
              key={product.id}
            >
              <a href={`shop/products/${product.id}`}>
                <img
                  className="hover:grow hover:shadow-lg"
                  src={`/images/${product?.image}`}
                />
                <div className="pt-3 flex items-center justify-between">
                  <p className="">{product.name}</p>
                  <svg
                    className="h-6 w-6 fill-current text-gray-500 hover:text-black"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12,4.595c-1.104-1.006-2.512-1.558-3.996-1.558c-1.578,0-3.072,0.623-4.213,1.758c-2.353,2.363-2.352,6.059,0.002,8.412 l7.332,7.332c0.17,0.299,0.498,0.492,0.875,0.492c0.322,0,0.609-0.163,0.792-0.409l7.415-7.415 c2.354-2.354,2.354-6.049-0.002-8.416c-1.137-1.131-2.631-1.754-4.209-1.754C14.513,3.037,13.104,3.589,12,4.595z M18.791,6.205 c1.563,1.571,1.564,4.025,0.002,5.588L12,18.586l-6.793-6.793C3.645,10.23,3.646,7.776,5.205,6.209 c0.76-0.756,1.754-1.172,2.799-1.172s2.035,0.416,2.789,1.17l0.5,0.5c0.391,0.391,1.023,0.391,1.414,0l0.5-0.5 C14.719,4.698,17.281,4.702,18.791,6.205z" />
                  </svg>
                </div>
                <p className="pt-1 text-gray-900">${product.price}</p>
              </a>
            </div>
          ))}
      </section>
    </>
  );
};

export const ProductsTitle = () => {
  return (
    <section className="pt-24 bg-black overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="relative z-10 max-w-xl mx-auto text-center">
          <span className="text-lg font-semibold text-blue-400">
            Lorem ipsum
          </span>
          <h2 className="mt-6 mb-6 text-2xl text-white uppercase font-heading">
            Take quick action that increases your brand's regular profit.
          </h2>
          <p className="mb-10 text-lg text-gray-500">
            If you have ever wondered how to develop your brand, this is the
            place for you. Take a big step forward in growing your business with
            this great tool.
          </p>
          <div className="flex flex-wrap items-center justify-center mb-20">
            <a
              className="inline-flex w-full md:w-auto mb-6 md:mb-0 md:mr-8 items-center justify-center py-4 px-6 rounded-full bg-yellow-300 hover:bg-yellow-400 transform duration-200"
              href="#"
            >
              <svg
                className="mr-3"
                width={16}
                height={9}
                viewBox="0 0 16 9"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M12.01 3.16553H0V5.24886H12.01V8.37386L16 4.20719L12.01 0.0405273V3.16553Z"
                  fill="black"
                />
              </svg>
              <span className="text-sm font-heading">Activate demo</span>
            </a>
            <a
              className="inline-flex items-center text-white hover:underline"
              href="#"
            >
              <span className="mr-2 text-sm font-heading">
                Share with friends
              </span>
              <svg
                width={16}
                height={10}
                viewBox="0 0 16 10"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M12.01 3.95383H0V6.04614H12.01V9.1846L16 4.99998L12.01 0.815369V3.95383Z"
                  fill="#FFEC3E"
                />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
