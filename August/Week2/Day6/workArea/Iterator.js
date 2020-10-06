/**
 * @param {string} characters
 * @param {number} combinationLength
 */
var CombinationIterator = function(characters, combinationLength) {
    const res = [];
    const traverse = (str, index) => {
        if (str.length === combinationLength) {
            res.push(str);
            return;
        }
        for (let i = index; i < characters.length; i++) {
            traverse(str+characters[i], i+1);
        }
    }
    traverse('', 0)
    this.combinations = res;
    this.currIndex = 0;
};

/**
 * @return {string}
 */
CombinationIterator.prototype.next = function() {
    this.currIndex++ 
    return this.combinations[this.currIndex - 1];
};

/**
 * @return {boolean}
 */
CombinationIterator.prototype.hasNext = function() {
    if (this.currIndex >= this.combinations.length) {
        return false
    };
    return true;
};

/** 
 * Your CombinationIterator object will be instantiated and called as such:
 * var obj = new CombinationIterator(characters, combinationLength)
 * var param_1 = obj.next()
 * var param_2 = obj.hasNext()
 */