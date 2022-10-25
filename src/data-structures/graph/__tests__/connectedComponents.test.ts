import { connectedComponentsBFS } from '../connectedComponents';
import Graph from '../Graph';

describe.concurrent('connected', () => {
  test('bfs', () => {
    let graph = new Graph(
      [1, 2, 3, 4, 5, 6, 7, 8],
      [
        [1, 3],
        [1, 5],
        [7, 8],
        [4, 6],
        [2, 4]
      ]
    );

    expect(connectedComponentsBFS(graph)).toEqual([
      [1, 3, 5],
      [2, 4, 6],
      [7, 8]
    ]);
  });
});
