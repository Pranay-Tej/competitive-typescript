import breadthFirstSearch from '../breadthFirstSearch';
import Graph from '../Graph';

describe.concurrent('breadth first search', () => {
  test('bfs', () => {
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

    expect(breadthFirstSearch(graph, 1)).toEqual([1, 3, 5, 7, 4, 6, 8, 2]);
  });
});
