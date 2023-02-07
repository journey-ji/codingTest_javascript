function solution(str1, str2) {
  let interCnt = 0;
  str1 = str1.toLowerCase();
  str2 = str2.toLowerCase();
  let setA = [];
  let setB = [];
  let setCro = [];
  var eng = /[a-z]/g;

  for (let i = 0; i < str1.length - 1; i++) {
    let str = `${str1[i]}${str1[i + 1]}`;
    if (str.replace(eng, "").length === 0) {
      setA.push(str);
    }
  }
  for (let i = 0; i < str2.length - 1; i++) {
    let str = `${str2[i]}${str2[i + 1]}`;
    if (str.replace(eng, "").length === 0) {
      setB.push(str);
    }
  }

  setA = setA.sort();
  setB = setB.sort();
  if (setA.length === 0 && setB.length === 0) {
    return 65536;
  }
  let j = 0;
  for (let i = 0; i < setA.length; i++) {
    if (j >= setB.length) break;
    if (setA[i] < setB[j]) {
      continue;
    } else if (setA[i] === setB[j]) {
      interCnt++;
      j++;
    } else {
      j++;
      i--;
    }
  }
  if (interCnt === 0) return 0;
  return parseInt((interCnt / (setA.length + setB.length - interCnt)) * 65536);
}
