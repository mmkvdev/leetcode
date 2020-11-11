def dist(p,q):
            return (p[0]-q[0])**2 + (p[1]-q[1])**2
        
        def check(p1,p2,p3,p4):
            if p1[0]+p2[0] != p3[0]+p4[0] or p1[1]+p2[1] != p3[1]+p4[1]: return False
            if dist(p1,p2) != dist(p3,p4) or dist(p1,p4) != dist(p2,p4): return False
            if p1 == p2: return False
            return True
        
        return check(p1,p2,p3,p4) or check(p1,p3,p2,p4) or check(p1,p4,p2,p3)