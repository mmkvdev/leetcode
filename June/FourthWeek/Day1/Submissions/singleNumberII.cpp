#include<iostream>
class Solution
{
public:
    int singleNumber(int nums[])
    {
        int ones = 0, twos = 0;
        int bit_mask;
        int num_size = *(&nums+1)-nums;
        for (int i = 0; i < num_size; i++)
        {
            twos |= (ones & nums[i]);
            ones ^= nums[i];
            bit_mask = ~(ones & twos);
            ones &= bit_mask;
            twos &= bit_mask;
        }
        return ones;
    }
};

int main()
{
    Solution s;
    int nums[] = {2,2,3,2};
    int k = s.singleNumber(nums);
    std::cout << k;
}
