def solution(n,t,m,timetable):
    timetable = sorted([int(i[:2])* 60 + int(i[3:])for i in timetable])
    콘의출근시간 = 540
    curTime = 540
    출근한사람들 = []
    for i in range(n):
        for j in range(m):
            if timetable and timetable[0]<=curTime:
                콘의출근시간 = timetable.pop(0) - 1
            else:
                콘의출근시간 = curTime

        curTime += t
    
    print(f'{str(콘의출근시간//60).zfill(2)}:{str(콘의출근시간%60).zfill(2)}')
    return 0

testcase = [
    [1,	1,	5,	["08:00", "08:01", "08:02", "08:03"]],
    [2,	10,	2,	["09:10", "09:09", "08:00"]],
    [1,	2,	1,	["09:00", "09:00", "09:00", "09:00"]]
]
for case in testcase:
    solution(case[0],case[1],case[2],case[3])
# 시간순 sort 
# for 문 두개,
# 바깥 for : 각 버스 운행 차수
# 안쪽 for : 도착한 크루들 조건 탐색
