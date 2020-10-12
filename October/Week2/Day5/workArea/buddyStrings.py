class Solution:
    def buddyStrings(self, A: str, B: str) -> bool:
        '''swap = 0
        j = 1
        for i in range(0,len(A)):
            if i < j and i != j:
                temp = A[i]
                A[i] = A[j]
                A[j] = temp
                
                swap = A
        print(swap)'''
        if len(A) != len(B): return False
        Count_A, Count_B = Counter(A), Counter(B)
        if Count_A != Count_B: return False
        diff_places = sum([i!=j for i,j in zip(A,B)])
        if diff_places not in [0, 2]: return False
        if diff_places == 0 and len(Count_A) == len(A): return False
        if diff_places == 2 and len(Count_A) == 1: return False
        return True