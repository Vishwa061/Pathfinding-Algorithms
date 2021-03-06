import Handler from "../general/Handler";
import { ArrayContains } from "../general/ArraysPlus";
import { TwoDArray } from "../general/ArraysPlus";

export default function AStar(gridData, startPoint, endPoint) {
  let nodeGrid = initNodeGrid(gridData);
  let startNode = new Node(startPoint.row, startPoint.col, true);
  let endNode = new Node(endPoint.row, endPoint.col, true);
  let open = [];
  let closed = [];
  let pathFound = false;
  let apart = startNode.distanceTo(endNode);

  startNode.gCost = 0;
  startNode.hCost = apart;
  endNode.gCost = apart;
  endNode.hCost = 0;

  const NW = [-1, -1],
    N = [-1, 0],
    NE = [-1, 1];
  const W = [0, -1],
    E = [0, 1];
  const SW = [1, -1],
    S = [1, 0],
    SE = [1, 1];
  const directions = [NW, N, NE, W, E, SW, S, SE];
  const exploredColor = "red";
  const shortestPathColor = "green";

  open.push(startNode);
  while (open.length > 0) {
    let current = getNodeWithLowestFCost(open);
    open = open.filter(node => !node.equals(current));
    closed.push(current);

    if (!current.equals(startNode) && !current.equals(endNode)) {
      Handler.setNodeColor(current.row, current.col, exploredColor, true);
    }

    if (current.equals(endNode)) {
      // console.log("PATH FOUND")
      displayShortestPath(current.parent);
      pathFound = true;
      break;
    }

    const neighbours = getNeighbours(current.row, current.col);
    for (let i = 0; i < neighbours.length; i++) {
      let neighbour = neighbours[i];
      if (neighbour.traversable === false || ArrayContains(closed, neighbour)) {
        continue;
      }

      const newGCost = current.gCost + current.distanceTo(neighbour);
      const isNotInOpen = !ArrayContains(open, neighbour);
      if (newGCost < neighbour.gCost || isNotInOpen) {
        neighbour.gCost = newGCost;
        neighbour.hCost = neighbour.distanceTo(endNode);
        neighbour.parent = current;
        if (isNotInOpen) {
          open.push(neighbour);
        }
      }
    }
  }
  Handler.displayPath();
  if (pathFound) {
    // console.log(Handler.path)
  } else {
    // console.log("PATH NOT FOUND")
  }

  ///////////////// ALGORITHM FUNCTIONS //////////////////

  function displayShortestPath(parentNode) {
    if (!parentNode.equals(startNode)) {
      displayShortestPath(parentNode.parent);
      Handler.setNodeColor(
        parentNode.row,
        parentNode.col,
        shortestPathColor,
        true
      );
    }
  }

  function getNeighbours(r, c) {
    let neighbours = [];

    directions.forEach(d => {
      const row = r + d[0];
      const col = c + d[1];
      if (isInBounds(row, col)) {
        neighbours.push(nodeGrid[row][col]);
      }
    });

    return neighbours;
  }

  function isInBounds(row, col) {
    if (row < 0 || row >= gridData.rows || col < 0 || col >= gridData.cols) {
      return false;
    }
    return true;
  }

  function getNodeWithLowestFCost(open) {
    let lowestCost = Number.MAX_VALUE;
    let nodeWithLowestFCost = open[0];

    Array.from(open).forEach(node => {
      if (node.getFCost() < lowestCost) {
        lowestCost = node.getFCost();
        nodeWithLowestFCost = node;
      }
    });

    return nodeWithLowestFCost;
  }
}

//// NODE ////

class Node {
  constructor(row, col, traversable) {
    this.row = row;
    this.col = col;
    this.traversable = traversable;
    this.gCost = Number.MAX_VALUE;
    this.hCost = Number.MAX_VALUE;
    this.parent = null;
  }

  getFCost() {
    return this.gCost + this.hCost;
  }

  equals(other) {
    return this.row === other.row && this.col === other.col;
  }

  distanceTo(other) {
    return Math.trunc(
      Math.hypot(
        Math.abs(this.row - other.row),
        Math.abs(this.col - other.col)
      ) * 10
    );
  }
}

function initNodeGrid(gridData) {
  let nodeGrid = TwoDArray(gridData.rows);
  for (let r = 0; r < gridData.rows; r++) {
    for (let c = 0; c < gridData.cols; c++) {
      nodeGrid[r][c] = new Node(r, c, true);
    }
  }

  Array.from(gridData.walls).forEach(wall => {
    nodeGrid[wall.row][wall.col] = new Node(wall.row, wall.col, false);
  });

  return nodeGrid;
}
