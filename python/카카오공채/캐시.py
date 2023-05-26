from collections import deque
def solution(cacheSize,cities):
    answer = 0
    cache = deque(['']*cacheSize,maxlen=cacheSize)
    for city in cities:
        city = city.lower()
        if city in cache:
            cache.remove(city)
            cache.append(city)
            answer +=1
        else:
            cache.append(city)
            answer +=5
    print(answer)
    return 0


solution(3,['Jeju','Pangyo','Seoul','NewYork','LA','Jeju','Pangyo','Seoul','NewYork','LA'])