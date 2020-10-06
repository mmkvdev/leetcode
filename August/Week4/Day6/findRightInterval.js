/**
 * @param {number[][]} intervals
 * @return {number[]}
 */
var findRightInterval = function (intervals, obj = {}, arr = [], max = -1e5) {
    intervals.map((v, indx) => {
        obj[v[0]] = indx;
        max = max > v[0] ? max : v[0];
    });
    for (v of intervals) {
        if (v[1] > max) arr.push(-1);
        else {
            for (let q = v[1]; q <= max; q++) {
                if (obj[q] == undefined) continue;
                arr.push(obj[q]);
                break;
            }
        }
    }
    return arr;
};
