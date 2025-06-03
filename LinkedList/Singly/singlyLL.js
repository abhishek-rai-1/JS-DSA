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

  pop() {
    if (!this.head) return undefined;

    let temp = this.head;
    while (temp.next !== null && temp.next.next !== null) temp = temp.next;
    temp.next = this.tail.next;
    delete this.tail;
    this.tail = temp;
    this.length--;
    if (this.length === 0) this.tail = null;
  }

  unshift(data) {
    let newNode = new Node(data);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    }
    newNode.next = this.head;
    this.head = newNode;
    this.length++;
  }

  shift() {
    if (!this.head) return undefined;

    let temp = this.head;
    this.head = this.head.next;
    temp.next = null;
    this.length--;
    if (this.length === 0) this.tail = null;
  }

  getFirst() {
    if (!this.head) return undefined;
    return this.head;
  }

  getLast() {
    if (!this.head) return undefined;
    return this.tail;
  }

  getByIndex(index) {
    if (!this.head || index > this.length - 1) return undefined;

    let count = 0;
    let temp = this.head;
    while (count < index) {
      temp = temp.next;
      count++;
    }
    return temp;
  }

  set(index, value) {
    let tempNode = this.getByIndex(index);
    if (tempNode) {
      tempNode.data = value;
      return true;
    }
    return false;
  }

  insert(index, value) {
    let count = 1;
    let newNode = new Node(value);
    let temp = this.head;

    if (index >= this.length) return this.push(value);

    while (count < index) {
      temp = temp.next;
      count++;
    }

    if (count === 1) return this.unshift(value);

    newNode.next = temp.next;
    temp.next = newNode;
    this.length++;
  }

  size(){
    if(!this.head)  return undefined;
    return this.length;
  }
}

const myLinkedList = new LinkedList(43);
// console.log(myLinkedList);

myLinkedList.push(34);
myLinkedList.push(334);
myLinkedList.push(314);
// console.log(myLinkedList);

// myLinkedList.pop();
// console.log(myLinkedList);

// myLinkedList.unshift(98);
// console.log(myLinkedList);

// myLinkedList.shift();
// console.log(myLinkedList);

// console.log(myLinkedList.getFirst());

// console.log(myLinkedList.getLast());

// console.log(myLinkedList.getByIndex(2));

// console.log(myLinkedList.set(0, 989));
// console.log(myLinkedList);

// myLinkedList.insert(0, 90);
// console.log(myLinkedList);

console.log(myLinkedList.size());