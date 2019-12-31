// import {nodeGrid} from "./grid/Grid"
// import Node from "./grid/Node"

class Handler {
    static clickType = "none"
    static startNode = null
    static endNode = null

    static setClickType(type) { 
        Handler.clickType = type 
    }

    static setWall(node) {
        if(Handler.areNodesEqual(node, Handler.startNode)) {
            Handler.startNode = null
        } else if(Handler.areNodesEqual(node, Handler.endNode)){
            Handler.endNode = null
        }
    }

    static setStart(node) {
        if (Handler.startNode != null) {
            Handler.startNode.grayOut()
        }
        Handler.startNode = node
        if (Handler.areNodesEqual(Handler.startNode, Handler.endNode)){
            Handler.endNode = null
        }
    }

    static setEnd(node) {
        if (Handler.endNode != null) {
            Handler.endNode.grayOut()
        }
        Handler.endNode = node
        if (Handler.areNodesEqual(Handler.startNode, Handler.endNode)){
            Handler.startNode = null
        }
    }

    static areNodesEqual(nodeA, nodeB) {
        if (nodeA === nodeB && nodeA != null){
            return true
        }
        return false
    }
}

export default Handler