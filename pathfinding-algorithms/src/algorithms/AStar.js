import TwoDArray from "../general/TwoDArray"

class Node {
    constructor(row, col, traversable) {
        this.row = row
        this.col = col
        this.traversable = traversable
        this.gCost = 0
        this.hCost = 0
    }

    getFCost() { return this.gCost + this.hCost }
}

export default function AStar(gridData, startPoint, endPoint) {
    let nodeGrid = initNodeGrid(gridData)
    let startNode = new Node(startPoint.row, startPoint.col)
    let endNode = new Node(endPoint.row, endPoint.col)
    
    function initNodeGrid(gridData) {
        let nodeGrid = TwoDArray(gridData.rows)
        for (let r = 0; r < gridData.rows; r++){
            for (let c = 0; c < gridData.cols; c++){
                nodeGrid[r][c] = new Node(r, c, true)
            }
        }
    }
}