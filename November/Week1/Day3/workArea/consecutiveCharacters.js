/**
 * @param {string} s
 * @return {number}
 */

/*const subStringGenerator = (string) => {
    let slicer = [];
    for (let i = 0; i < string.length; i++) {
        for (let j = i + 1; j <= string.length; j++) {
            if (string.slice(i, j).length) {
                if (!slicer.includes(string.slice(i, j))) {
                    slicer.push(string.slice(i, j));
                }
            }
        }
    }
    // console.log(slicer);
    return slicer.sort((a,b) => a.length-b.length);
    // console.log(slicer[k]);
};*/

/*const max = (string) => {
    let maxLenCounter = 0;
    /*return string.map((v) => {
        if (v.length > max) {
            maxLenCounter = v.length;
        }
        
    })
    for(let i = 0; i < string.length;i++) {
        if(string[i].length > maxLenCounter) {
            maxLenCounter = string[i].length;
        }
    }
    
    // console.log(maxLenCounter);
    // return maxLenCounter;
}*/
/*const subStringGenerator = (string) => {
    let slicer = [], filtered_slicer = [];
    for (let i = 0; i < string.length; i++) {
        for (let j = i + 1; j <= string.length; j++) {
            if (string.slice(i, j).length) {
                if (!slicer.includes(string.slice(i, j))) {
                    slicer.push(string.slice(i, j));
                }
            }
        }
    }
    // console.log(slicer);
    slicer.map((v) => { 
        if((new Set(v)).size === 1) {
            filtered_slicer.push(v);
        }
    });
    return max(filtered_slicer);
    // return slicer.sort();
    // console.log(max(filtered_slicer));
    // console.log(slicer);
};*/

var maxPower = function (s) {
    // let power = subStringGenerator(s);
    // return subStringGenerator(s)
    // console.log(power);
    /*for(let i = 0; i<power.length;i++) {
        // if (new Set())
        // console.log(new Set(power[i]).size)
        if (new Set(power[i]).size === 1) {
            console.log(power[i]);
        }
    }*/
    let res = 0;
    let i = 0;
    while (i < s.length) {
        let count = 1;
        while (s[i] === s[i + 1]) {
            i++;
            count++;
        }
        res = Math.max(res, count);
        i++;
    }
    return res;
};
