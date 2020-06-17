class Solution:
    def solve(self, board):
        if not board:
            return board
        for i in range(len(board)):
            if board[i][0] == 'O':
                self.make_one(board, i, 0)
            if board[i][len(board[0])-1] == 'O':
                self.make_one(board,i,len(board[0])-1)
        for i in range(len(board[0])):
            if board[0][i]=='O':
                self.make_one(board,0,i)
            if board[len(board)-1][i] == 'O':
                self.make_one(board,len(board)-1,i)
        for i in range(len(board)):
            for j in range(len(board[i])):
                if board[i][j]=='O':
                    board[i][j]='X'
                elif board[i][j]=='1':
                    board[i][j]='O'

        return board
    def make_one(self, board,i,j):
        if i<0 or j<0 or i>=len(board) or j>=len(board[0]) or board[i][j]=='X' or board[i][j]=='1':
            return
        board[i][j]='1'
        self.make_one(board,i+1,j)
        self.make_one(board,i-1,j)
        self.make_one(board,i,j+1)
        self.make_one(board,i,j-1)
if __name__ == '__main__':
    solution = Solution()
    solution.solve([["X","X","X","X"],["X","O","O","X"],["X","X","O","X"],["X","O","X","X"]])