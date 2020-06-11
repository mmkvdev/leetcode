def sortColors(colors):
    low = 0
    mid = 0
    high = len(colors)-1
    while mid <= high:
        if colors[mid] == 0:
            colors[low], colors[mid] = colors[mid], colors[low]
            low += 1
            mid += 1
        elif colors[mid] == 2:
            colors[high], colors[mid] = colors[mid], colors[high]
            high -= 1
        else:
            mid += 1
    return colors
    # color = list(set(colors))
    # print(colors)
    # color_count = [color.count(i) for i in color]
    # print(color_count)
    # color_count = [colors.count(i) for i in colors]
    # print(color_count)
    # [r,w,b] = [0,1,2]

    # [r_count,w_count ,b_count] = [0,0,0]
    # color_counter=[]
    # for i in colors:
    #   if i == r:
    #      r_count += 1
    # color_counter.append(r_count)
    # elif i == w:
    #    w_count += 1
    # color_counter.append(w_count)
    # else:
    #   b_count += 1
    # color_counter.append(b_count)
    #color_counter = [r_count,w_count,b_count]
    #final_color = []
    #k = [r,w,b]
    #l = 0
    # for i in color_counter:
    #   for j in range(i):
    #      final_color.append(k[l])
    # l += 1
    # print(color_counter)
    #colors = final_color
    # print(colors)
    # print(r_count,w_count,b_count)
    #r_count = [colors.count(i) for i in colors]


# colors = [2, 0, 2, 1, 1, 0]
print(sortColors([2, 0, 2, 1, 1, 0]))
