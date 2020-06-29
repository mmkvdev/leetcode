# from scholarmetrics import hindex
class Solution:
    def hIndex(self, citations):
        # return hindex(citations)
        return max(min(j, len(citations) - i) for i, j in enumerate(citations + [0]))

if '__name__' == '__main__':
    solution = Solution()
    print(solution.hIndex([0,1,3,5,6]))
