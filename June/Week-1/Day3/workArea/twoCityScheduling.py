#cost_Array = [[10, 20], [30, 200], [400, 50], [30, 20]]
cost_Array = [[259,770],[448,54],[926,667],[184,139],[840,118],[577,469]]

dup_set = set()
dupp_set = set()
# A = [for i in range(len(cost_Array))]
print(cost_Array[0])
# print(len(cost_Array))
k1 = [dup_set.add(cost_Array[i][0]) for i in range(len(cost_Array))]
k2 = [dupp_set.add(cost_Array[i][1]) for i in range(len(cost_Array))]

# k = [[]]
#k = list(map(lambda i:dup_set.add(cost_Array[i][1]), cost_Array))
# print(sorted(k1))
# print(k2)
# print(sorted(dup_set))
# print(sorted(dupp_set))

#k = sorted(dup_set)
#l = sorted(dupp_set)
'''[k, l] = [sorted([dup_set.add(cost_Array[i][0]) for i in range(len(cost_Array))]), sorted(
    [dupp_set.add(cost_Array[i][1]) for i in range(len(cost_Array))])]'''
[k,l] = [sorted(dup_set),sorted(dupp_set)]
# print(k[0]+k[1]+l[0]+l[1])
#print(k)
#print(l)
# print(type(k))


'''
The first person goes to city A for a cost of 10.
The second person goes to city A for a cost of 30.
The third person goes to city B for a cost of 50.
The fourth person goes to city B for a cost of 20.

The total minimum cost is 10 + 30 + 50 + 20 = 110 
to have half the people interviewing in each city.
'''
