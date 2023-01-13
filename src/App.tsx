// Initialize the grid with random values
let grid: number[][] = new Array(10)
for (let i = 0; i < grid.length; i++) {
  grid[i] = new Array(10)
  for (let j = 0; j < grid[i].length; j++) {
    grid[i][j] = Math.random() > 0.5 ? 1 : 0
  }
}

// Function to count the number of live neighbors for a given cell
function countLiveNeighbors(grid: number[][], i: number, j: number) {
  let count = 0
  for (let x = -1; x <= 1; x++) {
    for (let y = -1; y <= 1; y++) {
      if (x === 0 && y === 0) {
        continue
      }
      if (grid[i + x] && grid[i + x][j + y]) {
        count++
      }
    }
  }
  return count
}

// Function to update the grid based on the Game of Life rules
function updateGrid(grid: number[][]) {
  let newGrid = new Array(grid.length)
  for (let i = 0; i < grid.length; i++) {
    newGrid[i] = new Array(grid[i].length)
    for (let j = 0; j < grid[i].length; j++) {
      let liveNeighbors = countLiveNeighbors(grid, i, j)
      if (grid[i][j]) {
        newGrid[i][j] = liveNeighbors === 2 || liveNeighbors === 3 ? 1 : 0
      } else {
        newGrid[i][j] = liveNeighbors === 3 ? 1 : 0
      }
    }
  }
  return newGrid
}

// Run the simulation for 10 generations
for (let i = 0; i < 10; i++) {
  grid = updateGrid(grid)
  console.log("Generation: " + (i + 1))
  console.log(grid)
}

function App() {
  return <div className="App">Sütií</div>
}

export default App
