def solution(s):
    answer = []
    s = s[2:-2]
    s = s.split('},{')
    s.sort(key=len)
    for itemList in s:
        itemList = itemList.split(',')
        for item in itemList:
            if(item not in answer):
                answer.append(item)
    answer = list(map(int,answer))
    return answer