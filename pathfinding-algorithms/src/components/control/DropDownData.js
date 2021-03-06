import Handler from "../../general/Handler";

const build = [
  {
    name: "Select Start",
    func: () => {
      console.log("Selecting Start");
      Handler.clearPath();
      Handler.setClickType("select start");
    }
  },
  {
    name: "Select End",
    func: () => {
      console.log("Selecting End");
      Handler.clearPath();
      Handler.setClickType("select end");
    }
  },
  {
    name: "Select Walls",
    func: () => {
      console.log("Selecting Walls");
      Handler.clearPath();
      Handler.setClickType("select walls");
    }
  },
  {
    name: "Clear Grid",
    func: () => {
      console.log("Clearing grid");
      Handler.clearGrid();
    }
  },
  {
    name: "Clear Path",
    func: () => {
      console.log("Clearing path");
      Handler.clearPath();
    }
  }
];

const solve = [
  {
    name: "A* Algorithm",
    func: () => {
      if (Handler.isValid()) {
        console.log("Executing A*");
        Handler.executeAStar();
        Handler.wasAlgorithmExecuted = true;
      }
    }
  },
  {
    name: "Dijkstra's Algorithm",
    func: () => {
      if (Handler.isValid()) {
        console.log("Executing Dijkstra's");
        Handler.executeDijkstras();
        Handler.wasAlgorithmExecuted = true;
      }
    }
  }
];

const help = [
  {
    name: "Settings",
    func: () => {
      console.log("Changing Settings");
    }
  },
  {
    name: "Full Screen",
    func: () => {
      console.log("Full Screen Requested");
      Handler.openFullScreen(document.documentElement);
    }
  },
  {
    name: "About",
    func: () => {
      console.log("About");
      Handler.displayErrorMessage(
        "About",
        "This app was created by Vishwa Perera"
      );
    }
  }
];

export { build };
export { solve };
export { help };
