print("Problem I")

print("Is Balanced")

opener = "("
closer = ")"

def isBalanced(sequence):
    stack = []
    for i in sequence:
        if i == opener:
            stack.append(i)
        elif i == closer:
            if len(stack) > 0:
                stack.pop()
            else:
                return False
    
    if len(stack) == 0:
        return True
    else:
        return False

sequence = "{[]{()}}"
print("f(",sequence,") =", isBalanced(sequence))
sequence = "()((()))()"
print("f(",sequence,") =", isBalanced(sequence))
sequence = "(())("
print("f(",sequence,") =", isBalanced(sequence))
