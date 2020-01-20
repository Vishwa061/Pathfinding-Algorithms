import { TwoDArray } from "./ArraysPlus";
import AStar from "../algorithms/AStar";
import Dijkstras from "../algorithms/Dijkstras";

export default class Handler {
  static clickType = "none";
  static startNode = null;
  static endNode = null;
  static walls = [];
  static grid = TwoDArray(13);
  static path = [];
  static wasAlgorithmExecuted = false;
  static mouseIsDown = false;
  static popup = null;

  static executeDijkstras() {
    Dijkstras(
      { walls: this.getWalls(), rows: 13, cols: 36 },
      { row: this.startNode.state.row, col: this.startNode.state.col },
      { row: this.endNode.state.row, col: this.endNode.state.col }
    );
  }

  static executeAStar() {
    AStar(
      { walls: this.getWalls(), rows: 13, cols: 36 },
      { row: this.startNode.state.row, col: this.startNode.state.col },
      { row: this.endNode.state.row, col: this.endNode.state.col }
    );
  }

  static getWalls() {
    return this.walls.map(wall => ({
      row: wall.state.row,
      col: wall.state.col
    }));
  }

  static displayPath() {
    for (let i = 0; i < this.path.length; i++) {
      this.grid[this.path[i].row][this.path[i].col].setColor(
        this.path[i].color,
        true
      );
    }
    this.clickType = "none";
  }

  static setNodeColor(row, col, color, isAnimated) {
    if (isAnimated) {
      this.path.push({ row: row, col: col, color: color });
    } else {
      this.grid[row][col].setColor(color);
    }
  }

  static addNodeToGrid(node) {
    this.grid[node.state.row][node.state.col] = node;
  }

  static clearGrid() {
    this.grid.forEach(nodeArr => {
      nodeArr.forEach(node => {
        node.setColor("gray");
      });
    });

    this.endNode = null;
    this.startNode = null;
    this.walls = [];
    this.path = [];
  }

  static clearPath() {
    for (let i = 0; i < this.path.length; i++) {
      this.grid[this.path[i].row][this.path[i].col].setColor("gray");
    }
    this.path = [];
  }

  static openFullScreen(elem) {
    if (elem.requestFullscreen) {
      elem.requestFullscreen();
    } else if (elem.mozRequestFullScreen) {
      /* Firefox */
      elem.mozRequestFullScreen();
    } else if (elem.webkitRequestFullscreen) {
      /* Chrome, Safari and Opera */
      elem.webkitRequestFullscreen();
    } else if (elem.msRequestFullscreen) {
      /* IE/Edge */
      elem.msRequestFullscreen();
    }
  }

  static isValid() {
    if (this.startNode === null && this.endNode === null) {
      this.displayErrorMessage(
        "Invalid Grid",
        "Please select a start and end point"
      );
      return false;
    } else if (this.startNode === null) {
      this.displayErrorMessage("Invalid Grid", "Please select a start point");
      return false;
    } else if (this.endNode === null) {
      this.displayErrorMessage("Invalid Grid", "Please select a end point");
      return false;
    } else if (this.wasAlgorithmExecuted) {
      this.clearPath();
      Handler.wasAlgorithmExecuted = false;
    }
    return true;
  }

  static displayErrorMessage(header, message) {
    this.popup.state.header = header;
    this.popup.state.message = message;
    this.popup.show();
  }

  static setClickType(type) {
    this.clickType = type;
  }

  static setWall(node) {
    if (this.areNodesEqual(node, this.startNode)) {
      this.startNode = null;
      node.setColor("black");
      this.walls.push(node);
    } else if (this.areNodesEqual(node, this.endNode)) {
      this.endNode = null;
      node.setColor("black");
      this.walls.push(node);
    } else if (node.state.style.backgroundColor === "black") {
      node.setColor("gray");
      this.walls = this.walls.filter(wall => !this.areNodesEqual(wall, node));
      // console.log("row:" + Number(node.state.row) + ", col:" + Number(node.state.col))
    } else {
      node.setColor("black");
      this.walls.push(node);
    }
    // console.log(this.walls)
  }

  static setStart(node) {
    if (this.startNode != null) {
      this.startNode.setColor("gray");
    }
    if (this.areNodesEqual(node, this.endNode)) {
      this.endNode = null;
    }
    this.startNode = node;
    node.setColor("orange");
    this.removeNodeFromWall(node);
  }

  static setEnd(node) {
    if (this.endNode != null) {
      this.endNode.setColor("gray");
    }
    if (this.areNodesEqual(node, this.startNode)) {
      this.startNode = null;
    }
    this.endNode = node;
    node.setColor("blue");
    this.removeNodeFromWall(node);
  }

  static removeNodeFromWall(node) {
    this.walls = this.walls.filter(wall => {
      return !this.areNodesEqual(wall, node);
    });
  }

  static areNodesEqual(nodeA, nodeB) {
    if (nodeA === nodeB && nodeA != null) {
      return true;
    }
    return false;
  }
}
