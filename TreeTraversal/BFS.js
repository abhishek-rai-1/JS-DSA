class Node {
  constructor(data) {
    this.data = data;
    this.left = null;
    this.right = null;
  }
}

class BST {
  constructor() {
    this.root = null;
  }

  insert(value) {
    let newNode = new Node(value);

    if (this.root === null) {
      this.root = newNode;
      return this;
    }

    let temp = this.root;

    while (temp.left !== null && temp.right !== null)
      value > temp.data ? (temp = temp.right) : (temp = temp.left);

    if (temp.data === value) return undefined;
    else if (temp.left === null && temp.right === null && value < temp.data)
      temp.left = newNode;
    else if (temp.left !== null && temp.right === null && value > temp.data)
      temp.right = newNode;
    else temp.left = newNode;
  }

  //   BFS
  BFS() {
    let queue = [];
    let ans = [];
    let temp = this.root;
    queue.push(temp);
    while (queue.length) {
      temp = queue.shift();
      ans.push(temp.data);
      if (temp.left) queue.push(temp.left);
      if (temp.right) queue.push(temp.right);
    }
    return ans;
  }
}

const tree = new BST();
tree.insert(23);
tree.insert(13);
tree.insert(33);
tree.insert(3);
tree.insert(83);
console.log(tree.BFS());