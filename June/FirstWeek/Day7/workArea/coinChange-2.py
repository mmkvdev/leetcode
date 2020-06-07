#amount = 5
#coins = [1, 2, 5]
import numpy as np
count = 0


def coinChange(coins, amount):
    if len(coins) == 1:
        if(coins[0] == amount):
            return count+1
        else:
            return 0
    else:
        coin_permut = np.zeros((amount+1), dtype=int)
        coin_permut[0] = 1
        for i in range(len(coins)):
            for j in range(len(coin_permut)):
                if(coins[i] <= j):
                    coin_permut[j] += coin_permut[(int)(j-coins[i])]

        return coin_permut[amount]


amount = 12
# print(coin_permut)
print(coinChange([1,2,5], 5))
