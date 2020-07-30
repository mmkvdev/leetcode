const checkPrefix = (prefix, subApple) => {
    let prefixTracker =  '';
    for(let i = 0, j=0; i < prefix.length && j < subApple.length; i++, j++) {
        if (prefix[i] != subApple[j]) break;
        // prefixTracker.push(prefix[i]);
        prefixTracker += prefix[i];
    }
    return prefixTracker;
}
const longestCommonPrefix = (apple) => {
    let prefix = apple[0];
    for(let i = 1; i<apple.length;i++) {
        prefix = checkPrefix(prefix, apple[i]);
    }
    return prefix;
}

console.log(longestCommonPrefix(["apple", "applewatch", "appleairpodspro"]));

console.log(longestCommonPrefix(["flower","flow","flight"]))