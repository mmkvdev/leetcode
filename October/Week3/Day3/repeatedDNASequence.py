class Solution:
    def findRepeatedDnaSequences(self, s: str) -> List[str]:
        Count = Counter(s[i-10:i] for i in range(10, len(s) + 1))
        return [key for key in Count if Count[key] > 1] 