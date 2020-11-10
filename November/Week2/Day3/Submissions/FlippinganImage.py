class Solution:
    def inverse(self, A: List[List[int]]):
        for i in range(len(A)):
            for j in range(len(A)):
                if A[i][j] == 0:
                    A[i][j] = 1
                else:
                    A[i][j] = 0
        return A
        
    def flipAndInvertImage(self, A: List[List[int]]) -> List[List[int]]:
        for i in range(len(A)):
            A[i].reverse()
            
        return self.inverse(A)
        