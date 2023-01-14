import { useEffect, useState } from "react"
import Grid from "../components/Grid"
import { intialSetup, updateGrid } from "../utils/helperFunctions"
import Modal from "./Modal"

export default function GameLayout() {
  const [intervalId, setIntervalId] = useState<number | null>(null)
  const [generation, setGeneration] = useState<number>(0)
  const [gridSize, setGridSize] = useState<number>(10)
  const [grid, setGrid] = useState<number[][]>(intialSetup(gridSize))

  function handleStartStop() {
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
        {intervalId ? "Stop" : "Start"}
      </button>
      <div className=" uppercase p-4">Generation: {generation} </div>
      <Grid grid={grid} />

      <Modal
        setGridSize={setGridSize}
        setGeneration={setGeneration}
        setGrid={setGrid}
        gridSize={gridSize}
      />
    </>
  )
}
