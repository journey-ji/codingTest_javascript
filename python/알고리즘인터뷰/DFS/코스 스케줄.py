import collections
def canFinish(numCourses,preRequisites):
    traced = set()
    graph = collections.defaultdict(list)

    for x,y in preRequisites:
        graph[x].append(y)

    print(graph)
    def dfs(i):
        if i in traced:
            return False

        traced.add(i)
        for y in graph[i]:
            if not dfs(y):
                return False
        traced.remove(i)
        return True
    

    for x in list(graph):
        print(x)
        if not dfs(x):
            return False

    return True

print(canFinish(3,[[1,2],[0,1],[0,2]]))