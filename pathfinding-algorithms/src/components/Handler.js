import TwoDArray from "./TwoDArray"

export default class Handler {
    static clickType = "none"
    static startNode = null
    static endNode = null
    static walls = []
    static grid = TwoDArray(13)

    static setNodeColor(row, col, color) {
        this.grid[row][col].setColor(color)
    }

    static addNodeToGrid(node) {
        this.grid[node.state.row][node.state.col] = node
    }

    static clearGrid() {
        if (this.startNode !== null){
            this.startNode.setColor("gray")
            this.startNode = null
        }
        if (this.endNode !== null){
            this.endNode.setColor("gray")
            this.endNode = null
        }
        this.walls.forEach(wall => {
            wall.setColor("gray")
        })
        this.walls = []
    }

    static openFullScreen(elem) {
        if (elem.requestFullscreen) {
            elem.requestFullscreen();
        } else if (elem.mozRequestFullScreen) { /* Firefox */
            elem.mozRequestFullScreen();
        } else if (elem.webkitRequestFullscreen) { /* Chrome, Safari and Opera */
            elem.webkitRequestFullscreen();
        } else if (elem.msRequestFullscreen) { /* IE/Edge */
            elem.msRequestFullscreen();
        }
    }

    static isValid() {
        if (this.startNode === null) {
            alert("Select a start point") /////////////////REMOVE/////////////////
            return false
        } else if (this.endNode === null) {
            alert("Select a end point") /////////////////REMOVE/////////////////
            return false
        }
        return true
    }

    static setClickType(type) {
        this.clickType = type
    }

    static setWall(node) {
        if (this.areNodesEqual(node, this.startNode)) {
            this.startNode = null
            node.setColor("black")
            this.walls.push(node)
        } else if (this.areNodesEqual(node, this.endNode)) {
            this.endNode = null
            node.setColor("black")
            this.walls.push(node)
        } else if (node.state.color === "black") {
            node.setColor("gray")
            this.walls = this.walls.filter(e => e !== node)
            // console.log("row:" + Number(node.state.row) + ", col:" + Number(node.state.col))
        } else {
            node.setColor("black")
            this.walls.push(node)
        }
        // console.log(this.walls)
    }

    static setStart(node) {
        if (this.startNode != null) {
            this.startNode.setColor("gray")
        }
        if (this.areNodesEqual(node, this.endNode)) {
            this.endNode = null
        }
        this.startNode = node
        node.setColor("orange")
    }

    static setEnd(node) {
        if (this.endNode != null) {
            this.endNode.setColor("gray")
        }
        if (this.areNodesEqual(node, this.startNode)) {
            this.startNode = null
        }
        this.endNode = node
        node.setColor("blue")
    }

    static areNodesEqual(nodeA, nodeB) {
        if (nodeA === nodeB && nodeA != null) {
            return true
        }
        return false
    }
}