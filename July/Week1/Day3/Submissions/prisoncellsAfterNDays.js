/**
 * @param {number[]} cells
 * @param {number} N
 * @return {number[]}
 */
 var prisonAfterNDays = function(cells, N) {
    N = (N-1) % 14 + 1;
    while (N > 0) {
        let prev = cells[0];
        for (let i = 1; i < cells.length-1; i++) {
            let temp = cells[i];
            cells[i] = !prev ^ cells[i+1];
            prev = temp;
        }
        cells[0] = 0;
        cells[cells.length-1] = 0;
        N--;
    }
    return cells;  
};