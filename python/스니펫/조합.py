# 1~n까지의 숫자를 k 개의 조합 모두 출력
def combination(n,k):
    results = []

    def dfs(elemtens, start, k):
        if k==0 :
            results.append(elemtens[:])
            return
        
        for i in range(start,n + 1):
            elemtens.append(i)
            dfs(elemtens,i + 1,k-1)
            elemtens.pop()
        


    dfs([],1,k)

    return results
    
print(combination(6,3))

## 1,2,3,4 중 2개
## 1,2 / 1,3 / 1,4 / 