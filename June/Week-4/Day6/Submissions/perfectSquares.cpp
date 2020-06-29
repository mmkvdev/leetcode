#include<iostream>
#include<vector>
#include<bits/stdc++.h>
using namespace std;
class Solution {
public:
    int numSquares(int n) {
        static vector<int> dp {0};  
        int m = dp.size();  
        cout << m;
        dp.resize(max(m, n+1), INT_MAX);  
        for (int i=1, i2; (i2 = i*i)<=n; ++i)  
            for (int j=max(m, i2); j<=n; ++j)  
                if (dp[j] > dp[j-i2] + 1)  
                    dp[j] = dp[j-i2] + 1;  
        return dp[n]; 
    }
};

int main() {
    Solution s;
    cout << "Perfect Square: " << s.numSquares(12);
}