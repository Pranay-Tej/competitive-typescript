import LinkedList from '../LinkedList';

describe.concurrent('LinkedList', () => {
  test('create empty linked list', () => {
    const linkedList = new LinkedList<Number>();
    expect(linkedList.isEmpty()).toBe(true);
  });

  test('to array', () => {
    const linkedList = new LinkedList<Number>();
    linkedList.append(1).append(2).append(3);
    expect(linkedList.toArray()).toEqual([1, 2, 3]);
  });

  test('from array', () => {
    const linkedList = new LinkedList<Number>().fromArray([1, 2, 3]);
    expect(linkedList.head.value).toEqual(1);
    expect(linkedList.tail.value).toEqual(3);
    expect(linkedList.toArray()).toEqual([1, 2, 3]);
  });

  test('append node to linked list', () => {
    const linkedList = new LinkedList<Number>();

    expect(linkedList.isEmpty()).toBe(true);

    linkedList.append(1);
    linkedList.append(2);
    expect(linkedList.length).toBe(2);
    expect(linkedList.toArray()).toEqual([1, 2]);
    expect(linkedList.tail.next).toBeNull();
  });

  test('prepend node to linked list', () => {
    const linkedList = new LinkedList<Number>();

    expect(linkedList.isEmpty()).toBe(true);

    linkedList.prepend(1).append(2);
    expect(linkedList.toArray()).toEqual([1, 2]);
    linkedList.prepend(0);
    expect(linkedList.toArray()).toEqual([0, 1, 2]);
    expect(linkedList.tail.next).toBeNull();
  });

  test('find node by value', () => {
    const linkedList = new LinkedList<Number>();
    expect(linkedList.find(5)).toBeNull();
    linkedList.append(1);
    expect(linkedList.find(1)).toBeDefined();

    linkedList.append(2).append(3);
    const node = linkedList.find(2);
    expect(node.value).toBe(2);
    expect(linkedList.find(5)).toBeNull();
  });

  describe.concurrent('delete head', () => {
    test('empty linkedList', () => {
      const linkedList = new LinkedList<Number>();
      expect(linkedList.deleteTail().head).toBeNull();
    });

    test('linkedList with one node', () => {
      const linkedList = new LinkedList<Number>();
      linkedList.append(1);
      expect(linkedList.find(1)).toBeDefined();
      linkedList.deleteHead();
      expect(linkedList.find(1)).toBeNull();
      expect(linkedList.head).toBeNull();
      expect(linkedList.tail).toBeNull();
      expect(linkedList.toArray()).toEqual([]);
    });

    test('linkedList with more than one node', () => {
      const linkedList = new LinkedList<Number>();
      linkedList.append(1).append(2).append(3);
      expect(linkedList.find(1)).toBeDefined();
      linkedList.deleteHead();
      expect(linkedList.find(1)).toBeNull();
      expect(linkedList.head.value).toEqual(2);
      expect(linkedList.toArray()).toEqual([2, 3]);
    });
  });

  describe.concurrent('delete tail', () => {
    test('empty linkedList', () => {
      const linkedList = new LinkedList<Number>();
      expect(linkedList.deleteTail().head).toBeNull();
    });

    test('linkedList with one node', () => {
      const linkedList = new LinkedList<Number>();
      linkedList.append(1);
      expect(linkedList.find(1)).toBeDefined();
      linkedList.deleteTail();
      expect(linkedList.find(1)).toBeNull();
      expect(linkedList.head).toBeNull();
      expect(linkedList.tail).toBeNull();
      expect(linkedList.toArray()).toEqual([]);
    });

    test('linkedList with more than one node', () => {
      const linkedList = new LinkedList<Number>();
      linkedList.append(1).append(2).append(3);
      expect(linkedList.find(1)).toBeDefined();
      linkedList.deleteTail();
      expect(linkedList.find(3)).toBeNull();
      expect(linkedList.tail.value).toEqual(2);
      expect(linkedList.toArray()).toEqual([1, 2]);
    });
  });

  describe.concurrent('reverse', () => {
    test('empty linkedList', () => {
      const linkedList = new LinkedList<Number>();
      expect(linkedList.reverse().head).toBeNull();
    });

    test('linkedList with one node', () => {
      const linkedList = new LinkedList<Number>();
      linkedList.append(1);
      expect(linkedList.find(1)).toBeDefined();
      linkedList.reverse();

      expect(linkedList.toArray()).toEqual([1]);
      expect(linkedList.find(1).value).toEqual(1);
      expect(linkedList.head.value).toEqual(1);
      expect(linkedList.tail.value).toEqual(1);
    });

    test('linkedList with more than one node', () => {
      const linkedList = new LinkedList<Number>();
      linkedList.append(1).append(2).append(3);
      expect(linkedList.toArray()).toEqual([1, 2, 3]);
      linkedList.reverse();

      expect(linkedList.tail.value).toEqual(1);
      expect(linkedList.head.value).toEqual(3);
      expect(linkedList.toArray()).toEqual([3, 2, 1]);
    });
  });
});
