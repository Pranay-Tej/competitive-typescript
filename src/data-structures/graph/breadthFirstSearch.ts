import Graph from './Graph';

export default function breadthFirstSearch(graph: Graph, source: number) {
  let adjacencyList = graph.adjacencyList;
  let queue = [source];
  let visited = new Set<number>();
  let bfsList = [];

  while (queue.length > 0) {
    let currentNode = queue.shift();

    visited.add(currentNode);
    bfsList.push(currentNode);

    for (let i = 0; i < adjacencyList[currentNode].length; i++) {
      if (visited.has(adjacencyList[currentNode][i])) {
        continue;
      }
      queue.push(adjacencyList[currentNode][i]);
    }
  }

  return bfsList;
}
