import { createContext, ReactNode, useContext, useState } from "react"
import { randomSetup } from "../utils/helperFunctions"

type Gameoflife = {
  generation: number
  setGeneration: React.Dispatch<React.SetStateAction<number>>
  gridSize: number
  setGridSize: React.Dispatch<React.SetStateAction<number>>
  grid: number[][]
  setGrid: React.Dispatch<React.SetStateAction<number[][]>>
}

type ProviderProps = {
  children?: ReactNode
}

const GameContext = createContext<Gameoflife>({} as Gameoflife)
export const useGameCtx = () => useContext(GameContext)

export default function GameProvider({ children }: ProviderProps) {
  const [generation, setGeneration] = useState<number>(0)
  const [gridSize, setGridSize] = useState<number>(30)
  const [grid, setGrid] = useState<number[][]>(randomSetup(gridSize))

  const value: Gameoflife = {
    generation,
    setGeneration,
    gridSize,
    setGridSize,
    grid,
    setGrid,
  }

  return <GameContext.Provider value={value}>{children}</GameContext.Provider>
}
