/**
 * @param {number[]} citations
 * @return {number}
 k = sorted(citations)
 return max(min(j, len(citations)-i) for i, j in enumerate(k+[0]))
 */
var hIndex = function (citations) {
    // let k = citations.sort(), l=[];
    citations.sort((a, b) => b - a);
    /*k.push(0)
    // console.log(k);
    // console.log(k)
    // for(let )
    // return Math.max(
    k.map((v,i) => {
        // console.log(v,i);
         l.push(Math.min(v, (citations.length-i)));
    });
    // console.log(l)
    // console.log(Math.max(l));
    return Math.max(...l);*/
    let h = 0;

    for (let i = 0; i < citations.length; i++) {
        if (citations[i] < i) return h;
        h = Math.min(citations[i], i + 1);
    }

    return h;
};