def solution(k, tangerine):
    answer = 0
    tangerineDict = dict()
    tangerine.sort()
    for i in tangerine:
        if(i not in tangerineDict.keys()):
            tangerineDict[i] = 1
        else:
            tangerineDict[i] += 1
    sortedDict = sorted(tangerineDict.items(),key = lambda item:item[1],reverse=True)
    for i in sortedDict:
        if(k<=0):
            break
        else:
            answer +=1;
            k -= i[1]
        
    return answer


## collections 라이브러리 이용
# import collections
# def solution(k, tangerine):
#     answer = 0
#     tanCnt = collections.Counter(tangerine)
    
#     for i in tanCnt.most_common():
#         if(k<=0):
#             break
#         else:
#             k-= i[1]
#             answer+=1
#     return answer