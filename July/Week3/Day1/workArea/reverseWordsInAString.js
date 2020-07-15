const trim = (str) => {

    // String trim -> removes whitespaces from the start and end of the string
    // console.log(str.trim());
    str1 = str.trim();
    // let space_counter = 0,
    let filtered_array = '',
        str2 = str1.split(' ');
    console.log(str2);
    /*for (let i = 0; i < str1.length; i++) {
        // console.log(str1[i]);
        if (str1[i] === ' ') space_counter++;
        if (space_counter <= 1) filtered_array += str1[i];
        if (space_counter > 1) {
            space_counter--;
            continue;
        }
    }*/
    // console.log(filtered_array);
}

// trim(' Hello  World! ');
trim('a good   example');

// \s+/g -> more than one occurrence of spaces and /g flag -> replace all occurrences