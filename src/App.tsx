import { useEffect, useState } from "react"
import Grid from "./components/Grid"
import { updateGrid } from "./utils/helperFunctions"

export default function App() {
  const [intervalId, setIntervalId] = useState<number | null>(null)
  const [generation, setGeneration] = useState<number>(0)
  const [gridSize, setGridSize] = useState<number>(10)
  const [grid, setGrid] = useState<number[][]>(() => {
    let grid: number[][] = new Array(gridSize)
    for (let i = 0; i < grid.length; i++) {
      grid[i] = new Array(gridSize)
      for (let j = 0; j < grid[i].length; j++) {
        grid[i][j] = Math.random() > 0.5 ? 1 : 0
      }
    }
    return grid
  })

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

  function handleReset() {
    setGeneration(0)
    setGrid(() => {
      let grid: number[][] = new Array(gridSize)
      for (let i = 0; i < grid.length; i++) {
        grid[i] = new Array(gridSize)
        for (let j = 0; j < grid[i].length; j++) {
          grid[i][j] = Math.random() > 0.5 ? 1 : 0
        }
      }
      return grid
    })
  }

  useEffect(() => {
    setGeneration((prev) => prev + 1)
  }, [grid])

  return (
    <div className=" flex flex-col items-center font-press-start text-white tracking-widest ">
      <h1 className=" text-xl m-4 uppercase ">Game of life</h1>

      <button
        className="bg-blue-600 hover:bg-blue-700 shadow transition-all uppercase text-white font-bold py-2 px-4 rounded m-4"
        onClick={handleStartStop}
      >
        {intervalId ? "Stop" : "Start"}
      </button>
      <div className=" uppercase p-4">Generation: {generation} </div>
      <Grid grid={grid} />

      <button
        className="bg-blue-600 hover:bg-blue-800 shadow transition-all uppercase text-white font-bold py-2 px-4 rounded m-4"
        onClick={handleReset}
      >
        Reset
      </button>
    </div>
  )
}
