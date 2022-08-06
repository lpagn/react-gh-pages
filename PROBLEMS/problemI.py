print("Problem I")

print("Is Balanced")

# A sequence is correctly balanced if for every opener there is a closer

opener = "("
closer = ")"

def isBalanced(sequence):
    stack = []
    for i in sequence:
        if i == opener:
            stack.append(i) # If I see an opener character, I append it to the stack
        elif i == closer: # If I see a closer character ... 
            if len(stack) > 0:
                stack.pop() # If I see a closer character and the stack has content in it I pop the opener, so for every closer I am consuming an opener
            else:
                return False # If I see a closer with no matching opener then it is not balanced
    
    if len(stack) == 0: # Everything is balanced
        return True
    else:
        return False # There are more openers than closers

sequence = "{[]{()}}"
print("f('",sequence,"') =", isBalanced(sequence))
sequence = "()((()))()"
print("f('",sequence,"') =", isBalanced(sequence))
sequence = "(())("
print("f('",sequence,"') =", isBalanced(sequence))
sequence = "("
print("f('",sequence,"') =", isBalanced(sequence))
