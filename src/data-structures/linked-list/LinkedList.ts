import LinkedListNode from './LinkedListNode';

export default class LinkedList<T> {
  private _head: LinkedListNode<T> | null = null;
  private _tail: LinkedListNode<T> | null = null;
  private _length: number = 0;

  get head() {
    return this._head;
  }
  get tail() {
    return this._tail;
  }
  get length() {
    return this._length;
  }

  constructor() {
    this._head = null;
    this._tail = null;
  }

  isEmpty(): boolean {
    return this._head === null;
  }

  append(value: T): LinkedList<T> {
    const newNode = new LinkedListNode<T>(value);
    if (!this._head) {
      this._head = newNode;
      this._tail = newNode;
    } else {
      this._tail.next = newNode;
      this._tail = newNode;
    }

    this._length++;
    return this;
  }

  prepend(value: T): LinkedList<T> {
    const newNode = new LinkedListNode<T>(value);
    if (!this._head) {
      this._head = newNode;
      this._tail = newNode;
    } else {
      newNode.next = this._head;
      this._head = newNode;
    }

    this._length++;
    return this;
  }

  find(value: T, callback?: Function): LinkedListNode<T> | null {
    // empty linkedList
    if (!this._head) {
      return null;
    }

    let currentNode: LinkedListNode<T> = this._head;

    while (currentNode) {
      if (callback && callback(currentNode.value)) {
        return currentNode;
      }

      if (value && value === currentNode.value) {
        return currentNode;
      }

      currentNode = currentNode.next;
    }

    return null;
  }

  deleteHead(): LinkedList<T> {
    // empty linkedList
    if (!this._head) {
      return this;
    }

    if (this._head.next) {
      // linkedList with more than one node
      this._head = this._head.next;
    } else {
      // linkedList with single node
      this._head = null;
      this._tail = null;
    }

    return this;
  }

  deleteTail(): LinkedList<T> {
    // empty linkedList
    if (!this._head) {
      return this;
    }

    // linkedList with single node
    if (!this._head.next) {
      this._head = null;
      this._tail = null;
      return this;
    }

    let currentNode: LinkedListNode<T> = this._head;

    while (currentNode.next) {
      // iterate until last-but-one node
      if (currentNode.next.next) {
        currentNode = currentNode.next;
        continue;
      }
      // cut connection to last node
      currentNode.next = null;
    }

    // set last-but-one node as linkedList's tail
    this._tail = currentNode;

    return this;
  }

  toArray(): T[] {
    let nodes: T[] = [];

    let currentNode: LinkedListNode<T> = this._head;
    while (currentNode) {
      nodes.push(currentNode?.value);
      currentNode = currentNode?.next;
    }

    return nodes;
  }

  fromArray(values: T[]): LinkedList<T> {
    values.forEach((value: T) => this.append(value));
    return this;
  }

  reverse(): LinkedList<T> {
    // empty linkedList OR linkedList with one node
    if (!this._head || !this._head.next) {
      return this;
    }

    let previousNode: LinkedListNode<T> = null;
    let currentNode: LinkedListNode<T> = this._head;
    let nextNode: LinkedListNode<T> = this._head.next;

    // if linkedList has more than one node
    while (nextNode) {
      let temporaryNode: LinkedListNode<T> = nextNode.next;
      nextNode.next = currentNode;
      currentNode.next = previousNode;

      previousNode = currentNode;
      currentNode = nextNode;
      nextNode = temporaryNode;
    }

    // for last node
    currentNode.next = previousNode;
    this._tail = this._head;
    this._head = currentNode;

    return this;
  }
}
