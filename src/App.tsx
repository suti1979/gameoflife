import GameLayout from "./components/GameLayout"
import GameProvider from "./contexts/GameContext"

export default function App() {
  return (
    <div className=" flex flex-col items-center font-press-start text-white tracking-widest ">
      <h1 className=" text-xl m-4 uppercase ">Game of life</h1>
      <GameProvider>
        <GameLayout />
      </GameProvider>
    </div>
  )
}
