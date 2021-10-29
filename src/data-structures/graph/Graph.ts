export default class Graph {
  private _adjacencyList: number[][] | null = null;

  get adjacencyList() {
    return this._adjacencyList;
  }

  constructor(nodes: number[], edges: number[][]) {
    this._adjacencyList = Array(nodes.length + 1).fill([]);
    edges.forEach((edge: number[]) => {
      this._adjacencyList[edge[0]] = [...this._adjacencyList[edge[0]], edge[1]];
    });
  }
}
