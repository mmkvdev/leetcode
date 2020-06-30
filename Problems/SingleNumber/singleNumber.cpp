#include <iostream>
using namespace std;

int singleNumberII(int arr[], int n)
{
    int ones = 0, twos = 0;
    int bit;
    for (int i = 0; i < n; i++)
    {
        twos |= (ones & arr[i]);
        ones ^= arr[i];
        bit = ~(ones & twos);
        ones &= bit;
        twos &= bit;
    }
    return ones;
}

int main()
{
    int nums[] = {-1,-1,-2};
    int n = *(&nums + 1) - nums;
    cout << singleNumberII(nums, n);
}