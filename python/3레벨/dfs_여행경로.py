def solution(tickets):
    answer = []
    nodeLen = len(tickets)
    visited = [False]*nodeLen
    def dfs(node,path):
        if len(path)==nodeLen-1:
            path.append(node[1])
            answer.append(path)
            # answer와 path 검사 
        else:
            for i in range(nodeLen):
                # 현재 노드[1](도착지)와 다음노드[0] 출발지가 같으면 dfs진행
                if(node[1]==tickets[i][0] and not visited[i]):
                    visited[i] = True
                    dfs(tickets[i],path+[node[1]])
                    visited[i] = False
                    
    for i in range(nodeLen):
        if(tickets[i][0]=='ICN'):
            visited = [False]*nodeLen
            visited[i]=True
            dfs(tickets[i],[]) 
    answer.sort()
    return ["ICN"]+answer[0]