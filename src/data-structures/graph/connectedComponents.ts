import breadthFirstSearch from './breadthFirstSearch';
import Graph from './Graph';

export function connectedComponentsBFS(graph: Graph): number[][] {
  let connectedComponentsBFS: number[][] = [];
  let visited = new Set<number>();
  let adjacencyList = graph.adjacencyList;

  for (let i = 1; i < adjacencyList.length; i++) {
    if (visited.has(i)) {
      continue;
    }

    // visited.add(i)
    let bfsList = breadthFirstSearch(graph, i);
    if (bfsList.length > 0) {
      bfsList.forEach(node => visited.add(node));
      connectedComponentsBFS.push(bfsList);
    }
  }

  return connectedComponentsBFS;
}
