import { useGameCtx } from "../contexts/GameContext"

export default function Slider() {
  const { gridSize, setGridSize } = useGameCtx()

  return (
    <div className="relative pt-1 text-center flex flex-col justify-center">
      <label htmlFor="gridsize">
        Grid size: {gridSize}
        <br />
        <span className=" text-xs text-gray-400 ">(Takes effect on RESET)</span>
      </label>
      <input
        id="gridsize"
        type="range"
        className="w-64 m-auto h-6 p-4 bg-transparent focus:outline-none focus:ring-0 focus:shadow-none "
        defaultValue={gridSize}
        onChange={(e) => {
          setGridSize(Number(e.target.value))
        }}
        min="4"
        max="42"
        step="1"
      />
    </div>
  )
}
