import { useEffect, useState } from "react"
import Grid from "../components/Grid"
import { updateGrid, checkEnd } from "../utils/helperFunctions"
import Modal from "./Modal"
import Start from "../assets/play.svg"
import Pause from "../assets/pause.svg"
import { useGameCtx } from "../contexts/GameContext"

export default function GameLayout() {
  const [intervalId, setIntervalId] = useState<number | null>(null)
  const { generation, setGeneration, grid, setGrid } = useGameCtx()

  const handleStartStop = () => {
    if (generation <= 1 && checkEnd(grid)) {
      alert("You need to start with at least one cell alive or choose a random grid from settings.")
      return
    }

    if (intervalId) {
      clearInterval(intervalId)
      setIntervalId(null)
    } else {
      setIntervalId(
        setInterval(() => {
          setGrid((grid) => updateGrid(grid))
        }, 500)
      )
    }
  }

  useEffect(() => {
    setGeneration((prev) => prev + 1)
  }, [grid])

  return (
    <>
      <button
        className="bg-blue-600 hover:bg-blue-700 shadow transition-all uppercase text-white font-bold py-2 px-4 rounded m-4"
        onClick={handleStartStop}
      >
        {intervalId ? (
          <span className="flex">
            <img className="pr-2" src={Pause} alt="icon" />
            Pause
          </span>
        ) : (
          <span className="flex">
            <img className="pr-2" src={Start} alt="icon" />
            Start
          </span>
        )}
      </button>
      <div className="uppercase p-4">Generation: {generation} </div>

      <Grid intervalId={intervalId} />

      <Modal intervalId={intervalId} setIntervalId={setIntervalId} />
    </>
  )
}
