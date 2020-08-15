/**
 * @param {number[][]} intervals
 * @return {number}
 */
var eraseOverlapIntervals = function (intervals) {
    intervals.sort((a, b) => a[1] - b[1]);
    let prevInterval = intervals[0], remove = 0;
    for (let i = 1; i < intervals.length; i++) {
        const [prevS, prevE] = prevInterval;
        const [curS, curE] = intervals[i];
        if (prevE <= curS) prevInterval = intervals[i];
        else remove++;
    }

    return remove;
}; 