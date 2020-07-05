const dectobin = (n) => {
    let decbin = [];
    while(n) {
        decbin.push(n%16);
        n = parseInt(n/16);
    }
    console.log(decbin.reverse());
    // return decbin.reverse();
};

var hammingDistance = (x,y) => {
    // console.log(x,y);
    xbin = dectobin(x);
    // console.log(x^y);
    ybin = dectobin(y);
    // console.log(xbin^ybin);
}

hammingDistance(1,4);