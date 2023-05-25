import time 
def solution():
    start = time.time()
    numberList = str(list(range(1,10001))).count('8')
    print(numberList)
    print("time :",time.time()-start)

solution()