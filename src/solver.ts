
type Pattern = "Q" | "Z" | "S" | "T" | "I" | "L" | "J";

const GRID_HEIGHT = 100;
const GRID_WIDTH = 10;


const solve: (line: string) => number = (line: string) => {
    
    const grid: number[][] = [];
    for(let i = 0; i < GRID_HEIGHT; i++) {
        let row: number[] = [];
        for(let j = 0; j < GRID_WIDTH; j++) {
            row.push(0);
        }
        grid.push(row);
    }

    line.split(',').forEach((instruction: string) => {
        const pattern: Pattern = instruction[0] as Pattern;
        const index = parseInt(instruction[1]);
        
        const putInRow = cornerOf(pattern, index, grid);
        

    });
    


    return -1;
}

export const cornerOf: (pattern: Pattern, index: number, grid: number[][]) => number = (pattern: Pattern, index: number, grid: number[][]) => {

    // biggest row being used
    let maxRowUsed = -1;
    
    switch(pattern) {
        // bottom is 2
        case "Q":
        case "L":
        case "J":
            for(let i = 0; i < grid.length; i++) {
                for(let j = index; j < index + 2; j++) {
                    if(grid[i][j] === 1) {
                        maxRowUsed = i;
                    }
                }
            }
            break;
        // bottom is 3
        case "Z":
        case "S":
        case "T":
            for(let i = 0; i < grid.length; i++) {
                for(let j = index; j < index + 3; j++) {
                    if(grid[i][j] === 1) {
                        maxRowUsed = i;
                    }
                }
            }
            break;
        // bottom is 4
        case "I":
            for(let i = 0; i < grid.length; i++) {
                for(let j = index; j < index + 4; j++) {
                    if(grid[i][j] === 1) {
                        maxRowUsed = i;
                    }
                }
            }
            break;
    }

    // We have the max row used

    return maxRowUsed + 1;
}

export const placeInGrid: (pattern: Pattern, row: number, col:number,  grid: number[][]) => void = (pattern: Pattern, row: number, col:number, grid: number[][]) => {
    // Place the pattern in the grid
    switch(pattern) {
        case "Q":
            grid[row][col] = 1;
            grid[row][col + 1] = 1;
            grid[row + 1][col] = 1;
            grid[row + 1][col + 1] = 1;
            break;
        case "Z":
            grid[row+1][col] = 1
            grid[row+1][col+1] = 1
            grid[row][col+1] = 1
            grid[row][col+2] = 1
            break;
        case "S":
            grid[row][col] = 1;
            grid[row][col + 1] = 1;
            grid[row + 1][col + 1] = 1;
            grid[row + 1][col + 2] = 1;
            break;
        case "T":
            grid[row+1][col] = 1
            grid[row+1][col+1] = 1
            grid[row+1][col+2] = 1
            grid[row][col+1] = 1
            break;
        case "I":
            grid[row][col] = 1;
            grid[row][col + 1] = 1;
            grid[row][col + 2] = 1;
            grid[row][col + 3] = 1;
            break;
        case "L":
            grid[row][col + 1] = 1;
            grid[row][col] = 1;
            grid[row+1][col] = 1
            grid[row+2][col] = 1
            break;
        case "J":
            grid[row][col] = 1;
            grid[row][col + 1] = 1;
            grid[row+1][col+1] = 1
            grid[row+2][col+1] = 1
            break;

    }
}




export default solve;