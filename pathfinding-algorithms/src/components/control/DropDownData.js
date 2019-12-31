import Handler from "../Handler"

const build = [
    {
        name: "Select Start",
        func: () => {
            console.log("Select Start")
            Handler.setClickType("select start")
        }
    },
    {
        name: "Select End",
        func: () => {
            console.log("Select End")
            Handler.setClickType("select end")
        }
    },
    {
        name: "Add Walls",
        func: () => {
            console.log("Add Walls")
            Handler.setClickType("add walls")
        }
    }
]

export { build }

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

export { solve }

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
    }
]

export { help }