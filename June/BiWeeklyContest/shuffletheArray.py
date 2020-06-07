nums = [2,5,1,3,4,7]
n = 3
k1 = []
k2 = []
k3=[]
for i in range(n):
    k1.append(nums[i])

for i in range(n,2*n):
    k2.append(nums[i])
print(k1)
print(k2)
print(k1+k2)
for i in range(n):
    if(i<2*n-1):
        print(i)
        k3.append(k1[i])
        k3.append(k2[i])

print(k3)
