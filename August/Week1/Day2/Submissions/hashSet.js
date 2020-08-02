/**
 * Initialize your data structure here.
 */
var MyHashSet = function() {
    this.hashSet = [];
};

/** 
 * @param {number} key
 * @return {void}
 */
MyHashSet.prototype.add = function(key) {
    let flag = 0;
    for(let i = 0; i< this.hashSet.length;i++) {
        if(this.hashSet[i] === key) {
            flag = 1;
            break;
        }
    }
    
    if(flag === 0) this.hashSet.push(key);
};

/** 
 * @param {number} key
 * @return {void}
 */
MyHashSet.prototype.remove = function(key) {
    for(let i = 0; i<this.hashSet.length;i++) {
        if(this.hashSet[i] === key) {
            this.hashSet.splice(i,1);
            break;
        }
    }
};

/**
 * Returns true if this set contains the specified element 
 * @param {number} key
 * @return {boolean}
 */
MyHashSet.prototype.contains = function(key) {
    for(let i = 0; i<this.hashSet.length;i++) {
        if(this.hashSet[i] === key) return true;
    }
    
    return false;
};

/** 
 * Your MyHashSet object will be instantiated and called as such:
 * var obj = new MyHashSet()
 * obj.add(key)
 * obj.remove(key)
 * var param_3 = obj.contains(key)
 */