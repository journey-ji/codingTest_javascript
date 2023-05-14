##  온도리스트를 입력받아, 더 따뜻한 날씨를 위해서 며칠을 더 기다려야 하는지 출력하라
##  입력 T = [73,74,75,71,69,72,76,73]
##  출력     [1, 1, 4, 2, 1, 1, 0, 0]



class Node:

    def __init__(data) -> None:
        self.data = data
        self.next = None
    
        


def dailyTemperatures(T):
    answer = [0]*len(T)
    
    stk = []

    for i,cur in enumerate(T):
        while stk and cur > T[stk[-1]]:
            last = stk.pop()
            answer[last] = i-last
        stk.append(i)
    
    return answer
    

print(dailyTemperatures([73,74,75,71,69,72,76,73]))
