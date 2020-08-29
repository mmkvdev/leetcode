var pancakeSort = function (A) {
    const arr = new Array();

    for (let i = A.length - 1; i >= 0; i--) {
        const maxElement = Math.max(...A.slice(0, i + 1));
        const indexOfMax = A.indexOf(maxElement);

        if (indexOfMax === i) {
            continue;
        } else {
            if (indexOfMax > 0) {
                arr.push(indexOfMax + 1);
                reverse(indexOfMax, A);
            }

            if (i > 0) {
                arr.push(i + 1);
                reverse(i, A);
            }
        }
    }

    return arr;
};

function reverse(j, arr) {
    let i = 0;
    while (i <= j) {
        [arr[i], arr[j]] = [arr[j], arr[i]];
        i++;
        j--;
    }
}
