class Solution:
    def calculateMinimumHP(self, dungeon: List[List[int]]) -> int:
        dist = [float("inf") for _ in dungeon[0]]
        dist[-1] = 1

        for i in reversed(range(len(dungeon))):
            dist[-1] = max(dist[-1] - dungeon[i][-1], 1)
            for j in reversed(range(len(dungeon[i]) - 1)):
                hpback_up = min(dist[j], dist[j + 1])
                dist[j] = max(hpback_up - dungeon[i][j], 1)

        return dist[0]