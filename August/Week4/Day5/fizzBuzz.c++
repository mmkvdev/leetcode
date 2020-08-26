#include<vector>
#include<string>
using namespace std;

class Solution {
public:
    vector<string> fizzBuzz(int n) {
        vector<string> res;
        for(int i=1; i<=n;i++) {
            string str = "";
            if(i%3 == 0 && i%5 != 0) {
                str += "Fizz";
                // res.push_back('Fizz');
            }
            else if(i%3 != 0 && i%5 == 0) {
                str += "Buzz";
                // res.push_back('Buzz');
            }
            else if(i%3 == 0 && i%5 == 0) {
                str += "FizzBuzz";
                // res.push_back('FizzBuzz');
            }
            else {
                // res.push_back(to_string(i));
                str = to_string(i);
            }
            
            res.push_back(str);
        }
        
        return res;
    }
};