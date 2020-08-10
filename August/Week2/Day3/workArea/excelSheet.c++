#include <string>
#include<math.h>
using namespace std;
class Solution {
public:
    int titleToNumber(string s) {
        int res=0, exp=0;
        for (int i = s.length()-1;i>=0;i--) {
            res += (s[i]-64) * pow(26, exp);
            exp++;
        }

        return res;
    }
};