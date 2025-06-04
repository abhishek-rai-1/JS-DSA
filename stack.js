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

  pop() {
    let temp = this.top;
    if (this.top === null) return undefined;
    this.top = this.top.next;
    temp.next = null;
    this.length--;
  }

  show() {
    let temp = this.top;
    let variable = "";
    while (temp !== null) {
      variable += `${temp.data} --->`;
      temp = temp.next;
    }
    if (temp === null) variable += null;
    console.log(variable);
  }
}

const stack = new Stack(23);

stack.push(54);
stack.push(78);

stack.show();

stack.pop();
stack.show();
