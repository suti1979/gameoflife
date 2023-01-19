import { useState } from "react"
import { randomSetup } from "../utils/helperFunctions"
import Settings from "../assets/settings.svg"
import { useGameCtx } from "../contexts/GameContext"

export default function Modal() {
  const [showModal, setShowModal] = useState(false)
  const { gridSize, setGeneration, setGrid } = useGameCtx()

  const handleReset = () => {
    setGeneration(0)
    setGrid(randomSetup(gridSize, false))
    setShowModal(false)
  }

  const handleClear = () => {
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
        className="bg-blue-600 hover:bg-blue-800 shadow transition-all uppercase text-white 
        font-bold py-2 px-4 rounded m-6"
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
              className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"
              aria-hidden="true"
              onClick={() => setShowModal(false)}
            ></div>
            <span
              className="hidden sm:inline-block sm:align-middle sm:h-screen"
              aria-hidden="true"
            >
              &#8203;
            </span>
            <div
              className="inline-block align-bottom bg-blue-900 rounded-lg text-left overflow-hidden shadow-xl transform transition-all 
                            sm:my-8 sm:align-middle sm:max-w-lg sm:w-full"
            >
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

                    <div className="flex justify-center flex-col">
                      <button
                        className="bg-blue-600 hover:bg-blue-800 shadow transition-all uppercase text-white
                      font-bold py-2 px-4 rounded m-6"
                        onClick={handleClear}
                      >
                        CLEAR ALL CELLS
                      </button>
                      <button
                        className="bg-blue-600 hover:bg-blue-800 shadow transition-all uppercase text-white
                      font-bold py-2 px-4 rounded m-6"
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
                  className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-red-600 
                            text-base font-medium text-white hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2
                             focus:ring-red-500 sm:ml-3 sm:w-auto sm:text-sm"
                  onClick={handleReset}
                >
                  RESET
                </button>
                <button
                  type="button"
                  className="mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2
                   bg-white text-base font-medium text-gray-700 hover:bg-blue-100 focus:outline-none focus:ring-2 
                   focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
                  onClick={() => setShowModal(false)}
                >
                  Cancel
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

function Slider() {
  const { gridSize, setGridSize } = useGameCtx()

  return (
    <div className="relative pt-1 text-center flex flex-col justify-center">
      <label htmlFor="gridsize">Grid size: {gridSize}</label>
      <input
        id="gridsize"
        type="range"
        className="
          form-range      
          w-64
          m-auto
          h-6
          p-4
          bg-transparent
          focus:outline-none focus:ring-0 focus:shadow-none
          
        "
        defaultValue={gridSize}
        onChange={(e) => {
          setGridSize(Number(e.target.value))
        }}
        min="5"
        max="45"
        step="1"
      />
    </div>
  )
}
