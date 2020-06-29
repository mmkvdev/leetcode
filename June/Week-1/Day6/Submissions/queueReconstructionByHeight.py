class Solution:
    def reconstructQueue(self, people):
        
        # sorting the people list in decreasing order
        people.sort(key= lambda p: (-p[0],p[1]))
        p = []
        for i in people:
            p.insert(i[1],i)
        return p

if __name__ == '__main__':
    people = [[7,0], [4,4], [7,1], [5,0], [6,1], [5,2]]
    solution = Solution()
    print(solution.reconstructQueue(people))