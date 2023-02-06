const isPrime = (num) => {
  num = Number(num);
  if (num < 2) return false;
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) return false;
  }
  return true;
};

function solution(numbers) {
  let answer = 0;
  let chk = new Array(numbers.length).fill(false);
  let primeList = [];
  const recur = (n) => {
    n = Number(n);
    if (isPrime(n) && !primeList.includes(n)) {
      primeList.push(n);
      answer++;
    }
    for (let i = 0; i < numbers.length; i++) {
      if (chk[i] === false) {
        chk[i] = true;
        recur(n.toString() + numbers[i]);
        chk[i] = false;
      }
    }
  };
  recur(0);
  return answer;
}
