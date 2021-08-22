import numpy as np
class Solution:
    def candy(self, ratings) -> int:
        candies = np.ones((len(ratings), ), dtype=int)
        for i in range(1,len(ratings)):
            if ratings[i] > ratings[i - 1]:
                candies[i] = candies[i - 1] + 1
        for i in range(len(ratings)-2, -1, -1):
            if ratings[i] > ratings[i + 1] and candies[i] <= candies[i+1]:
                candies[i] = candies[i + 1] + 1
        return sum(candies)

if __name__ == '__main__':
    test = Solution()
    print(test.candy([30,46,90,95,85,70,50,46,40]))