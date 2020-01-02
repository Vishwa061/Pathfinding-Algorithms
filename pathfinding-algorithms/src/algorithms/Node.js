import TwoDArray from "../general/TwoDArray"

export default class Node {
    constructor(row, col, traversable) {
        this.row = row
        this.col = col
        this.traversable = traversable
        this.gCost = Number.MAX_VALUE
        this.hCost = Number.MAX_VALUE
        this.parent = null
    }

    getFCost() { return this.gCost + this.hCost }

    equals(other) { return this.row === other.row && this.col === other.col }

    distanceTo(other) {
        return Math.trunc(
            Math.hypot(
                Math.abs(this.row - other.row),
                Math.abs(this.col - other.col)
            )
            * 10
        )
    }
}

function initNodeGrid(gridData) {
    let nodeGrid = TwoDArray(gridData.rows)
    for (let r = 0; r < gridData.rows; r++) {
        for (let c = 0; c < gridData.cols; c++) {
            nodeGrid[r][c] = new Node(r, c, true)
        }
    }

    Array.from(gridData.walls).forEach(wall => {
        nodeGrid[wall.row][wall.col] = new Node(wall.row, wall.col, false)
    })

    return nodeGrid
}

export { initNodeGrid }