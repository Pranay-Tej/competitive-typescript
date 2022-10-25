import Graph from '../Graph';

describe.concurrent('adjacency list', () => {
  test('dfs', () => {
    let graph = new Graph(
      [1, 2, 3, 4],
      [
        [1, 3],
        [3, 4],
        [4, 2]
      ]
    );
    expect(graph.adjacencyList).toEqual([[], [3], [], [4], [2]]);
  });

  test('adjacency list', () => {
    let graph = new Graph(
      [1, 2, 3, 4, 5, 6, 7, 8],
      [
        [1, 3],
        [1, 5],
        [5, 8],
        [1, 7],
        [3, 4],
        [3, 6],
        [4, 2]
      ]
    );
    expect(graph.adjacencyList).toEqual([
      [],
      [3, 5, 7],
      [],
      [4, 6],
      [2],
      [8],
      [],
      [],
      []
    ]);
  });
});
