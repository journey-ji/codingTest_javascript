function solution(bridge_length, weight, truck_weights) {
  let answer = 0;
  let queue = Array.from(Array(bridge_length)).fill(0);
  let queueSum = queue.reduce((acc, cur) => acc + cur, 0);
  while (truck_weights.length || queueSum) {
    weight += queue.shift();
    if (weight >= truck_weights[0]) {
      weight -= truck_weights[0];
      queue.push(truck_weights.shift());
    } else {
      queue.push(0);
    }
    answer++;
    queueSum = queue.reduce((acc, cur) => acc + cur, 0);
  }
  return answer;
}
