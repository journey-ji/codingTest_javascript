def solution(s):
    strs = []
    for char in s:
        if char.isalnum():
            strs.append(char.lower())
    while len(strs) >1:
        if(strs.pop(0) !=strs.pop()):
            return False
    return True
print(solution("A man, a plan, a canal: Panama"))

# deque 이용시 속도향상가능

from collections import deque

def solution_by_deque(s):
    strs = deque()
    for char in s:
        if char.isalnum():
            strs.append(char.lower())

    while len(strs)>1:
        if strs.popleft() != strs.pop():
            return False
    return True

print(solution_by_deque('A man, a plan, a canal: Panama'))

