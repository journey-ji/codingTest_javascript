import sys
sys.setrecursionlimit(100000)


answer = 'zzzzz'
isFind = False;
def solution(n, m, x, y, r, c, k):
    global answer,isFind
    move = {
        'd':[1,0],
        'l':[0,-1],
        'r':[0,1],
        'u':[-1,0],
    }
    ## 사전순 먼저인 것을 빠른 인덱스에 위치
    def dfs(px,py,dist,path):
        global answer,isFind
        if(isFind):
            return
        if((k-dist)-(abs(px-r)+abs(py-c))%2==1 or (k-dist)-(abs(px-r)+abs(py-c))<0 ):
            # 백트래킹조건2. 목적지까지의 거리
            return
        
        if(not isFind and dist==k):
            if([px,py]==[r,c]):
                isFind = True
                answer = path
            return
        for i in move:
            if(path+i<answer):
                # 백트래킹조건1. path 사전순위
                nx = px+move[i][0]
                ny = py+move[i][1]
                if(px<1 or py <1 or px>n or py>m):
                    # 기본 범위
                    continue
                dfs(nx,ny,dist+1,path+i)
    
    dfs(x,y,0,'')
    
    if(answer=='zzzzz'):
        return 'impossible'
    return answer




## 마지막 시간초과
## map, list 속도차이 비교 필요



import sys
sys.setrecursionlimit(100000)


answer = 'zzzzz'
isFind = False;
def solution(n, m, x, y, r, c, k):
    global answer,isFind
    move = {
        'd':[1,0],
        'l':[0,-1],
        'r':[0,1],
        'u':[-1,0],
    }
    ## 사전순 먼저인 것을 빠른 인덱스에 위치
    def dfs(px,py,dist,path):
        global answer,isFind
        if(isFind):
            return
        if((k-dist)-(abs(px-r)+abs(py-c))<0 ):
            # 백트래킹조건2. 목적지까지의 거리
            return
        
        if(not isFind and dist==k):
            if([px,py]==[r,c]):
                isFind = True
                answer = path
            return
        for i in move:
            if(path+i<answer):
                # 백트래킹조건1. path 사전순위
                nx = px+move[i][0]
                ny = py+move[i][1]
                if(px<1 or py <1 or px>n or py>m):
                    # 기본 범위
                    continue
                dfs(nx,ny,dist+1,path+i)
    
    
    additionalTravelDist = k-(abs(x-r)+abs(y-c))
    if(additionalTravelDist%2==1):
        return 'impossible'
    
    dfs(x,y,0,'')
    if(answer=='zzzzz'):
        return 'impossible'
    return answer