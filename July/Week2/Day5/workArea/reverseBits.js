var arrayEqual = (a,b) => {
    return Array.isArray(a) && Array.isArray(b) && a.length === b.length && a.every((v,i) => v === b[i]);
}
var bitChecker = (bits) => {
    let demoBits = [0,0,1,1,1,0,0,1,0,1,1,1,1,0,0,0,0,0,1,0,1,0,0,1,0,1,0,0,0,0,0,0]
    // console.log(bits);
    // console.log(demoBits.reverse());
    // console.log(bits !== demoBits.reverse());
    console.log(arrayEqual(bits,demoBits.reverse()));
};
var bitArrayGenerator = (unSignedBit) => {
    let digits = (""+unSignedBit).split("");
    console.log(Array.from(unSignedBit.toString()).map(Number));
}
// bitChecker(bitArrayGenerator(00000010100101000001111010011100));
bitArrayGenerator(00000010100101000001111010011100);