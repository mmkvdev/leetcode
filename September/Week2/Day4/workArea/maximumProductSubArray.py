class Solution:
    def checkProd(self,k):
        print('fragment received: ', k)
        pro = 1
        for i in range(len(k)):
            pro *= k[i]
        return pro

    def maxProduct(self, nums):
        res = [nums[i:j] for i in range(len(nums)) for j in range(i+1, len(nums)+1)]
        print('Substrings', res)

        pro = 0
        for i in range(len(res)):
            k = self.checkProd(res[i])
            print('product received: ',k)
            if k > pro:
                pro = k
        print(pro)

if __name__ == '__main__':
    s = Solution()
    s.maxProduct([2,3,-2,4])
    # s.maxProduct([-2,0,-1])
