import { useEffect, useState } from "react"
import { randomSetup } from "../utils/gameLogic"
import Settings from "../assets/settings.svg"
import { useGameCtx } from "../contexts/GameContext"
import Slider from "./Slider"
import Toggle from "./Toggle"
import { Modal } from "./Modal"

type SetupProps = {
  intervalId: number | null
  setIntervalId: React.Dispatch<React.SetStateAction<number | null>>
}

export default function Setup({ intervalId, setIntervalId }: SetupProps) {
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
        <Modal title="settings" setShowModal={setShowModal}>
          <>
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
          </>
          <Modal.Footer>
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
          </Modal.Footer>
        </Modal>
      )}
    </div>
  )
}
