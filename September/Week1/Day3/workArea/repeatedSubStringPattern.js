const subStringGenerator = (string) => {
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
    return slicer.sort((a, b) => a.length - b.length);
};

let checkSubStringPattern = (s, rootS) => {
    let st = '';
    for (let i = 0; i < s.length; i++) {
        console.log(s, st);
        if (st === rootS) {
            return true;
        } else {
            console.log(st, s);
            st += s;
        }
    }

    return false;
};

let repeatedSubStringPattern = (s) => {
    const k = subStringGenerator(s);
    //console.log('Substrings Generated', k);
    for (let i = 0; i < k.length; i++) {
        //console.log(k[i]);
        if (checkSubStringPattern(k[i], s)) {
            return 'True';
        } else {
            continue;
        }
    }

    return 'False';
};

// console.log(subStringGenerator('abcd'));
// console.log(repeatedSubStringPattern('abcs'));
console.log(repeatedSubStringPattern('aba'));
