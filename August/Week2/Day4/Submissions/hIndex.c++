#include<vector>
using namespace std;

class Solution {
public:
    int hIndex(vector<int>& citations) {
        std::sort(citations.begin(), citations.end());
        int n = citations.size();

        for (int i = 0; i < citations.size(); ++i) {
            if (citations[i] >= n - i) {
                return n - i;
            }
        }

        return 0;
    }
};