import { Dialog, Transition } from "@headlessui/react";
import React, { useState, Fragment, useRef } from "react";

function Image({ uri }) {
  const [isOpen, setIsOpen] = useState(false);

  const cancelButtonRef = useRef(null);
  return (
    <div>
      <button
        onClick={() => setIsOpen(true)}
        className="mr-5 w-96 h-56 overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 ease-in-out"
      >
        <img
          src={require(`../../assets/img/${uri}`)}
          alt=""
          className="w-full h-full"
        />
      </button>
      <Transition.Root show={isOpen} as={Fragment}>
        <Dialog
          as="div"
          className="relative z-10"
          initialFocus={cancelButtonRef}
          onClose={setIsOpen}
        >
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
          </Transition.Child>

          <div className="fixed inset-0 z-10 overflow-y-auto">
            <div className="flex flex-col min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
              <div className="bg-white rounded-lg px-4 pb-4 pt-5 sm:p-6 sm:pb-4">
                <div className="sm:flex sm:items-start">
                  <div className="mt-3 text-center sm:ml-4 sm:mt-0 sm:text-left">
                    <Dialog.Title
                      as="h3"
                      className="text-base font-semibold leading-6 text-gray-900"
                    >
                      Preview
                    </Dialog.Title>
                    <div className="mt-2">
                      <img
                        src={require(`../../assets/img/${uri}`)}
                        className="w-full h-full"
                        alt=""
                      />
                    </div>
                    <div className=" py-3 sm:flex sm:flex-row-reverse sm:px-6">
                      <button
                        type="button"
                        className="mt-3 inline-flex w-full justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:mt-0 sm:w-auto"
                        onClick={() => setIsOpen(false)}
                        ref={cancelButtonRef}
                      >
                        close
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                enterTo="opacity-100 translate-y-0 sm:scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 translate-y-0 sm:scale-100"
                leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              >
                <Dialog.Panel className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg"></Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition.Root>
    </div>
  );
}

export default Image;
