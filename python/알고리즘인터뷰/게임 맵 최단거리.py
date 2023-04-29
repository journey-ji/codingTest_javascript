# function solution(maps) {
#     let answer = 1;
#     let visited = maps;
#     let queue = [];
#     const dx = [-1, 1, 0, 0];
#     const dy = [0, 0, -1, 1];
#     const n = maps.length;
#     const m = maps[0].length;
    
#     queue.push([0, 0]);
#     visited[0][0] = 0;
    
#     while(queue.length > 0) {
#         let size = queue.length;
        
#         for(let i = 0; i < size; i++) {
#             let [x, y] = queue.shift();
            
#             for(let j = 0; j < 4; j++) {
#                 let nx = x + dx[j];
#                 let ny = y + dy[j];
                
#                 if(nx >= 0 && nx < n && ny >= 0 && ny < m && visited[nx][ny] === 1) {
#                     if(nx == n - 1 && ny == m - 1) {
#                         return ++answer;
#                     }
#                     queue.push([nx, ny]);
#                     visited[nx][ny] = 0;
#                 }
#             }
#         }
#         answer++;
#     }
#     return -1;
# }


## 최단거리 = bfs 이용


from collections import deque

def solution(maps):
    answer =1
    visited = maps
    queue = deque()
    dx = [-1,1,0,0]
    dy = [0,0,-1,1]
    n = len(maps)
    m = len(maps[0])

    queue.append([0,0])

    visited[0][0] = 0

    while len(queue)>0:
        size = len(queue)

        for i in range(size):
            [x,y] = queue.popleft()

            for j in range(4):
                nx = x +dx[j]
                ny = y +dy[j]
                if(nx>=0 and nx <n and ny>=0 and ny<m and visited[nx][ny] == 1):
                    if(nx == n-1 and ny == m-1):
                        return answer+1
                    queue.append([nx,ny])
                    visited[nx][ny] = 0
        answer +=1
    return -1
print(solution([[1,0,1,1,1],[1,0,1,0,1],[1,0,1,1,1],[1,1,1,0,1],[0,0,0,0,1]]))