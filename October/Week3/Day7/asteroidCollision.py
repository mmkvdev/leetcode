class Solution:
    def asteroidCollision(self, asteroids: List[int]) -> List[int]:
        stack = []
        for ast in asteroids:
            stack.append(ast)
            while len(stack) > 1 and stack[-1] < 0 and stack[-2] > 0:
                if stack[-1] + stack[-2] < 0: stack.pop(-2)
                elif stack[-1] + stack[-2] > 0: stack.pop()
                else:
                    stack.pop(); stack.pop()
                    break
        
        return stack