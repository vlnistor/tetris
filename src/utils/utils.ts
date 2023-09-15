export const generateGrid = (rows: number, cols: number) => {
    const grid: number[][] = [];
    for (let i = 0; i < rows; i++) {
        grid.push([]);
        for (let j = 0; j < cols; j++) {
            grid[i].push(0);
        }
    }
    return grid;
}