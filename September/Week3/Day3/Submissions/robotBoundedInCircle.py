class Solution:
    def isRobotBounded(self, instructions: str) -> bool:
        direction= (0,1)
        start = [0,0]
        
        for i in instructions:
            if i == 'G':
                start[0] += direction[0]
                start[1] += direction[1]
            elif i == 'L':
                direction = (-direction[1], direction[0])
            else:
                direction = (direction[1], -direction[0])
                
        return start == [0,0] or direction != (0,1)