import depthFirstSearch from '../depthFirstSearch';
import Graph from '../Graph';

describe('depth first search', () => {
  test('dfs', () => {
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
    expect(depthFirstSearch(graph, 1)).toEqual([1, 3, 4, 2, 6, 5, 8, 7]);
  });
});
