import { Dialog, Transition } from "@headlessui/react";
import React, { Fragment, useState } from "react";

import { useNavigate } from "react-router-dom";

function Header() {
  const navigate = useNavigate();
  let [isOpen, setIsOpen] = useState(false);
  let [isBurger, setIsBurger] = useState(false);
  let [isError, setIsError] = useState(false);
  let [isError1, setIsError1] = useState(false);
  let [message, setMessage] = useState("");
  let [message1, setMessage1] = useState("");
  let [hasActive, setHasActive] = useState({
    wa: true,
    email: false,
  });

  const closeModal = () => {
    setIsOpen(false);
    setIsError(false);
  };

  const sendWa = () => {
    if (message === "") return setIsError(true);
    const URL = `https://wa.me/+6281248886455?text=${message}`;
    window.open(URL);
    setIsOpen(false);
  };

  const sendEmail = () => {
    if (message1 === "") return setIsError1(true);
    const URL = `mailto:trisumanzaya93@gmail.com?subject=web profile&body=${message1}`;

    window.location.href = URL
    // setIsOpen(false);
  };
  const openModal = () => {
    setIsOpen(true);
  };

  const whatsapp = () => {
    return (
      <div className="w-full mt-5">
        <div
          className={`border-4 ${
            isError ? "border-red-500" : "border-gray-200"
          } rounded-lg`}
        >
          <textarea
            onFocus={() => setIsError(false)}
            onChange={(e) => setMessage(e.target.value)}
            className="w-full max-h-36 text-gray-400 placeholder:text-gray-400 outline-0"
            placeholder="Message"
          />
        </div>
        {isError ? (
          <p className="text-red-500 text-xs text-end">message whatsapp is required</p>
        ) : null}
        <div className="mt-10 w-full flex justify-end ">
          <button
            type="button"
            className="justify-center rounded-md border border-transparent  px-4 py-2 text-sm bg-[#232946] text-white"
            onClick={sendWa}
          >
            Send
          </button>
        </div>
      </div>
    );
  };

  const email = () => {
    return (
      <div className="w-full mt-5">
        <div
          className={`border-4 ${
            isError1 ? "border-red-500" : "border-gray-200"
          } rounded-lg`}
        >
          <textarea
            onFocus={() => setIsError1(false)}
            onChange={(e) => setMessage1(e.target.value)}
            className="w-full max-h-36 text-gray-400 placeholder:text-gray-400 outline-0"
            placeholder="Message"
          />
        </div>
        {isError1 ? (
          <p className="text-red-500 text-xs text-end">message email is required</p>
        ) : null}
        <div className="mt-10 w-full flex justify-end ">
          <button
            type="button"
            className="justify-center rounded-md border border-transparent  px-4 py-2 text-sm  bg-[#232946] text-white"
            onClick={sendEmail}
          >
            Send
          </button>
        </div>
      </div>
    );
  };

  const renderContent = () => {
    if(hasActive.wa) return whatsapp()
    return email()
  }

  return (
    <>
      <nav
        className="
  w-full
  flex flex-wrap
  items-center
  justify-between
  py-4
  bg-[#232946]
  text-gray-100
  focus:text-gray-700
  shadow-lg
  navbar navbar-expand-lg navbar-light
  relative
  "
      >
        <div className="flex flex-row items-center">
          <div className="w-10 h-10 rounded-full flex justify-center cursor-pointer items-center border-4 ml-10 mr-1">
            <h1 className="animate-spin-slow font-primary text-2xl ">S</h1>
          </div>
          <h1 className="font-primary text-2xl">umanzaya</h1>
        </div>
        <div className="w-1/3 hidden md:flex md:flex-row md:justify-between mr-10">
          <div
            className="cursor-pointer font-primary hover:text-white"
            onClick={() => navigate("/")}
          >
            Home
          </div>
          <div
            className="cursor-pointer font-primary hover:text-white"
            onClick={() => navigate("/project")}
          >
            Project
          </div>
          <div
            className="cursor-pointer font-primary hover:text-white"
            onClick={() => navigate("/mylearn")}
          >
            My Learn
          </div>
          <div
            className="cursor-pointer font-primary hover:text-white"
            onClick={() => navigate("/about")}
          >
            About
          </div>
          <div
            className="cursor-pointer font-primary hover:text-white"
            onClick={openModal}
          >
            Contact Us
          </div>
        </div>
        <button onClick={()=>setIsBurger(!isBurger)} className="w-1/3 flex justify-end md:hidden mr-10">
        <svg
              className="h-6 w-6 fill-current"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              {isBurger ? (
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M3.293 18.293L12 9.586l8.707 8.707 1.414-1.414L13.414 8.172l1.414-1.414L21.414 12l-7.707 7.707-1.414-1.414z"
                />
              ) : (
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M4 8h16v2H4V8zm0 5h16v2H4v-2z"
                />
              )}
            </svg>
        </button>
      </nav>
      {isBurger ?
      <div className="w-[100vw] bg-[rgb(0,0,0,0.2)] absolute flex flex-row justify-end">
        <div className="text-2xl w-full z-20 bg-gray-100">
          <div className="border-b-4 border-[#232946] hover:bg-[#232946] hover:text-gray-100 py-5">
            <p className="text-center">Home</p>
          </div>
          <div className="border-b-4 border-[#232946] hover:bg-[#232946] hover:text-gray-100 py-5">
            <p className="text-center">Project</p>
          </div>
          <div className="border-b-4 border-[#232946] hover:bg-[#232946] hover:text-gray-100 py-5">
            <p className="text-center">My Learn </p>
          </div>
          <div className="border-b-4 border-[#232946] hover:bg-[#232946] hover:text-gray-100 py-5">
            <p className="text-center">About</p>
          </div>
          <div className="border-b-4 border-[#232946] hover:bg-[#232946] hover:text-gray-100 py-5">
            <p className="text-center">Contact Us</p>
          </div>
        </div>

      </div> :
      null 
    }
      <Transition appear show={isOpen} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={closeModal}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-25" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="w-full max-w-md font-primary font-extrabold transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                  <Dialog.Title as="h3" className="text-2xl text-black">
                    Contact me
                  </Dialog.Title>
                  <div className="mt-2">
                    <p className="text-sm text-gray-400">
                      Please contact me if you have any new ideas and wish to
                      bring them to life.
                    </p>
                  </div>

                  <div>
                    <div className="flex justify-evenly mt-2">
                      <button
                        onClick={() =>
                          setHasActive({
                            wa: true,
                            email: false,
                          })
                        }
                      >
                        <svg
                          width="30px"
                          height="30px"
                          viewBox="0 0 24 24"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M6.014 8.00613C6.12827 7.1024 7.30277 5.87414 8.23488 6.01043L8.23339 6.00894C9.14051 6.18132 9.85859 7.74261 10.2635 8.44465C10.5504 8.95402 10.3641 9.4701 10.0965 9.68787C9.7355 9.97883 9.17099 10.3803 9.28943 10.7834C9.5 11.5 12 14 13.2296 14.7107C13.695 14.9797 14.0325 14.2702 14.3207 13.9067C14.5301 13.6271 15.0466 13.46 15.5548 13.736C16.3138 14.178 17.0288 14.6917 17.69 15.27C18.0202 15.546 18.0977 15.9539 17.8689 16.385C17.4659 17.1443 16.3003 18.1456 15.4542 17.9421C13.9764 17.5868 8 15.27 6.08033 8.55801C5.97237 8.24048 5.99955 8.12044 6.014 8.00613Z"
                            fill={`${hasActive.wa ? "#4ade80" : "#232946"}`}
                          />
                          <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M12 23C10.7764 23 10.0994 22.8687 9 22.5L6.89443 23.5528C5.56462 24.2177 4 23.2507 4 21.7639V19.5C1.84655 17.492 1 15.1767 1 12C1 5.92487 5.92487 1 12 1C18.0751 1 23 5.92487 23 12C23 18.0751 18.0751 23 12 23ZM6 18.6303L5.36395 18.0372C3.69087 16.4772 3 14.7331 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12C21 16.9706 16.9706 21 12 21C11.0143 21 10.552 20.911 9.63595 20.6038L8.84847 20.3397L6 21.7639V18.6303Z"
                            fill={`${hasActive.wa ? "#4ade80" : "#232946"}`}
                          />
                        </svg>
                      </button>
                      <button
                        onClick={() =>
                          setHasActive({
                            wa: false,
                            email: true,
                          })
                        }
                      >
                        <svg
                          fill={`${hasActive.email ? "#ff0000" : "#232946"}`}
                          height="30px"
                          width="30px"
                          version="1.1"
                          id="Capa_1"
                          viewBox="0 0 75.294 75.294"
                        >
                          <g>
                            <path
                              d="M66.097,12.089h-56.9C4.126,12.089,0,16.215,0,21.286v32.722c0,5.071,4.126,9.197,9.197,9.197h56.9
		c5.071,0,9.197-4.126,9.197-9.197V21.287C75.295,16.215,71.169,12.089,66.097,12.089z M61.603,18.089L37.647,33.523L13.691,18.089
		H61.603z M66.097,57.206h-56.9C7.434,57.206,6,55.771,6,54.009V21.457l29.796,19.16c0.04,0.025,0.083,0.042,0.124,0.065
		c0.043,0.024,0.087,0.047,0.131,0.069c0.231,0.119,0.469,0.215,0.712,0.278c0.025,0.007,0.05,0.01,0.075,0.016
		c0.267,0.063,0.537,0.102,0.807,0.102c0.001,0,0.002,0,0.002,0c0.002,0,0.003,0,0.004,0c0.27,0,0.54-0.038,0.807-0.102
		c0.025-0.006,0.05-0.009,0.075-0.016c0.243-0.063,0.48-0.159,0.712-0.278c0.044-0.022,0.088-0.045,0.131-0.069
		c0.041-0.023,0.084-0.04,0.124-0.065l29.796-19.16v32.551C69.295,55.771,67.86,57.206,66.097,57.206z"
                            />
                          </g>
                        </svg>
                      </button>
                    </div>
                  </div>
                  {renderContent()}
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  );
}

export default Header;
