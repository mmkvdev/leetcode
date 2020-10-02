class Solution:
    def recur(self, candidates, target, ret):
        if not candidates and target:
            return
        if target<0:
            return 
        if target == 0:
            self.li.add(tuple(ret))
            return
        i=0
        self.recur(candidates[1:], target, ret+[candidates[0]]*i)
        i+=1
        while(target>=candidates[0]):
            target-=candidates[0]
            self.recur(candidates[1:], target, ret+[candidates[0]]*i)
            i+=1
    
    def combinationSum(self, candidates: List[int], target: int) -> List[List[int]]:
        self.li = set()
        self.recur(candidates, target, [])
        return self.li
        