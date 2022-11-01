let a = [10,20,30,1,2,3,5,9,11]

console.log(a.reduce((acc,cur)=>acc>cur? acc:cur))
console.log(a.reduce((acc,cur)=>acc<cur? acc:cur))