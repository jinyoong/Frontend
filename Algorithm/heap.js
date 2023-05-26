class Heap {
  constructor() {
    this.heap = [];
  }

  size() {
    return this.heap.length;
  }

  heapPush(x) {
    this.heap.push(x);
    let childIdx = this.heap.length - 1;
    
    while (childIdx >= 1) {
      const parentIdx = parseInt((childIdx - 1) / 2);
      const child = this.heap[childIdx];
      const parent = this.heap[parentIdx]

      if (parent < child) {
        this.heap[parentIdx] = child;
        this.heap[childIdx] = parent;

        childIdx = parentIdx;
      } else {
        break;
      }
    }
  }

  heapPop() {
    if (this.size() === 0) {
      return null;
    }

    const result = this.heap[0];
    this.heap[0] = this.heap[this.size() - 1];
    this.heap.pop();
    let parentIdx = 0;
    let childIdx = 1;

    while (childIdx <= this.size() - 1) {
      let child = this.heap[childIdx];
      let parent = this.heap[parentIdx];

      if (childIdx + 1 <= this.size() - 1) {
        let rightChild = this.heap[childIdx + 1];

        if (child < rightChild) {
          child = rightChild;
          childIdx += 1;
        }
      }

      if (parent < child) {
        this.heap[parentIdx] = child;
        this.heap[childIdx] = parent;

        parentIdx = childIdx;
        childIdx = 2 * parentIdx + 1
      } else {
        break;
      }
    }

    return result;
  }
}

let maxHeap = new Heap();

[20, 10, 15, 4, 8, 2, 30].forEach(number => {
  maxHeap.heapPush(number);
})

for (let i = 0; i < 8; i++) {
  const popElement = maxHeap.heapPop();
  console.log(popElement);
  console.log(maxHeap.heap);
}