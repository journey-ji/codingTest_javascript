function solution(genres, plays) {
    let answer = [];
    let playList = {}
    let temp = {}
    for(let i=0; i<genres.length;i++){
        playList[genres[i]] = playList[genres[i]]?
            {
            data:{
                ...playList[genres[i]].data,
                [i]:plays[i]
            },
            total:playList[genres[i]].total+plays[i]
            }:
            {
            data:{
                [i]:plays[i]
            },
            total:plays[i]
        }
    }
    Object.entries(playList).sort((a,b)=>b[1].total-a[1].total).forEach(item=>{
        temp[item[0]] = item[1]
    })
    
    for(let song in temp){
        Object.entries(temp[song].data).sort((a,b)=>b[1]-a[1]).filter((item,idx)=>idx<=1).forEach(item=>{
            answer.push(parseInt(item[0]))
        })
    }
    return answer;
}