export default class BinarySearchTreeNode<T> {
  private _value: T;
  public left: BinarySearchTreeNode<T> | null;
  public right: BinarySearchTreeNode<T> | null;

  constructor(value: T) {
    this._value = value;
    this.left = null;
    this.right = null;
  }

  get value(): T {
    return this._value;
  }
}
