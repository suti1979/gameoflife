export default function Grid({ grid }: { grid: number[][] }) {

  return (<div className=" shadow-xl p-1 rounded bg-blue-800 ">

    {grid.map((row, i) => {
      return (
        <div key={i} className="flex">
          {row.map((cell, j) => {
            return (
              <div
                key={j}
                className={`w-6 h-6 border border-blue-900 ${
                  cell ? "bg-blue-500 " : "bg-blue-200"
                }`}
              />
            )
          })}
        </div>
      )
    })
    }
  </div>)
}
