/**
 * Initialize your data structure here.
 */

class Node {
    constructor() {
        this.children = new Map();
        this.end = false;
    }
}

class WordDictionary {
    constructor() {
        this.root = new Node();
    }
    
    addWord(word) {
        function add(node, i) {
            if(i === word.length) return node.end = true;
            if(!node.children.has(word[i])) node.children.set(word[i], new Node());
            add(node.children.get(word[i]), i+1);
        }
        add(this.root, 0);
    }
    
    search(word) {
        function find(node, i) {
            if(i === word.length && node.end) return true;
            if(i === word.length) return false;
            
            if(word[i] === '.') {
                for(let [key, next] of node.children) {
                    if(find(next, i+1)) return true;
                }
                return false;
            }
            if(!node.children.has(word[i])) return false;
            return find(node.children.get(word[i]), i+1);
        }
        return find(this.root, 0);
    }
}

/** 
 * Your WordDictionary object will be instantiated and called as such:
 * var obj = new WordDictionary()
 * obj.addWord(word)
 * var param_2 = obj.search(word)
 */