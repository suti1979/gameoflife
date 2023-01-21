import { useEffect, useState } from "react"
import { randomSetup } from "../utils/helperFunctions"
import Settings from "../assets/settings.svg"
import { useGameCtx } from "../contexts/GameContext"
import Slider from "./Slider"
import Toggle from "./Toggle"

type ModalProps = {
  intervalId: number | null
  setIntervalId: React.Dispatch<React.SetStateAction<number | null>>
}

export default function Modal({ intervalId, setIntervalId }: ModalProps) {
  const [showModal, setShowModal] = useState(false)
  const { gridSize, setGeneration, setGrid, setGodmode, godmode } = useGameCtx()

  useEffect(() => {
    // pause game when modal is open
    if (intervalId) {
      clearInterval(intervalId)
      setIntervalId(null)
    }
  }, [showModal])

  const handleReset = () => {
    setGeneration(0)
    setGrid(randomSetup(gridSize, false))
    setShowModal(false)
  }

  const randomFirstGeneration = () => {
    setGeneration(0)
    setGrid(randomSetup(gridSize, true))
    setShowModal(false)
  }

  return (
    <div>
      <button
        className="bg-blue-600 hover:bg-blue-800 shadow transition-all uppercase text-white font-bold py-2 px-4 rounded m-6"
        onClick={() => setShowModal(true)}
      >
        <span className="flex">
          <img className="pr-2" src={Settings} alt="icon" /> SETTINGS
        </span>
      </button>
      {showModal && (
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
            <span className="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">
              &#8203;
            </span>
            <div className="inline-block align-bottom bg-blue-900 rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full">
              <div className="bg-blue-900  px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                <div className="sm:flex sm:items-start ">
                  <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
                    <h3
                      className="text-lg leading-6 font-medium text-white text-center mb-12"
                      id="modal-title"
                    >
                      SETTINGS
                    </h3>

                    <Slider />

                    <Toggle godmode={godmode} setGodmode={setGodmode} />

                    <div className="flex justify-center flex-col">
                      <button
                        className="bg-blue-600 hover:bg-blue-800 shadow transition-all uppercase text-white font-bold py-2 px-4 rounded m-4"
                        onClick={randomFirstGeneration}
                      >
                        RANDOM FIRST GENERATION
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-blue-800 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
                <button
                  type="button"
                  className="transition-all mb-3 sm:mb-0 w-full inline-flex justify-center rounded-md border border-green-700 shadow-sm px-4 py-2 bg-green-600 text-base font-medium text-white hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
                  onClick={() => setShowModal(false)}
                >
                  DONE
                </button>
                <button
                  type="button"
                  className="transition-all sm:mb-0 w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-yellow-500 text-base font-medium text-white hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 sm:ml-3 sm:w-auto sm:text-sm"
                  onClick={handleReset}
                >
                  RESET
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
