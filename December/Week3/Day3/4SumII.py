class Solution:
    def fourSumCount(self, A: List[int], B: List[int], C: List[int], D: List[int]) -> int:
        def twoSum(A, B):
            A = collections.Counter(A)
            B = collections.Counter(B)
            C = collections.defaultdict(int)
            for a in A:
                for b in B:
                    C[a+b] += A[a] * B[b]
            return C

        AB = twoSum(A, B)
        CD = twoSum(C, D)
        return sum(AB[ab] * CD[-ab] for ab in AB)