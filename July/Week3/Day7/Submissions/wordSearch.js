/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */
var exist = function(board, word) {
    var m = board.length;
    var n = m ? board[0].length : 0;
    if (!m || !n) return false;
    var dfs = function(i, j, wordIdx) {
        if (i < 0 || i >= m || j < 0 || j >= n || board[i][j] !== word[wordIdx]) return false;
        if (wordIdx === word.length - 1) return true;
        var tmp = board[i][j];
        board[i][j] = '#';

        if (dfs(i, j + 1, wordIdx + 1) ||
            dfs(i, j - 1, wordIdx + 1) ||
            dfs(i + 1, j, wordIdx + 1) ||
            dfs(i - 1, j, wordIdx + 1)) return true;

        board[i][j] = tmp;
        return false;
    }
    for (var i = 0; i < m; i++) {
        for (var j = 0; j < n; j++) {
            if (dfs(i, j, 0)) return true;
        }
    }
    return false;
};