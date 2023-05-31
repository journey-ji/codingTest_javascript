# re = 정규표현식 내장함수 
import re
import collections
def solution(paragraph,banned):
    result = collections.defaultdict()
    # [^\w] : 단어문자가 아닌 것
    words = re.sub(r'[^\w]',' ',paragraph).lower().split(' ')
    
    for word in words:
        if word not in banned:
            # result 사전타입에 객체 존재 여부 확인
            if word in result:
                result[word] +=1 
            else:
                result[word] = 1

    # Counter 내장모듈 : 개수셀때활용
    counts = collections.Counter(result)
    print(counts.most_common(1)[0][0])
    return max(result,key = result.get)


banned = ["hit"]
print(solution("Bob hit a ball, the hit BALL flew far after it was hit.",banned))


# 대소문자 구분 x, 구두점 무시
# 금지단어 제외, 가장 흔한 단어
# 딕셔너리 쓸 때, defaultdict() 쓰면
# 딕셔너리 내부에 값이 없을때 사용해도 기본값을 자동생성해서 에러를 막음