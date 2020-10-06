var prisoncellsAfterNDays = (cells, N) => {
    // console.log(cells, N)
    /*for (let i = 0; i <= N; i++) {
        // console.log(cells[i]);
        for (let j = 0; j <= N; j++) {
            if (j == 0 || j == N) cells[j] = 0;
            else if ((cells[j - 1] == 0 && cells[j + 1] == 0) || (cells[j - 1] == 1 && cells[j + 1] == 1)) {
                cells[j] = 1;
            }
            else cells[j] = 0;
        }
        console.log(cells);
    }
    // console.log(cells);*/
    N = (N - 1) % 14 + 1;

    while (N-- > 0) {

        let prev = cells[0];

        for (let i = 1; i < cells.length - 1; i++) {
            let temp = cells[i];
            cells[i] = !prev ^ cells[i + 1];
            prev = temp;
        }

        cells[0] = 0;
        cells[cells.length - 1] = 0;
    }

    return cells;
}

console.log(prisoncellsAfterNDays([0, 1, 0, 1, 1, 0, 0, 1], 7));