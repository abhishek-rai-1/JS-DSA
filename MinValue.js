class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

class Stack {
  constructor(value) {
    this.top = new Node(value);
    this.length = 1;
  }

  push(value) {
    let newNode = new Node(value);
    newNode.next = this.top;
    this.top = newNode;
    this.length++;
  }

  min() {
    if (this.top === null) return undefined;

    let tempTop = this.top;
    let ans = Number.MAX_SAFE_INTEGER;

    while (tempTop !== null) {
      ans = Math.min(tempTop.data, ans);
      tempTop = tempTop.next;
    }

    return ans;
  }
}

const stack = new Stack(23);

stack.push(54);
stack.push(78);

console.log(stack.min());
