"""def longestDuplicateString(str1):
    l =[]
    for i in range(len(str1)):
        for j in range(i + 1, len(str1) + 1):
            l.append(str1[i:j])

    dict1 = {}
    longest_duplicated_substring = ""
    for i in l:
        if i not in dict1:
            dict1[i] = 1
        else:
            dict1[i] += 1
            if len(i) > len(longest_duplicated_substring):
                max_key = i
    return longest_duplicated_substring

if __name__ == '__main__':
    str1 = input("Enter the string: ").strip()
    print(longestDuplicateString(str1))"""
from functools import reduce

'''from collections import Counter
a='banana'
times=3
for n in range(1,len(a)/times+1)[::-1]:
    substrings=[a[i:i+n] for i in range(len(a)-n+1)]
    freqs=Counter(substrings)
    if freqs.most_common(1)[0][1]>=3:
        seq=freqs.most_common(1)[0][0]
        break
print("sequence '%s' of length %s occurs %s or more times"%(seq,n,times))'''

'''from collections import defaultdict

def getsubs(loc, s):
    substr = s[loc:]
    i = -1
    while (substr):
        yield substr
        substr = s[loc:i]
        i -= 1

def longestRepetitiveSubstring(r):
    occ = defaultdict(int)
    # tally all occurrences of all substrings
    for i in range(len(r)):
        for sub in getsubs(i, r):
            occ[sub] += 1
    # filter out all sub strings with fewer than 2 occurrences
    filtered = [k for k, v in occ.items() if v >= 2]
    if filtered:
        maxkey = max(filtered, key=len)  # Find longest string
        return maxkey
    else:
        return ""   


print(longestRepetitiveSubstring("abcd"))
'''


class Solution:
    def longestDupSubstring(self, S):
        A = [ord(c) - ord('a') for c in S]
        mod = 2 ** 34

        def test(L):

            p = pow(26, L, mod)
            cur = reduce(lambda x, y: (x * 26 + y) % mod, A[:L], 0)
            seen = {cur}
            for i in range(L, len(S)):

                cur = (cur * 26 + A[i] - A[i - L] * p) % mod
                if cur in seen:
                    return i - L + 1
                seen.add(cur)

        res, lo, hi = 0, 0, len(S)
        while lo < hi:
            mi = (lo + hi + 1) / 2
            pos = test(mi)
            if pos:
                lo = mi
                res = pos
            else:
                hi = mi - 1
        return S[res:res + lo]

if __name__ == '__main__':
    solution = Solution()
    print(solution.longestDupSubstring("banana"))
