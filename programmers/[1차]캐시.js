function solution(cacheSize, cities) {
    var answer = 0;
    if(cacheSize===0) return cities.length*5;
    let temp = Array.from({length:cacheSize}).fill(0);
    cities.forEach(x=>{
        let city = x.toLowerCase();
        //cache hit
        if(temp.indexOf(city) !== -1){
            answer ++;
            temp.splice(temp.indexOf(city),1);
            temp.unshift(city);   
        }
        else{//cache miss
            answer +=5;
            temp.pop();
            temp.unshift(city);
        }
    });
    return answer;
}

function solution2(cacheSize, cities){
    let time = 0
    let cache = []
    for (let i = 0; i < cities.length; i++) {
        let city = cities[i].toLowerCase()
        let index = cache.indexOf(city)
        if(index !== -1){
            //hit
            cache.splice(index, 1)
            cache.push(city)
            time += 1
        } else {
            //miss
            cache.push(city)
            time += 5
            if(cacheSize < cache.length){
                cache.shift()
            }
        }
    }
    return time
}