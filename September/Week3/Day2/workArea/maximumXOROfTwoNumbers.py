mask = 0
for i in range(31,-1,-1):

    mask |= 1 << i

    print(mask)
    # print(i)