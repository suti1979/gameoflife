import { useGameCtx } from "../contexts/GameContext"

export default function Grid() {
  const { grid, setGrid } = useGameCtx()

  function toggleCell(i: number, j: number) {
    const newGrid = [...grid]
    newGrid[i][j] = newGrid[i][j] ? 0 : 1
    setGrid(newGrid)
  }

  return (
    <div className=" shadow-xl p-1 rounded bg-blue-800 ">
      {grid.map((row, i) => {
        return (
          <div key={i} className="flex">
            {row.map((cell, j) => {
              return (
                <div
                  key={j}
                  onClick={() => toggleCell(i, j)}
                  className={`w-3 h-3 border border-blue-900 hover:bg-blue-400 ${
                    cell ? "bg-blue-500 " : "bg-blue-200"
                  }`}
                />
              )
            })}
          </div>
        )
      })}
    </div>
  )
}
