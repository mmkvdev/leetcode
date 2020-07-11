// just a typical script to generate all possbile subsets from the given distinct set of integers

const subsetGenerator = (subsets) => {
    // console.log(subsets);
    let subset = [[]];
    //console.log(subset);
    for (let i = 0; i < subsets.length; i++) {
        for(let j=0;j<subsets.length;j++) {
            subset.push([...subset[j],subsets[j]]);
        }
        /*subset.forEach((item) => {
            subset.push([...item, subsets[i]]);
        });*/
    }
    return subset;

}

console.log(subsetGenerator([1, 2, 3]));

