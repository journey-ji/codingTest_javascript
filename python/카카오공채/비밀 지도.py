def solution(arr1,arr2):
    n = len(arr1)
    answer = []
    for i,j in zip(arr1,arr2):
        answer.append(bin(i|j)[2:].zfill(5).replace('0',' ').replace('1','#'))
    
    print(answer)
    return 0


solution([9,20,28,18,11],[30,1,21,17,28])

## zfill(숫자) : 숫자개수 나머지를 0으로 자동 채움
## ljust(숫자,문자) : 숫자개수 나머지를 문자로 자동 채움