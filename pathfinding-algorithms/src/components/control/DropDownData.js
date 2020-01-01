import Handler from "../Handler"

const build = [
    {
        name: "Select Start",
        func: () => {
            console.log("Selecting Start")
            Handler.setClickType("select start")
        }
    },
    {
        name: "Select End",
        func: () => {
            console.log("Selecting End")
            Handler.setClickType("select end")
        }
    },
    {
        name: "Add Walls",
        func: () => {
            console.log("Adding Walls")
            Handler.setClickType("add walls")
        }
    },
    {
        name: "Clear Grid",
        func: () => {
            console.log("Clearing grid")
            Handler.clearGrid()
        }
    }
]

const solve = [
    {
        name: "A* Algorithm",
        func: () => {
            if (Handler.isValid()) {
                console.log("Executing A*")
            }
        }
    },
    {
        name: "Dijkstra's Algorithm",
        func: () => {
            if (Handler.isValid()) {
                console.log("Executing Dijkstra's")
            }
        }
    }
]

const help = [
    {
        name: "Settings",
        func: () => {
            console.log("Changing Settings")
        }
    },
    {
        name: "Full Screen",
        func: () => {
            console.log("Full Screen Requested")
            Handler.openFullScreen(document.documentElement)
        }
    },
    {
        name: "About",
        func: () => {
            console.log("About")
        }
    }
]

export { build }
export { solve }
export { help }