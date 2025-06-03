class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
    this.prev = null;
  }
}

class DoublyLL {
  constructor(data) {
    this.head = new Node(data);
    this.tail = this.head;
    this.length = 1;
  }

  push(value) {
    let newLL = new Node(value);
    if (!this.head) {
      this.head = newLL;
      this.tail = newLL;
      this.length++;
      return;
    }
    this.tail.next = newLL;
    newLL.prev = this.tail;
    this.tail = newLL;
    this.length++;
  }

  pop() {
    if (!this.head) return undefined;
    if (this.length === 1) {
      this.head = null;
      this.tail = null;
      this.length--;
      return;
    }
    let temp = this.tail;
    this.tail = this.tail.prev;
    this.tail.next = null;
    temp.prev = null;
    this.length--;
  }

  unshift(value) {
    let newLL = new Node(value);
    if (!this.head) {
      this.head = newLL;
      this.tail = newLL;
      this.length++;
      return;
    }
    newLL.next = this.head;
    this.head.prev = newLL;
    this.head = newLL;
    this.length++;
  }

  shift() {
    if (!this.head || this.length === 0) return undefined;
    let temp = this.head;
    this.head = this.head.next;
    if (this.head !== null) {
      this.head.prev = null;
      temp.next = null;
    }
    if (this.head === null) this.tail = null;
    this.length--;
  }
}

let myLinkedList = new DoublyLL(4);
// console.log(myLinkedList);

myLinkedList.push(78);
// console.log(myLinkedList);

// myLinkedList.pop();
// myLinkedList.pop();
// console.log(myLinkedList);

myLinkedList.unshift(56);
// console.log(myLinkedList);

myLinkedList.shift();
console.log(myLinkedList);
