class Solution:
    def twoCitySchedCost(self, costs):
        N = len(costs)
        cost_abs_diff = [c[0] - c[1] for c in costs]
        keys = sorted(range(0, (len(costs))), key=lambda k: cost_abs_diff[k])
        minCost = 0
        for i in range(int(N/2)):
            minCost += costs[keys[i]][0]
            minCost += costs[keys[N-i-1]][1]
        print(minCost)
        return minCost


if __name__ == '__main__':

    #cost_Array = [[10, 20], [30, 200], [400, 50], [30, 20]]
    cost_Array = [[259, 770], [448, 54], [926, 667],
                  [184, 139], [840, 118], [577, 469]]
    solution = Solution()
    solution.twoCitySchedCost(cost_Array)
