import numpy as np
class Solution:
    def change(self, amount, coins) -> int:
        coin_permut = np.zeros((amount+1), dtype=int)
        coin_permut[0] = 1
        for i in range(len(coins)):
            for j in range(len(coin_permut)):
                if(coins[i] <= j):
                    coin_permut[j] += coin_permut[(int)(j-coins[i])]

        return coin_permut[amount]

if __name__ == '__main__':
    solution = Solution()
    print(solution.change(5,[1, 2, 5]))