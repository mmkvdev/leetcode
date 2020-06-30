/**
 * @param {character[][]} board
 * @param {string[]} words
 * @return {string[]}
 */
var findWords = function(board, words) {
    const dictionary = new Set(words);
      const wordsFound = new Set();

      function depthFirstSearch(row, col, path, letters) {
        const currentPath = `${row}${col}`;

        if(!board[row] || !board[row][col]) return;

        if (path.includes(currentPath)) return;

        const letter = board[row][col];
        const currentWord = letters + letter;

        if (dictionary.has(currentWord)) {
          wordsFound.add(currentWord);
        } else {
         const isCloseWord = words.some(word => word.includes(currentWord));

        if (!isCloseWord) return;
        }

        depthFirstSearch(row + 1, col, [...path, currentPath], letters + letter);
        depthFirstSearch(row - 1, col, [...path, currentPath], letters + letter);
        depthFirstSearch(row, col - 1, [...path, currentPath], letters + letter);
        depthFirstSearch(row, col + 1, [...path, currentPath], letters + letter);
      }

      for(let i=0; i<board.length; i++) {
        for(let j=0; j<board[0].length; j++) {
          depthFirstSearch(i, j, [], '');
        }
      }

      return Array.from(wordsFound);
};