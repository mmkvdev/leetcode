from rsa import key

people = [[7,0], [4,4], [7,1], [5,0], [6,1], [5,2]]

# print(lambda x: (x[0],x[1]))

# for i in people:
    # print(i[0])

# printing the people's list in height decreasing order
people.sort(key= lambda x: (-x[0], x[1]))
# sorted(people, key: lambda x: (-x[0],x[1]))

print(people)
ans = []
for i in people:
    ans.insert(i[1],i)
    print(i[1])

print(ans)
# print(people)
'''for i in people:
    print(i)
'''