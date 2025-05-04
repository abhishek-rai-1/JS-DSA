class Node {
  constructor(data) {
    this.value = data;
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
    while (temp.next && temp.next.next) temp = temp.next;
    this.tail = temp;
    this.tail.next = null;
    this.length--;
    if (this.length === 0) {
      this.head = null;
      this.tail = null;
    }
  }

  unshift(data) {
    const newNode = new Node(data);
    if (this.head === null) {
      this.head = newNode;
      this.tail = newNode;
      this.length++;
      return;
    }
    newNode.next = this.head;
    this.head = newNode;
    this.length++;
  }

  shift() {
    if (!this.head) return;
    let temp = this.head;
    this.head = this.head.next;
    temp.next = null;
    this.length--;
    if (this.length === 0) this.tail = null;
  }

  showLinkedList() {
    let ans = "";
    let temp = this.head;
    while (temp) {
      ans += `${temp.value} ---> `;
      temp = temp.next;
      if (!temp) ans += null;
    }
    return ans;
  }

  getFirst() {
    if (!this.head) return null;
    return this.head.value;
  }

  getLast() {
    if (!this.head) return null;
    return this.tail.value;
  }

  get(index) {
    let counter = 1;
    let temp = this.head;
    while (temp) {
      if (counter === index) return temp;
      temp = temp.next;
      counter++;
    }
    return null;
  }

  changeValue(index, data) {
    let counter = 1;
    let temp = this.head;
    while (temp) {
      if (counter === index) {
        temp.value = data;
      }
      temp = temp.next;
      counter++;
    }
  }

  insert(index, data) {
    if (index === 1) return this.unshift(data);
    if (index === this.length) return this.push(data);
    let newNode = new Node(data);
    let temp = this.get(index - 1);
    newNode.next = temp.next;
    temp.next = newNode;
    this.length++;
    return true;
  }

  size() {
    return this.length;
  }

  clear() {
    return (this.head = null);
  }
}

const myLinkedList = new LinkedList(1);
myLinkedList.push(12);
myLinkedList.push(34);
myLinkedList.push(156);
myLinkedList.push(89);
// console.log(myLinkedList.showLinkedList());
myLinkedList.pop();
// console.log(myLinkedList.showLinkedList());
myLinkedList.unshift(78);
// console.log(myLinkedList.showLinkedList());
myLinkedList.shift();
console.log(myLinkedList.showLinkedList());
// console.log(myLinkedList.getFirst());
// console.log(myLinkedList.getLast());
// console.log(myLinkedList.get(7));
myLinkedList.changeValue(7, 10);
console.log(myLinkedList.showLinkedList());
console.log(myLinkedList.insert(2, 20));
console.log(myLinkedList.showLinkedList());
console.log(myLinkedList.size());
console.log(myLinkedList.clear());