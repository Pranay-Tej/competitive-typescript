import Graph from './Graph';

export default function depthFirstSearch(
  graph: Graph,
  source: number
): number[] {
  let adjacencyList = graph.adjacencyList;
  let visited = new Set<number>();
  let dfsPath: number[] = [];

  depthFirstSearchImpl(adjacencyList, source, visited, dfsPath);

  return dfsPath;
}

function depthFirstSearchImpl(
  adjacencyList: number[][],
  source: number,
  visited: Set<number>,
  dfsPath: number[]
) {
  if (visited.has(source)) {
    return;
  }

  dfsPath.push(source);
  visited.add(source);

  for (let i = 0; i < adjacencyList[source].length; i++) {
    if (adjacencyList[source][i] === source) {
      continue;
    }
    depthFirstSearchImpl(
      adjacencyList,
      adjacencyList[source][i],
      visited,
      dfsPath
    );
  }
}
