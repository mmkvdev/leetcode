/**
 * @param {number[][]} intervals
 * @return {number}
 */
var eraseOverlapIntervals = function(intervals) {
    // console.log(intervals);
    // let j = 1;
    /*for(i=0;i<intervals.length;i++) {
        // console.log(intervals[i]);
        for(j = 1; j<intervals.length;j++) {
            if(intervals[i][0] === intervals[j][0]) {
                // console.log(intervals[i], intervals[j]);
                if(intervals[i][1] !== intervals[j][1]) {
                    console.log(intervals[i],intervals[j]);
                }
            }   
        }
    }*/
    intervals.sort((a,b) => a[1]-b[1]);
    // console.log(intervals[0]);
    let prevInterval = intervals[0], remove=0;
    for(let i=1;i<intervals.length;i++) {
        const [prevS,prevE] = prevInterval;
        const [curS, curE] = intervals[i];
        if(prevE <= curS) prevInterval=intervals[i];
        else remove++;
    }
    
    return remove;
}; 