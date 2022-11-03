// MaxHeap 구현
// MaxHeap = 루트가 최댓값인 힙
class Heap {
  constructor(){
    // n번째가 부모, 2*n+1 번째가 왼쪽자식 2*n+2 번째가 오른쪽 자식
    this.heap = []
  }
  swap(aIdx,bIdx){
    [this.heap[aIdx],this.heap[bIdx]] = [this.heap[bIdx],this.heap[aIdx]]
  }
  size(){
    return this.heap.length
  }
  insert(value) {
    // 우선 최하단에 삽입
    this.heap.push(value)
    let curIdx = this.heap.length-1
    let parentIdx = Math.floor((curIdx-1)/2)

    // bottome to top 으로 자기 위치를 찾을 때 까지 부모와 swap
    while(this.heap[parentIdx]<this.heap[curIdx]){
      this.swap(parentIdx,curIdx)
      curIdx = parentIdx
      parentIdx = Math.floor((curIdx-1)/2)
    }
  }
  pop(){
    const lastInedx = this.heap.length-1
    this.swap(0,lastInedx)
    let value = this.heap.pop();
    let cur = 0;
    while(cur<lastInedx){
      let leftChild = cur*2+1
      let rightChild = cur*2+2

      // 이번 노드가 마지막노드인 경우
      if(leftChild>=lastInedx) break
      // 왼쪽 자식만 가진 경우
      else if(rightChild>=lastInedx){
        // 현재 노드가 왼쪽 자식노드보다 값이 작으면
        if(this.heap[cur]<this.heap[leftChild]){
          this.swap(cur,leftChild)
          cur = leftChild
        }else break
      }else { // 왼쪽, 오른쪽 자식 둘 다 가진 경우
        if(this.heap[cur]<this.heap[leftChild] && this.heap[cur]<this.heap[rightChild]){
          if(this.heap[leftChild] > this.heap[rightChild]){
            this.swap(cur,leftChild)
            cur = leftChild
          }else {
            this.swap(cur,rightChild)
            cur = rightChild
          }
        }else if(this.heap[cur] < this.heap[leftChild]){
          this.swap(cur,leftChild)
          cur = leftChild
        }else if(this.heap[cur] < this.heap[rightChild]){
          this.swap(cur,rightChild)
          cur = rightChild
        }else break

      }
    }
    return value
  }
}

let test = new Heap()
test.insert(8)
test.insert(3)
test.insert(5)
test.insert(7)
test.insert(1)
test.pop()
console.log(test)
