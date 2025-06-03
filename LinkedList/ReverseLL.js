// Node
class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

class LinkedList {
  constructor(data) {
    this.head = new Node(data);
    this.tail = this.head;
    this.length = 1;
  }

  push(data) {
    let newNode = new Node(data);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    }
    this.tail.next = newNode;
    this.tail = newNode;
    this.length++;
  }

  reverse() {
    let temp = this.head;
    this.head = this.tail;
    this.tail = temp;
    let prev = null;
    let next = this.head.next;

    for (let i = 0; i < this.length; i++) {
      next = temp.next;
      temp.next = prev;
      prev = temp;
      temp = next;
    }
  }
}

const myLinkedList = new LinkedList(43);
// console.log(myLinkedList);

myLinkedList.push(34);
myLinkedList.push(334);
myLinkedList.push(314);
console.log(myLinkedList);

myLinkedList.reverse();
console.log(myLinkedList);
