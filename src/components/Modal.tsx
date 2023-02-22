import { ReactNode } from "react"

type FooterProps = {
  children: ReactNode
}

type ModalProps = {
  children: ReactNode
  title: string
  setShowModal: React.Dispatch<React.SetStateAction<boolean>>
}

export function Modal({ children, title, setShowModal }: ModalProps) {
  return (
    <div
      className="fixed z-10 inset-0 overflow-y-auto"
      aria-labelledby="modal-title"
      role="dialog"
      aria-modal="true"
    >
      <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
        <div
          className="fixed inset-0 bg-blue-300 bg-opacity-75 transition-opacity"
          aria-hidden="true"
          onClick={() => setShowModal(false)}
        ></div>
        <span
          className="hidden sm:inline-block sm:align-middle sm:h-screen"
          aria-hidden="true"
        >
          &#8203;
        </span>
        <div className="inline-block align-bottom bg-blue-900 rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full">
              <div className="bg-blue-900 pt-5 sm:p-0 pb-0">
                <div className="flex-end sm:items-start ">
                  <div className="mt-3 text-center sm:mt-3  sm:text-left">
                <h3
                  className="text-lg leading-6 font-medium text-white text-center mb-12"
                  id="modal-title"
                >
                  <span className="uppercase">{title}</span>
                </h3>
                {children}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

Modal.Footer = function ({ children }: FooterProps) {
  return (
    <div className="bg-blue-800 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
      {children}
    </div>
  )
}
