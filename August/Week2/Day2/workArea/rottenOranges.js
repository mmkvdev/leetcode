/**
 * @param {number[][]} grid
 * @return {number}
 */
var orangesRotting = function (grid) {
    const rNum = grid.length, cNum = grid[0].length;
    const rD = [1, -1, 0, 0], cD = [0, 0, 1, -1];
    let queue = [], minute = 0, fresh = 0;

    for (let r = 0; r < rNum; r++) {
        for (let c = 0; c < cNum; c++) {
            if (grid[r][c] === 2) queue.push([r, c])
            else if (grid[r][c] === 1) fresh++;
        }
    }

    while (fresh && queue.length) {
        const next = [];
        minute++;

        for (let [r, c] of queue) {

            for (let i = 0; i < rD.length; i++) {
                const nR = r + rD[i], nC = c + cD[i];

                if (nR < rNum && nR >= 0 &&
                    nC < cNum && nC >= 0 &&
                    grid[nR][nC] === 1) {
                    fresh--;
                    grid[nR][nC] = 2;
                    next.push([nR, nC]);
                }
            }
        }
        queue = next;
    }
    return !fresh ? minute : -1;
};