import React, { useState } from "react";
import { Transition } from "@headlessui/react";
import { Link } from "react-router-dom";

function NavBar() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="absolute w-full z-10 top-2 font-primerg ">
      <nav className="">
        <div className=" mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between ">
            <div className="w-full flex items-center justify-between">
              <div className="">
                <a href="https://esummit23.ecelliiitp.org/" alt="" target="_blank" className="navbar-brand">
								<img className='w-14' src='https://i.imgur.com/lG5djXZ.png' alt=''/>
								</a>
              </div>
              <div className="hidden md:block">
                <div className="flex items-baseline space-x-4 lg:space-x-8 text-[17px] lg:text-[23px]">
                  <a href="/#home" className="nav-link nav-link-ltr ">
                    <span className="font-primerg">HOME</span>
                  </a>
                  <a href="/#about" className="nav-link nav-link-ltr ">
				   <span className="font-primerg">ABOUT</span>
                  </a>

                  <a href="/#timeline" className="nav-link nav-link-ltr">
				  <span className="font-primerg">TIMELINE</span>
                  </a>

                  <a href="/#faqs" className="nav-link nav-link-ltr ">
				  <span className="font-primerg">FAQ's</span>
                  </a>
                  <a href="/#connect" className="nav-link nav-link-ltr ">
				  <span className="font-primerg">LET'S CONNECT</span>
                  </a>
                </div>
              </div>
              <div>
                <a
                  href="https://unstop.com/quiz/general-quiz-competition-juniors-e-summit23-indian-institute-of-information-technology-iiit-pune-658860/" 
                  alt=""
                  target="_blank"
                  type="submit"
                  className="flex flex-col justify-center items-center text-white border-2 bg-[#7e32cf] hover:bg-[#d7a1f9] border-none hover:text-black font-semibold rounded-full m-2 py-2 px-3 text-xs sm:text-sm md:text-lg transition duration-150 ease-in-out"
                >
                  REGISTER NOW
                </a>
              </div>
            </div>
            <div className="-mr-2 flex md:hidden">
              <button
                onClick={() => setIsOpen(!isOpen)}
                type="button"
                className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white focus:outline-none"
                aria-controls="mobile-menu"
                aria-expanded="false"
              >
                <span className="sr-only">Open main menu</span>
                {!isOpen ? (
                  <svg
                    className="block h-6 w-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
                ) : (
                  <svg
                    className="block h-6 w-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                )}
              </button>
            </div>
          </div>
        </div>

        <Transition
          show={isOpen}
          enter="transition ease-out duration-100 transform"
          enterFrom="opacity-0 scale-95"
          enterTo="opacity-100 scale-100"
          leave="transition ease-in duration-75 transform"
          leaveFrom="opacity-100 scale-100"
          leaveTo="opacity-0 scale-95"
        >
          {(ref) => (
            <div
              className="font-primerg md:hidden backdrop-blur bg-[#7e32cf] bg-opacity-20 absolute z-10 w-full"
              id="mobile-menu"
            >
              <div className=" px-2 pt-2 pb-3 space-y-1 sm:px-3">
                <a
                  href="/#home"
                  className="font-Montserrat font-bold hover:bg-[#d7a1f9] tracking-widest hover:text-black text-white block px-3 py-2 rounded-md text-base"
                >
                  HOME
                </a>

                <a
                  href="/#about"
                  className="font-Montserrat text-white hover:bg-[#d7a1f9]  tracking-widest hover:text-black   block px-3 py-2 rounded-md text-base font-bold"
                >
                  ABOUT
                </a>

                <a
                  href="/#timelinephone"
                  className="font-Montserrat font-bold text-white hover:bg-[#d7a1f9]  tracking-widest hover:text-black  block px-3 py-2 rounded-md text-base "
                >
                  TIMELINE
                </a>

                <a
                  href="/#faqs"
                  className="font-Montserrat font-bold text-white hover:bg-[#d7a1f9]  tracking-widest hover:text-black  block px-3 py-2 rounded-md text-base "
                >
                  FAQs
                </a>
                <a
                  href="/#connect"
                  className="font-Montserrat font-bold text-white hover:bg-[#d7a1f9]  tracking-widest hover:text-black block px-3 py-2 rounded-md text-base "
                >
                  LET'S CONNECT
                </a>
              </div>
            </div>
          )}
        </Transition>
      </nav>
    </div>
  );
}

export default NavBar;
