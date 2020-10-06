const singleNumber = (arr) => {
    let base_counter, singleArray = [];
    arr.sort();
    console.log(arr);
    for (let i = 0; i < arr.length; i++) {
        // console.log(arr[i]);
        base_counter = 1
        for (let j = 1; j < arr.length; j++) {
            if (arr[i] === arr[j]) {
                // console.log(arr[i])
                base_counter++;
            }
            /*if (base_counter === 2) {
                console.log(arr[i])
                break;
            }*/
        }
        //console.log(base_counter, arr[i]);
        if (base_counter === 1) {
            //console.log(arr[i]);
            singleArray.push(arr[i]);
        }
    }

    return singleArray;
}

console.log(singleNumber([1, 2, 1, 3, 2, 5]))