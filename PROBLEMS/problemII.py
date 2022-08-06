print("Problem II")

def f (list):
    ret = []
    pos_i = 0
    for i in list: # Iterate through every item on the list
        acum = 1 # Start the product acumulator in 1
        pos_j = 0 # Start the nested iterator in 0
        for j in list:
            if(pos_i!=pos_j): # Avoid performing the calculation when the current index is the nested index
                acum = acum * j # Calculate the product and store it in acumulator
            pos_j = pos_j + 1 # Increment the nested iterator
        pos_i = pos_i + 1 # Increment the iterator
        ret.append(acum) # Add the result to the list
    return ret

print( f( [1,2,3,4] ) )
print( f( [1,2,3,4,5,6] ) )
