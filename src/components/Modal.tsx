import { useEffect, useRef } from "react";

interface ModalProps {
    showModal: boolean;
    onClose: () => void;
    children: JSX.Element | null
}

const useOutsideAlerrter = (ref: any, onClose: () => void) => {
    useEffect(() => {
      const handledClickOutside = (event: any) => {
        if (ref.current && !ref.current.contains(event.target)) {
          onClose();
        }
      };
      document.addEventListener("mousedown", handledClickOutside);
      return () => {
        document.removeEventListener("mousedown", handledClickOutside);
      };
    }, [ref]);
  };

const Modal: (props: ModalProps) => JSX.Element = ({
    showModal,
    onClose,
    children,
  }) => {
    const wrapperRef = useRef(null);
    useOutsideAlerrter(wrapperRef, onClose);
    return (
      <>
        {showModal ? (
          <div>
            <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
              <div className="relative w-auto my-6 mx-auto max-w-3xl">
                <div
                  ref={wrapperRef}
                  className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none pb-6"
                >
                  {children}
                </div>
              </div>
            </div>
            <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
          </div>
        ) : null}
      </>
    );
}

export { Modal }