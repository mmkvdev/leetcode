/**
 * @param {number[][]} grid
 * @return {number}
 */
var islandPerimeter = function(grid) {
    let perimeter = 0;
    for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[0].length; j++) {
      if (grid[i][j]) {
        perimeter += 4;
        if (grid[i - 1] && grid[i - 1][j]) perimeter--;
        if (grid[i + 1] && grid[i + 1][j]) perimeter--;
        if (grid[i] && grid[i][j - 1]) perimeter--;
        if (grid[i] && grid[i][j + 1]) perimeter--;
      }
    }
  }
  return perimeter;
};