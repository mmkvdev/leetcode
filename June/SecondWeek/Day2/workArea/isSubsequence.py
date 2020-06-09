'''''def isSorted(k,l):
    if k == sorted(k) and len(k) == l:
        return True
    else:
        return False
'''

def isContains(s,t):
    if len(t) == 0:
        return True
    k = 0
    for i in range(len(s)):
        if s[i] == t[k]:
            k += 1
        if k == len(t):
            return True

    return k == len(t)    
    #if s[len(s)-1] == t[len(t)-1]:
     #   return isContains(s,t,len(s)-1,len(t)-1)

    # return isContains(s,t,len(s),len(t)-1)
    # return s.__contains__(t)
    # return t in s
    # return s.find(t)
    #k = []
    # print(len(s),len(t))
    #for i in range(len(s)):
        # print(i)
     #   for j in range(len(t)):
            # print(i,j)
      #      if t[j] == s[i]:
       #         k.append(i)
    #print(k)
    # return isSorted(k,len(t))
                #if t[j] not in s:
                 #   print('I\'m here')
                  #  return False
                # return isSorted(k)
                #else:
                 #   k.append(i)
                  #  print(k)
                   # return isSorted(k)
                # return isSorted(k)


s = 'ahbgdc'
t = 'abc'
print(isContains(s,t))