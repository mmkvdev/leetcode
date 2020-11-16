class Solution:
    def longestMountain(self, A: List[int]) -> int:
        
        '''def subArrayGenerator(A: List[int]) -> int:
            for i in range(len(A)):'''
                '''for j in range(i):
                    # print('j', j)
                    self.subArray.append([A[j]])'''
                '''[self.subArray.append(A[j]) for j in range(len(A))]'''
                    
        '''self.subArray = [[]]
        subArrayGenerator(A)
        print(self.subArray)'''
        
        n, max_len = len(A), 0
        state, length = 0, 1
        for i in range(n-1):
            if state in [0, 1] and A[i+1] > A[i]:
                state, length = 1, length + 1
            elif state == 2 and A[i+1] > A[i]:
                state, length = 1, 2
            elif state in [1, 2] and A[i+1] < A[i]:
                state, length = 2, length + 1
                max_len = max(length, max_len)
            else:
                state, length = 0, 1
                
        return max_len

        