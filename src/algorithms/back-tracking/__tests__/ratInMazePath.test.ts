import ratInMazePath from '../ratInMazePath';

describe.concurrent('rat in maze', () => {
  test('single cell', () => {
    expect(ratInMazePath([[0]])).toEqual([[2]]);
  });
  test('path', () => {
    expect(ratInMazePath([[0, 0]])).toEqual([[2, 2]]);
  });
  test('path', () => {
    expect(
      ratInMazePath([
        [0, 1],
        [0, 0]
      ])
    ).toEqual([
      [2, 1],
      [2, 2]
    ]);
  });
  test('path', () => {
    expect(
      ratInMazePath([
        [0, 0, 1],
        [0, 0, 1],
        [1, 0, 0]
      ])
    ).toEqual([
      [2, 2, 1],
      [0, 2, 1],
      [1, 2, 2]
    ]);
  });
  test('custom start', () => {
    expect(
      ratInMazePath(
        [
          [0, 0, 1],
          [0, 0, 1],
          [1, 0, 0]
        ],
        1,
        0
      )
    ).toEqual([
      [0, 0, 1],
      [2, 2, 1],
      [1, 2, 2]
    ]);
  });
  test('custom start, custom end', () => {
    expect(
      ratInMazePath(
        [
          [0, 0, 1],
          [0, 0, 1],
          [1, 0, 0]
        ],
        1,
        0,
        2,
        1
      )
    ).toEqual([
      [0, 0, 1],
      [2, 2, 1],
      [1, 2, 0]
    ]);
  });
});
