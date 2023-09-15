
type Pattern = "Q" | "Z" | "S" | "T" | "I" | "L" | "J";

const GRID_HEIGHT = 100;
const GRID_WIDTH = 10;


export class TetrisSolver {

    private grid: number[][];
    private maxRowUsed: number = 0;

    constructor(grid: number[][]) {
        this.grid = grid;
        // Find the max row
        for(let i = 0; i < this.grid.length; i++) {
            if(this.grid[i].some((value: number) => value === 1)) {
                this.maxRowUsed = i;
            }
        }
    }

    public solve(line: string): number {
        let max_row = -1;

        line.split(',').forEach((instruction: string) => {
            const pattern: Pattern = instruction[0] as Pattern;
            const index = parseInt(instruction[1]);
            
            const putInRow = this.cornerOf(pattern, index);
            this.place(pattern, putInRow, index);
        });
        
        // Find the max row
        for(let i = 0; i < this.grid.length; i++) {
            for(let j = 0; j < this.grid[i].length; j++) {
                if(this.grid[i][j] === 1) {
                    max_row = i;
                }
            }
        }
        return max_row + 1;
    }

        /**
     * 
     * @returns max row currently used
     */
    public place: (pattern: Pattern, row: number, col:number) => void = (pattern: Pattern, row: number, col:number, verbose: boolean = false) => {
        // Place the pattern in the grid
        switch(pattern) {
            case "Q":
                this.grid[row][col] = 1;
                this.grid[row][col + 1] = 1;
                this.grid[row + 1][col] = 1;
                this.grid[row + 1][col + 1] = 1;
                this.maxRowUsed = Math.max(this.maxRowUsed, row + 1)
                break;
            case "Z":
                this.grid[row+1][col] = 1
                this.grid[row+1][col+1] = 1
                this.grid[row][col+1] = 1
                this.grid[row][col+2] = 1
                this.maxRowUsed = Math.max(this.maxRowUsed, row + 1)
                break;
            case "S":
                this.grid[row][col] = 1;
                this.grid[row][col + 1] = 1;
                this.grid[row + 1][col + 1] = 1;
                this.grid[row + 1][col + 2] = 1;
                this.maxRowUsed = Math.max(this.maxRowUsed, row + 1)
                break;
            case "T":
                this.grid[row+1][col] = 1
                this.grid[row+1][col+1] = 1
                this.grid[row+1][col+2] = 1
                this.grid[row][col+1] = 1
                this.maxRowUsed = Math.max(this.maxRowUsed, row + 1)
                break;
            case "I":
                this.grid[row][col] = 1;
                this.grid[row][col + 1] = 1;
                this.grid[row][col + 2] = 1;
                this.grid[row][col + 3] = 1;
                this.maxRowUsed = Math.max(this.maxRowUsed, row)
                break;
            case "L":
                this.grid[row][col + 1] = 1;
                this.grid[row][col] = 1;
                this.grid[row+1][col] = 1
                this.grid[row+2][col] = 1
                this.maxRowUsed = Math.max(this.maxRowUsed, row + 2)
                break;
            case "J":
                if(verbose) console.log(`Placing J at ${row}, ${col}`)
                this.grid[row][col] = 1;
                this.grid[row][col + 1] = 1;
                this.grid[row+1][col+1] = 1
                this.grid[row+2][col+1] = 1
                this.maxRowUsed = Math.max(this.maxRowUsed, row + 2)
                break;
        }

        let i = 0;
        while(i <= this.maxRowUsed){
            // Check if current row is full
            if(this.grid[i].every((value: number) => value === 1)) {
                if(verbose) console.log(`Row ${i} is full`);
                // Clear and move down
                for(let j = i; j <= this.maxRowUsed; j++){
                    for(let k = 0; k < this.grid[j].length; k++){
                        this.grid[j][k] = j + 1 == this.grid.length ? 0 : this.grid[j+1][k];
                    }
                    // this.grid[j] = j+1 == this.grid.length ? new Array(this.grid[0].length).fill(0) :  this.grid[j+1];
                }
                this.maxRowUsed = Math.max(this.maxRowUsed - 1, 0);
            }else{
                i++;
            }
        }

    }

    public getGrid(): number[][] {
        return this.grid;
    }

    public getMaxRowUsed(): number {
        return this.maxRowUsed;
    }

    private cornerOf(pattern: Pattern, index: number): number {
        let maxRowUsed = 0;
        switch(pattern) {
            // bottom is 2
            case "Q":
            case "L":
            case "J":
                for(let i = 0; i < this.grid.length; i++) {
                    for(let j = index; j < index + 2; j++) {
                        if(this.grid[i][j] === 1) {
                            maxRowUsed = i;
                        }
                    }
                }
                break;
            // bottom is 3
            case "Z":
            case "S":
            case "T":
                for(let i = 0; i < this.grid.length; i++) {
                    for(let j = index; j < index + 3; j++) {
                        if(this.grid[i][j] === 1) {
                            maxRowUsed = i;
                        }
                    }
                }
                break;
            // bottom is 4
            case "I":
                for(let i = 0; i < this.grid.length; i++) {
                    for(let j = index; j < index + 4; j++) {
                        if(this.grid[i][j] === 1) {
                            maxRowUsed = i;
                        }
                    }
                }
                break;
        }
        // We have the max row used

        return this.canPlace(pattern, maxRowUsed, index) ? maxRowUsed : maxRowUsed + 1;
    }

    private canPlace(pattern: Pattern, row: number, col:number): boolean {
        switch(pattern) {
            case "Q":
                return this.grid[row][col] === 0 && this.grid[row][col + 1] === 0 && this.grid[row + 1][col] === 0 && this.grid[row + 1][col + 1] === 0;
            case "Z":
                return this.grid[row+1][col] === 0 && this.grid[row+1][col+1] === 0 && this.grid[row][col+1] === 0 && this.grid[row][col+2] === 0;
            case "S":
                return this.grid[row][col] === 0 && this.grid[row][col + 1] === 0 && this.grid[row + 1][col + 1] === 0 && this.grid[row + 1][col + 2] === 0;
            case "T":
                return this.grid[row+1][col] === 0 && this.grid[row+1][col+1] === 0 && this.grid[row+1][col+2] === 0 && this.grid[row][col+1] === 0;
            case "I":
                return this.grid[row][col] === 0 && this.grid[row][col + 1] === 0 && this.grid[row][col + 2] === 0 && this.grid[row][col + 3] === 0;
            case "L":
                return this.grid[row][col + 1] === 0 && this.grid[row][col] === 0 && this.grid[row+1][col] === 0 && this.grid[row+2][col] === 0;
            case "J":
                return this.grid[row][col] === 0 && this.grid[row][col + 1] === 0 && this.grid[row+1][col+1] === 0 && this.grid[row+2][col+1] === 0;
        }
    }
}




export default TetrisSolver;