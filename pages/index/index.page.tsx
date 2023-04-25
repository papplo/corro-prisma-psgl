import React from 'react'
import { Counter } from './Counter'
import { Spinner } from '../../renderer/Spinner';

export { Page }

function Page() {
  return (
    <>
      <Section />
      <Contentful />
    </>
  )
}


const Section = () => {
  return (
    <section className="relative bg-slate-200 overflow-hidden">
      <div className="relative w-2/3 ml-auto">
        <div className="absolute top-0 left-0 mt-20 lg:-ml-0 rounded-full h-20 lg:h-96 xl:h-160 w-80 md:w-96 lg:w-160">
          <img
            className="object-contain transform scale-200"
            src="images/copiloto-portada.jpg"
            alt=""
          />
          <Spinner title='Corro por ti marraqueta! Coming Soon!'/>
        </div>
        <div className="absolute top-1/2 right-0 -mr-64 mt-40 lg:mt-20 rounded-full h-20 lg:h-96 xl:h-160 w-80 md:w-96 lg:w-160">
          <img
            className="object-contain transform scale-200"
            src="images/copiloto-portada.jpg"
            alt=""
          />
        </div>

      </div>

      <div className="relative container mx-auto px-4">
        <div className="flex py-24 lg:pb-52">
          <div className="w-full md:w-1/2 lg:mt-16">
            <div className="max-w-lg">
              <h2 className="mb-10 text-2xl sm:text-3xl md:text-5xl text-white uppercase font-heading">
                Articulos y mochilas que le faltan dueños
              </h2>
              <a
                className="inline-flex items-center py-4 px-6 rounded-full bg-yellow-300 hover:bg-yellow-400 transform duration-200"
                href="#"
              >
                Copiloto
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
                <span className="text-sm uppercase font-heading">

                </span>
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="relative border-t pb-8 lg:pb-6">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap py-10 -mb-6 lg:-mb-4 -mx-4">
            <div className="w-1/2 lg:w-1/5 py-6 lg:py-4 px-4">
              <img
                className="mx-auto h-8"
                src="boldui-assets/brands/slack.svg"
                alt=""
              />
            </div>
            <div className="w-1/2 lg:w-1/5 py-6 lg:py-4 px-4">
              <img
                className="mx-auto h-8"
                src="boldui-assets/brands/dropbox.svg"
                alt=""
              />
            </div>
            <div className="w-1/2 lg:w-1/5 py-6 lg:py-4 px-4">
              <img
                className="mx-auto h-8"
                src="boldui-assets/brands/spotify.svg"
                alt=""
              />
            </div>
            <div className="w-1/2 lg:w-1/5 py-6 lg:py-4 px-4">
              <img
                className="mx-auto h-8"
                src="boldui-assets/brands/stripe.svg"
                alt=""
              />
            </div>
            <div className="w-1/2 lg:w-1/5 py-6 lg:py-4 px-4">
              <img
                className="mx-auto h-8"
                src="boldui-assets/brands/netflix.svg"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
      <div className="hidden navbar-menu fixed top-0 left-0 bottom-0 w-5/6 max-w-sm z-50">
        <div className="navbar-backdrop fixed inset-0 bg-gray-800 opacity-25" />
        <nav className="relative flex flex-col py-8 px-10 w-full h-full bg-black border-r overflow-y-auto">
          <a
            className="inline-block text-xl text-white font-medium font-heading mb-16 md:mb-32"
            href="#"
          >
            <img
              className="h-8"
              width="auto"
              src="boldui-assets/logo/logo-boldui-light.svg"
              alt=""
            />
          </a>
          <ul className="mb-32">
            <li className="mb-10">
              <a className="flex items-center" href="#">
                <span className="mr-3 text-lg text-white">About</span>
                <svg
                  width={16}
                  height={9}
                  viewBox="0 0 16 9"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M12.01 3.48047H0V5.57278H12.01V8.71124L16 4.52663L12.01 0.34201V3.48047Z"
                    fill="#FFEC3E"
                  />
                </svg>
              </a>
            </li>
            <li className="mb-10">
              <a className="flex items-center" href="#">
                <span className="mr-3 text-lg text-white">Company</span>
                <svg
                  width={16}
                  height={9}
                  viewBox="0 0 16 9"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M12.01 3.48047H0V5.57278H12.01V8.71124L16 4.52663L12.01 0.34201V3.48047Z"
                    fill="#FFEC3E"
                  />
                </svg>
              </a>
            </li>
            <li className="mb-10">
              <a className="flex items-center" href="#">
                <span className="mr-3 text-lg text-white">Services</span>
                <svg
                  width={16}
                  height={9}
                  viewBox="0 0 16 9"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M12.01 3.48047H0V5.57278H12.01V8.71124L16 4.52663L12.01 0.34201V3.48047Z"
                    fill="#FFEC3E"
                  />
                </svg>
              </a>
            </li>
            <li>
              <a className="flex items-center" href="#">
                <span className="mr-3 text-lg text-white">Contact</span>
                <svg
                  width={16}
                  height={9}
                  viewBox="0 0 16 9"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M12.01 3.48047H0V5.57278H12.01V8.71124L16 4.52663L12.01 0.34201V3.48047Z"
                    fill="#FFEC3E"
                  />
                </svg>
              </a>
            </li>
          </ul>
          <a
            className="flex mb-8 items-center justify-center py-4 px-6 rounded-full bg-yellow-300 hover:bg-yellow-400 transform duration-200"
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
            <span className="text-sm font-medium uppercase tracking-wider">
              Sign Up
            </span>
          </a>
          <a
            className="flex mb-10 items-center text-white hover:underline"
            href="#"
          >
            <span className="mr-2 text-sm">Log In</span>
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
          <p className="text-sm text-gray-500">
            All rights reserved © BoldUI 2021
          </p>
        </nav>
      </div>
    </section>
  );
};

const Contentful = () =>{
    return (
      <section className="bg-black overflow-hidden">
        <div className="flex flex-wrap">
          <div className="w-full">
            <div className="h-full py-52 bg-cover bg-center bg-no-repeat" style={{backgroundImage: 'url("/images/copiloto-portada.jpg")'}}>
              <div className="container mx-auto px-4">
                <div className="flex flex-wrap items-center justify-between">
                  <div className="max-w-xl mb-6 lg:mb-0">
                    <span className="font-semibold text-xs text-blue-500">10 jun 2021 | 19:40</span>
                    <h2 className="mt-2 text-2xl text-white font-heading">Take quick action that increases your brand's regular profit.</h2>
                  </div>
                  <a className="inline-flex w-full md:w-auto items-center justify-center py-4 px-6 rounded-full bg-yellow-300 hover:bg-yellow-400 transform duration-200" href="#">
                    <svg className="text-black mr-3" width={16} height={9} viewBox="0 0 16 9" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M12.01 3.16553H0V5.24886H12.01V8.37386L16 4.20719L12.01 0.0405273V3.16553Z" fill="currentColor" />
                    </svg>
                    <span className="text-sm font-heading">Read article</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full lg:w-1/3">
            <a className="flex h-full px-4 py-40 items-center justify-center bg-cover bg-center bg-no-repeat" href="#" style={{backgroundImage: 'url("/images/recolector.jpg")'}}>
              <div className="relative max-w-xs px-10 text-center">
                <img className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 h-64" src="boldui-assets/elements/ellipse-dark.svg" alt="" />
                <div className="relative">
                  <span className="font-semibold text-xs text-blue-500">10 jun 2021 | 19:40</span>
                  <h3 className="mt-2 text-2xl text-white font-heading">Quick problem&nbsp;-&nbsp;solving contact</h3>
                </div>
              </div>
            </a>
          </div>
          <div className="w-full lg:w-1/3">
            <a className="flex px-4 py-40 items-center justify-center bg-cover bg-center bg-no-repeat" href="#" style={{backgroundImage: 'url("/images/recolector.jpg")'}}>
              <div className="relative max-w-xs px-10 text-center">
                <img className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 h-64" src="boldui-assets/elements/ellipse-dark.svg" alt="" />
                <div className="relative">
                  <span className="font-semibold text-xs text-blue-500">10 jun 2021 | 19:40</span>
                  <h3 className="mt-2 text-2xl text-white font-heading">Donec nec cursus nulla, quis aliquet ipsum</h3>
                </div>
              </div>
            </a>
          </div>
          <div className="w-full lg:w-1/3">
            <a className="flex px-4 py-40 items-center justify-center bg-cover bg-center bg-no-repeat" href="#" style={{backgroundImage: 'url("/images/recolector.jpg")'}}>
              <div className="relative max-w-xs px-10 text-center">
                <img className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 h-64" src="boldui-assets/elements/ellipse-dark.svg" alt="" />
                <div className="relative">
                  <span className="font-semibold text-xs text-blue-500">10 jun 2021 | 19:40</span>
                  <h3 className="mt-2 text-2xl text-white font-heading">In suscipit tellus convallis scelerisque consequat</h3>
                </div>
              </div>
            </a>
          </div>
        </div>
      </section>
    );
  }