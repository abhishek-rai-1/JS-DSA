class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

class Queue {
  constructor(value) {
    this.first = new Node(value);
    this.last = this.first;
    this.lenght = 1;
  }

  Enqueue(value) {
    let newNode = new Node(value);
    this.last.next = newNode;
    this.last = newNode;
    this.lenght++;
  }

  Dequeue() {
    if (this.lenght === 0) return undefined;
    if (this.lenght === 1) {
      this.first = null;
      this.last = null;
      this.lenght--;
      return;
    }
    let temp = this.first;
    this.first = this.first.next;
    temp.next = null;
    this.lenght--;
  }

  show() {
    let temp = this.first;
    let ans = "";
    while (temp !== null) {
      ans += `${temp.data} --->`;
      temp = temp.next;
    }
    if (temp === null) ans += null;
    console.log(ans);
  }
}

let myQueue = new Queue(23);

myQueue.Enqueue(45);
myQueue.Enqueue(89);
myQueue.Enqueue(32);

myQueue.show();

myQueue.Dequeue();
myQueue.show();
