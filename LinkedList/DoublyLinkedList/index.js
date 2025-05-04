class Node {
  constructor(data) {
    this.value = data;
    this.next = null;
    this.prev = null;
  }
}

class DoublyLinkedList {
  constructor(data) {
    this.head = new Node(data);
    this.tail = this.head;
    this.length = 1;
  }

  push(data) {
    const newDoublyLL = new Node(data);
    if (!this.head) {
      this.head = newDoublyLL;
      this.tail = newDoublyLL;
    }
    this.tail.next = newDoublyLL;
    newDoublyLL.prev = this.tail;
    this.tail = newDoublyLL;
    this.length++;
  }

  showDoublyLL() {
    let result = "";
    let temp = this.head;
    while (temp) {
      result += temp.value + " ------> ";
      temp = temp.next;
      if (!temp) result += "null";
    }
    return result;
  }

  pop() {
    if (this.length === 0) return undefined;

    if (this.length === 1) {
      this.head = null;
      this.tail = null;
    }
    let temp = this.tail;
    this.tail = this.tail.prev;
    this.tail.next = null;
    temp.prev = null;
    this.length--;
  }

  unshift(data) {
    let newNode = new Node(data);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
      return;
    }
    newNode.next = this.head;
    this.head.prev = newNode;
    this.head = newNode;
    this.length++;
  }

  reverse() {
    let pointer1 = this.head;
    let pointer2 = this.tail;
    while (pointer1 !== pointer2) {
      let data = pointer1.value;
      pointer1.value = pointer2.value;
      pointer2.value = data;
      pointer1 = pointer1.next;
      pointer2 = pointer2.prev;
    }
  }
}

let myDoublyLL = new DoublyLinkedList(3);
myDoublyLL.push(9);
myDoublyLL.push(20)
myDoublyLL.push(34)
// console.log(myDoublyLL.showDoublyLL());
// myDoublyLL.pop();
// console.log(myDoublyLL.showDoublyLL());
myDoublyLL.unshift(90);
console.log(myDoublyLL.showDoublyLL());
myDoublyLL.reverse();
console.log(myDoublyLL.showDoublyLL());
