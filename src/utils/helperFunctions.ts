export function countLiveNeighbors(grid: number[][], i: number, j: number) {
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
  
  export function updateGrid(grid: number[][]) {
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