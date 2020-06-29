'''from itertools import combinations

def subsetGenerator(l):
    combs = []
    for i in range(len(l)+1):
        listing = [list(x) for x in combinations(l,i)]
      #  print(listing)
        combs.extend(listing)
    # print(combs)
    return combs
def largestdivisiblesubset(l):
    k = subsetGenerator(l)
    k_filtered = []
    for i in k:
        if len(i) >= 2:
            k_filtered.append(i)
    # print(k_filtered)
    for i in k_filtered:
        for j in i:
            # print(j)

dis_int = [1,2,3]
largestdivisiblesubset(dis_int)'''


def largestdivisiblesubset(arr, n):
    arr.sort(reverse=False)
    divCount = [1 for i in range(n)]
    prev = [-1 for i in range(n)]
    max_ind = 0
    for i in range(1, n):
        for j in range(i):
            if arr[i] % arr[j] == 0:
                if divCount[i] < divCount[j] + 1:
                    divCount[i] = divCount[j]+1
                    prev[i] = j

        if divCount[max_ind] < divCount[i]:
            max_ind = i
    k = max_ind
    final = []
    while(k >= 0):
        # print(arr[k],end = " ")
        if k < len(arr):
            final.append(arr[k])
            k = prev[k]
    print(sorted(final))


if __name__ == '__main__':
    a = [1, 2, 4, 8]
    largestdivisiblesubset(a, len(a))
