import TetrisSolver from "./src/solver"
import { generateGrid } from "./src/utils/utils"


const run = async () => {
    for await (const line of console) {
        const ts = new TetrisSolver(generateGrid(100,10))
        console.log(ts.solve(line))
    }
}

run()