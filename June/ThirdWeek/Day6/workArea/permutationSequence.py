from itertools import permutations


"""def listToString(l):
    st = ""
    for i in l:
        st += str(i)
    return st"""


def permutationGenerator(s, n, k):
    """
        s = []
        s = [s.append(i) for i in range(1,len(s)+1)]
        print(s)
    """
    s = list(range(1, n + 1))
    final = ""
    for i in list(permutations(s, n))[k - 1]:
        final += str(i)
    return final
        # final += str(i)
    # return final
    # return l


s = [1, 2, 3]
print(permutationGenerator(s, 4, 9))
