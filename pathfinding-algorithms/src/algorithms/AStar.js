import Node, { initNodeGrid } from "./Node"
import Handler from "../general/Handler"

export default function AStar(gridData, startPoint, endPoint) {
    let nodeGrid = initNodeGrid(gridData)
    let startNode = new Node(startPoint.row, startPoint.col, true)
    let endNode = new Node(endPoint.row, endPoint.col, true)
    let open = []
    let closed = []
    let pathFound = false
    let apart = startNode.distanceTo(endNode)

    startNode.gCost = 0
    startNode.hCost = apart
    endNode.gCost = apart
    endNode.hCost = 0

    const NW = [-1, -1], N = [-1, 0], NE = [-1, 1]
    const W = [0, -1], E = [0, 1]
    const SW = [1, -1], S = [1, 0], SE = [1, 1]
    const directions = [NW, N, NE, W, E, SW, S, SE]
    const exploredColor = "red"
    const startNodeColor = "yellow"
    const endNodeColor = "blue"
    const shortestPathColor = "green"

    open.push(startNode)
    while (open.length > 0) {
        let current = getNodeWithLowestFCost(open)
        open = open.filter(node => !node.equals(current))
        closed.push(current)

        if (current.equals(endNode)) {
            // console.log("PATH FOUND")
            displayShortestPath(current.parent)
            Handler.setNodeColor(startNode.row, startNode.col, startNodeColor)
            Handler.setNodeColor(endNode.row, endNode.col, endNodeColor)
            pathFound = true
            break
        }

        const neighbours = getNeighbours(current.row, current.col)
        for (let i = 0; i < neighbours.length; i++) {
            let neighbour = neighbours[i]
            if (neighbour.traversable === false || ArrayContains(closed, neighbour)) {
                continue
            }

            const newGCost = current.gCost + current.distanceTo(neighbour)
            const isNotInOpen = !ArrayContains(open, neighbour)
            if (newGCost < neighbour.gCost || isNotInOpen) {
                neighbour.gCost = newGCost
                neighbour.hCost = neighbour.distanceTo(endNode)
                neighbour.parent = current
                if (isNotInOpen) {
                    open.push(neighbour)
                    Handler.setNodeColor(neighbour.row, neighbour.col, exploredColor)
                }
            }
        }
    }
    if (pathFound === false) {
        // console.log("PATH NOT FOUND")
    }

    ///////////////// ALGORITHM FUNCTIONS //////////////////

    function displayShortestPath(parentNode) {
        if (parentNode !== null) {
            Handler.setNodeColor(parentNode.row, parentNode.col, shortestPathColor)
            displayShortestPath(parentNode.parent)
        }
    }

    function ArrayContains(array, element) {
        for (let i = 0; i < array.length; i++) {
            if (array[i].equals(element)) {
                return true
            }
        }
        return false
    }

    function getNeighbours(r, c) {
        let neighbours = []

        directions.forEach(d => {
            const row = r + d[0]
            const col = c + d[1]
            if (isInBounds(row, col)) {
                neighbours.push(nodeGrid[row][col])
            }
        })

        return neighbours
    }

    function isInBounds(row, col) {
        if (row < 0 || row >= gridData.rows || col < 0 || col >= gridData.cols) {
            return false
        }
        return true
    }

    function getNodeWithLowestFCost(open) {
        let lowestCost = Number.MAX_VALUE
        let nodeWithLowestFCost = open[0]

        Array.from(open).forEach(node => {
            if (node.getFCost() < lowestCost) {
                lowestCost = node.getFCost()
                nodeWithLowestFCost = node
            }
        })

        return nodeWithLowestFCost
    }
}