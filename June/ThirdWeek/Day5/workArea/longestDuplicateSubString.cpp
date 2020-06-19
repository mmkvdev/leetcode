class Solution {
public:
    string longestDupSubstring(string S) {
        int n = S.length();
        int left = 1;
        int right = n;
        while(left<=right)
        {
            int len = left + (right-left) / 2;
            if(search(len, S, n) != -1)
                left = len + 1;
            else
                right = len - 1;
        }
        int start = search(left - 1, S, n);
        return S.substr(start, left - 1);
    }
    int search(int len, string s, int n)
    {
        long modulus = (long)pow(2, 34);
        long value = 0;
        unordered_set<long> sets;
        for(int i = 0; i < len; i++) {
            value = value * 26 + s[i] - 'a';
            value = value % modulus;
        }

        sets.insert(value);

        // prepass, cache the remainder
        long aL = 1;
        for (int i = 0; i < len; ++i) {
            aL = (aL * 26) % modulus;
        }

        for(int i = 1;i <= n-len; i++) {
            value = value * 26 - (s[i-1] - 'a') * aL + modulus + s[i+len-1] - 'a';
            value = value % modulus;
            if(sets.count(value)) {
                return i;
            }
            else {
                sets.insert(value);
            }
        }
        return -1;
    }
};