import BinarySearchTreeNode from './BinarySearchTreeNode';

export default class BinarySearchTree<T> {
  private _root: BinarySearchTreeNode<T> | null = null;

  get root() {
    return this._root;
  }

  constructor() {
    this._root = null;
  }

  insert(value: T): BinarySearchTree<T> {
    this._root = this.insertImpl(value, this._root);
    return this;
  }

  insertImpl(
    value: T,
    currentNode: BinarySearchTreeNode<T>
  ): BinarySearchTreeNode<T> {
    if (!currentNode) {
      currentNode = new BinarySearchTreeNode<T>(value);
      return currentNode;
    }

    if (value <= currentNode.value) {
      currentNode.left = this.insertImpl(value, currentNode.left);
    } else {
      currentNode.right = this.insertImpl(value, currentNode.right);
    }
    return currentNode;
  }

  preOrder(): T[] {
    let output: T[] = [];
    this.preOrderImpl(this._root, output);
    return output;
  }

  preOrderImpl(currentNode: BinarySearchTreeNode<T>, output: T[]) {
    if (!currentNode) {
      return;
    }
    output.push(currentNode.value);
    this.preOrderImpl(currentNode.left, output);
    this.preOrderImpl(currentNode.right, output);
  }

  inOrder(): T[] {
    let output: T[] = [];
    this.inOrderImpl(this._root, output);
    return output;
  }

  inOrderImpl(currentNode: BinarySearchTreeNode<T>, output: T[]) {
    if (!currentNode) {
      return;
    }
    this.inOrderImpl(currentNode.left, output);
    output.push(currentNode.value);
    this.inOrderImpl(currentNode.right, output);
  }

  postOrder(): T[] {
    let output: T[] = [];
    this.postOrderImpl(this._root, output);
    return output;
  }

  postOrderImpl(currentNode: BinarySearchTreeNode<T>, output: T[]) {
    if (!currentNode) {
      return;
    }
    this.postOrderImpl(currentNode.left, output);
    this.postOrderImpl(currentNode.right, output);
    output.push(currentNode.value);
  }

  levelOrder(): T[] {
    let output: T[] = [];
    let queue: BinarySearchTreeNode<T>[] = [];

    queue.push(this._root);
    while (queue.length > 0) {
      let currentNode = queue[0];
      if (currentNode.left) {
        queue.push(currentNode.left);
      }
      if (currentNode.right) {
        queue.push(currentNode.right);
      }
      output.push(queue.shift().value);
    }

    return output;
  }

  find(searchElement: T): BinarySearchTreeNode<T> | null {
    return this.findImpl(searchElement, this._root);
  }

  findImpl(
    searchElement: T,
    currentNode: BinarySearchTreeNode<T>
  ): BinarySearchTreeNode<T> | null {
    if (!currentNode) {
      return null;
    }

    if (currentNode.value === searchElement) {
      return currentNode;
    } else if (currentNode.value > searchElement) {
      return this.findImpl(searchElement, currentNode.left);
    } else {
      return this.findImpl(searchElement, currentNode.right);
    }
  }
}
