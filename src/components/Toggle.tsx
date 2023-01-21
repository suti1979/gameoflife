type ToggleProps = {
  godmode: boolean
  setGodmode: React.Dispatch<React.SetStateAction<boolean>>
}

export default function Toggle({ godmode, setGodmode }: ToggleProps) {
  return (
    <label className="relative flex justify-center items-center group p-2 text-xl align-baseline pt-4">
      <span className=" pr-2 mb-2">😇</span>GodMode
      <input
        type="checkbox"
        checked={godmode}
        className="absolute left-1/2 -translate-x-1/2 w-full h-full peer appearance-none rounded-md"
        onChange={() => setGodmode((prev) => !prev)}
      />
      <span
        className="w-16 h-8 flex items-center flex-shrink-0 ml-4 p-1 bg-gray-900 
                      rounded-full duration-300 ease-in-out peer-checked:bg-blue-600 after:w-6 after:h-6
                       after:bg-white after:rounded-full after:shadow-md after:duration-300 
                       peer-checked:after:translate-x-8 group-hover:after:translate-x-1 "
      ></span>
    </label>
  )
}
