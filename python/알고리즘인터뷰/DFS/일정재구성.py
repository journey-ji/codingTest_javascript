import collections
def findItinerary(tickets):
    graph = collections.defaultdict(list)
    for a, b in sorted(tickets):
        graph[a].append(b)
    route = []


    def dfs(a):
        while graph[a]:
            dfs(graph[a].pop(0))
        
        route.append(a)
    
    dfs("JFK")        
    return route[::-1]


print(findItinerary([["MUC","LHR"],["JFK","MUC"],["SFO","SJC"],["LHR","SFO"]]))

