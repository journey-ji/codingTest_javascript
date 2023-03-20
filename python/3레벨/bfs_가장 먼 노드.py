from collections import deque
def solution(n, edge):
    answer = 0
    dist = [0]*(n+1)
    dist[1] = 1
    edge.sort()
    q = deque()
    graph = [[] for i in range(n+1)]
    for e in edge:
        graph[e[0]].append(e[1])
        graph[e[1]].append(e[0])
    q.append(1)
    while q:
        curNode = q.popleft()
        for nextNode in graph[curNode]:
            if(dist[nextNode]==0):
                dist[nextNode] = dist[curNode]+1
                q.append(nextNode)
    
    dist.sort(reverse=True)
    answer = dist.count(dist[0])
    return answer