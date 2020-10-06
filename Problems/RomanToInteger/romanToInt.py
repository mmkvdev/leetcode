def romanToInt(str):
    res = 0
    i = 0
    l = dict({'I': 1, 'V': 5, 'X': 10, 'L': 50, 'C': 100, 'D': 500, 'M': 1000})
    if len(str) == 1:
        return l[str]
    else:
        while i < len(str):
            # print(str[i])
            k1 = l[str[i]]
            # print(k)
            # for j in range(i+1, len(str)):
                # print(j)
                #l =
            if i + 1 < len(str):
                k2 = l[str[i+1]]
                # print(k2)
                if k1 >= k2:
                    res += k1
                    i += 1
                else:
                    res = res + k2-k1
                    i += 2
                    # print(res)
            else:
                res += k1
                i += 1
    return res

print(romanToInt("MCMXCIV"))