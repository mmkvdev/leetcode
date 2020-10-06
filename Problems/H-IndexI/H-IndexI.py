class Solution:
    def hIndex(self, citations):
        k = sorted(citations)
        return max(min(j, len(citations) - i) for i, j in enumerate(k + [0]))


if '__name__' == '__main__':
    solution = Solution()
    print(solution.hIndex([6, 3, 1, 0, 5]))
