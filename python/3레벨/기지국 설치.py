# 스테이션을 기준으로
# 이전 스테이션과 현재 스테이션 사이의 아파트 개수를 (2*w+1)로 나누기 연산 -> ceil 로 올림
import math
def solution(n, stations, w):
    answer = 0
    pre = 1
    dist = 2*w+1
    for i in stations:
        answer += max(math.ceil((i-w-pre)/dist),0)
        pre = i + w + 1
    if pre <= n:
        answer += math.ceil((n-pre+1)/dist)
    return answer