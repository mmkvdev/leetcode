#include<vector>
using namespace std;
class Solution {
public:
    vector<int> sortArrayByParity(vector<int>& A) {
        int i,j;
        for(i=0, j=0;i<A.size();i++) {
            if(A[i] % 2 == 0) {
                int temp = A[i];
                A[i]=A[j];
                A[j]=temp;
                j++;
            }
        }   
        
        return A;
    }
};