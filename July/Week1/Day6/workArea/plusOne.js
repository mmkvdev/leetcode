var digitArrayPack = (n,len) => {
    let digitArray = [];
    while(n) {
        digitArray.push(n%10);
        n = parseInt(n/10);
    }
    return digitArray.reverse();
}
var plusOne = (digits) => {
    // console.log(digits);
    /*let sum = 0;
    for (let i = 0; i < digits.length; i++) {
        sum = (sum*10)+(digits[i]);
        console.log(sum);
    }
    return digitArrayPack(sum+1,digits.length);*/
    var str = '';
    for (let i = 0; i < digits.length; i++) {
        //sum = (sum*10)+(digits[i]);
        str += digits[i];
    }
    console.log(str[0]);
}

/*console.log(plusOne([4,3,2,1]));
console.log(plusOne([1,2,9]));
console.log(plusOne([1,2,3]));*/
console.log(plusOne([6,1,4,5,3,9,0,1,9,5,1,8,6,7,0,5,5,4,3]));
