from scholarmetrics import hindex;


def HIndexII(citations):
    # return hindex(citations)
    # for i, j in enumerate(citations + [0]):
    # print(i, j)
    # print(max(min(j, len(citations) - i)))
    print(max(min(v, len(citations) - k) for k, v in enumerate(citations + [0])))


# return max(min(v, len(citations) - k) for k, v in enumerate(citations + [0]))


print(HIndexII([0, 1, 3, 5, 6]))
