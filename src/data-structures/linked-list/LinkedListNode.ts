export default class LinkedListNode<T> {
  private _value: T;
  public next: LinkedListNode<T> | null;

  constructor(value: T) {
    this._value = value;
    this.next = null;
  }

  get value(): T {
    return this._value;
  }
}
