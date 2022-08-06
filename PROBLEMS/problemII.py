print("Problem II")

def f (list):
    ret = []

    pos_i = 0
    for i in list:
        acum = 1
        pos_j = 0
        for j in list:
            if(pos_i!=pos_j):
                acum = acum * j
            pos_j = pos_j + 1
        pos_i = pos_i + 1
        ret.append(acum)
    return ret

print( f( [1,2,3,4] ) )
