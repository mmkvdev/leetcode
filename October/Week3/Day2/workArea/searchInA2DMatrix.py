class Solution:
    def searchMatrix(self, matrix: List[List[int]], target: int) -> bool:
        '''for i in range(len(matrix)):
            for j in range(1,len(matrix)):
                # print(matrix[i])
                if target == matrix[i][0]:
                    print(matrix[i][0])
                    print('Im here 1')
                    return True
                elif target > matrix[i][0] and target < matrix[j][0]:
                    print(matrix[i][0], matrix[j][0])
                    print('Im here 2')
                    return target in matrix[i]
                elif target > matrix[i][0] and target > matrix[j][0]:
                    print(matrix[i][0], matrix[j][0])
                    print('Im here 3')
                    return target in matrix[i]
                else:
                    return target in matrix[i]'''
        if not matrix or not matrix[0]: return False
        m, n = len(matrix[0]), len(matrix)
        beg, end = 0, m*n - 1
        while beg < end:
            mid = (beg + end)//2
            if matrix[mid//m][mid%m] < target:
                beg = mid + 1
            else:
                end = mid
        return matrix[beg//m][beg%m] == target