import { nodeGrid } from "./grid/Grid"

export default class Handler {
    static clickType = "none"
    static startNode = null
    static endNode = null

    static setNodeColor(row, col, color) {
        nodeGrid[row][col].setColor(color)
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
        } else if (this.areNodesEqual(node, this.endNode)) {
            this.endNode = null
        }
    }

    static setStart(node) {
        if (this.startNode != null) {
            this.startNode.setColor("gray")
        }
        this.startNode = node
        if (this.areNodesEqual(this.startNode, this.endNode)) {
            this.endNode = null
        }
    }

    static setEnd(node) {
        if (this.endNode != null) {
            this.endNode.setColor("gray")
        }
        this.endNode = node
        if (this.areNodesEqual(this.startNode, this.endNode)) {
            this.startNode = null
        }
    }

    static areNodesEqual(nodeA, nodeB) {
        if (nodeA === nodeB && nodeA != null) {
            return true
        }
        return false
    }
}