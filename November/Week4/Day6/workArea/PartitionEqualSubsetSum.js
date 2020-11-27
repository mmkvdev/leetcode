[
    [],
    [1],
    [5],
    [11],
    [5],
    [1, 5],
    [1, 11],
    [5, 11],
    [1, 5],
    [5, 5],
    [11, 5],
    [1, 5, 11],
    [1, 5, 5],
    [1, 11, 5],
    [5, 11, 5],
    [1, 5, 11, 5]
];

[
    [],
    [1],
    [5],
    [11],
    [5],
    [1, 5],
    [1, 11],
    [5, 11],
    [1, 5],
    [5, 5],
    [11, 5],
    [1, 5, 11],
    [1, 5, 5],
    [1, 11, 5],
    [5, 11, 5],
    [1, 5, 11, 5]
];

/**
 * @param {number[]} nums
 * @return {boolean}
 */

const subStringGenerator = (nums) => {
    /*let slicer = [];
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
    return slicer.sort((a, b) => a.length - b.length);*/

    let subsetNum = [[]];
    for (let i = 0; i < nums.length; i++) {
        subsetNum.forEach((ele) => {
            let k = [...ele, nums[i]];
            if (!subsetNum.includes(k)) {
                // console.log('ele: ', [...ele, nums[i]]);
                subsetNum.push(k);
            }
        });
    }
    return subsetNum.sort((a, b) => a.length - b.length);
};

var partitionSubSetSum = (nums) => {
    if (nums.length < 1) {
        return 0;
        //console.log(nums);
    } else {
        let sum = 0;
        for (let i = 0; i < nums.length; i++) {
            sum += nums[i];
        }

        return sum;
    }
};

const findingEqualSubSetSum = (nums) => {
    console.log(nums);
    /*for(let i = 0 ; i < nums.length; i++) {
        if (nums[i] === nums[i+1]){}
    }*/
    return nums.filter((v, i) => console.log(v, nums.indexOf(v) === i));
};

var canPartition = function (nums) {
    // console.log(subStringGenerator(nums));
    let res = subStringGenerator(nums);
    let finalRes = [];
    // console.log(res);
    for (let i = 0; i < res.length; i++) {
        // partitionSubSetSum(res);
        // console.log(res.length);
        finalRes.push(partitionSubSetSum(res[i]));
    }

    // finalRes.sort((a, b) => a.length - b.length);
    // console.log(finalRes);
    console.log(findingEqualSubSetSum(finalRes));

    // return finalRes.filter((v,i) => finalRes.indexOf(v) === i);

    // console.log(finalRes);
};
