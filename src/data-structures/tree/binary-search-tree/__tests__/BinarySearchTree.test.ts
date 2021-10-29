import BinarySearchTree from '../BinarySearchTree';

describe('BinarySearchTree', () => {
  describe('insert', () => {
    test('single node', () => {
      let binarySearchTree = new BinarySearchTree<number>();
      expect(binarySearchTree).toBeDefined();
      binarySearchTree.insert(2);
      expect(binarySearchTree.root).not.toBeNull();
      expect(binarySearchTree.root.value).toEqual(2);
    });

    test('multiple node', () => {
      let binarySearchTree = new BinarySearchTree<number>();
      binarySearchTree.insert(0).insert(-1).insert(1);
      expect(binarySearchTree.root).not.toBeNull();
      expect(binarySearchTree.root.value).toEqual(0);

      expect(binarySearchTree.root.left).not.toBeNull();
      expect(binarySearchTree.root.left.value).toEqual(-1);

      expect(binarySearchTree.root.right).not.toBeNull();
      expect(binarySearchTree.root.right.value).toEqual(1);
    });
  });

  test('find', () => {
    let binarySearchTree = new BinarySearchTree<number>();
    expect(binarySearchTree.find(5)).toBeNull();
    binarySearchTree.insert(0).insert(-1).insert(1);

    expect(binarySearchTree.root).not.toBeNull();
    expect(binarySearchTree.root.value).toEqual(0);
    expect(binarySearchTree.root).toEqual(binarySearchTree.find(0));

    expect(binarySearchTree.root.left).not.toBeNull();
    expect(binarySearchTree.root.left.value).toEqual(-1);
    expect(binarySearchTree.root.left).toEqual(binarySearchTree.find(-1));

    expect(binarySearchTree.root.right).not.toBeNull();
    expect(binarySearchTree.root.right.value).toEqual(1);
    expect(binarySearchTree.root.right).toEqual(binarySearchTree.find(1));
  });

  test('preOrder', () => {
    let binarySearchTree = new BinarySearchTree<number>();
    binarySearchTree.insert(2).insert(-1).insert(10).insert(-20);
    expect(binarySearchTree.preOrder()).toEqual([2, -1, -20, 10]);
  });

  test('inOrder', () => {
    let binarySearchTree = new BinarySearchTree<number>();
    binarySearchTree.insert(2).insert(-1).insert(10).insert(-20);
    // in a BST in order will always be sorted
    expect(binarySearchTree.inOrder()).toEqual([-20, -1, 2, 10]);
  });

  test('postOrder', () => {
    let binarySearchTree = new BinarySearchTree<number>();
    binarySearchTree.insert(2).insert(-1).insert(10).insert(-20);
    expect(binarySearchTree.postOrder()).toEqual([-20, -1, 10, 2]);
  });

  test('levelOrder', () => {
    let binarySearchTree = new BinarySearchTree<number>();
    binarySearchTree.insert(2).insert(-1).insert(10).insert(-20);
    expect(binarySearchTree.levelOrder()).toEqual([2, -1, 10, -20]);
  });
});
