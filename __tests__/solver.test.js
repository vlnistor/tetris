
const solver = require("../src/solver");

// Note we need to reverse the grid to match the way it is stored in the game
describe('cornerOf', () => {
  test('correct empty state for I', () => {
    const grid = [
      [0, 0, 0, 0],
      [0, 0, 0, 0],
      [0, 0, 0, 0]
    ].reverse();
    const result = solver.cornerOf('I', 0, grid);
    expect(result).toBe(0);
  });
  test('correct 2nd row when first row occupied', () => {
    const grid = [
      [0, 0, 0, 0],
      [0, 0, 0, 0],
      [1, 0, 0, 0]
    ].reverse();
    const result = solver.cornerOf('I', 0, grid);
    expect(result).toBe(1);
  });
  test('ignores columns outside of the pattern', () => {
    const grid = [
      [0, 0, 0, 0, 1],
      [0, 0, 0, 0, 1],
      [0, 0, 0, 0, 1]
    ].reverse();
    const result = solver.cornerOf('I', 0, grid);
    expect(result).toBe(0);
  });
  test("correct empty state for Z", () => {
    const grid = [
      [0, 0, 0, 0],
      [0, 0, 0, 0],
      [0, 0, 0, 0],
      [0, 0, 0, 0]
    ].reverse();
    const result = solver.cornerOf('Z', 0, grid);
    expect(result).toBe(0);
  })
  test("correct 3rd row when 2nd row occupied", () => {
    const grid = [
      [0, 0, 0, 0],
      [0, 0, 0, 0],
      [0, 0, 1, 1],
      [1, 1, 0, 0]
    ].reverse();
    const result = solver.cornerOf('Z', 0, grid);
    expect(result).toBe(2);
  })
  test("correctly ignores outside the pattern", () => {
    const grid = [
      [0, 0, 0, 0],
      [0, 0, 0, 0],
      [0, 0, 0, 1],
      [0, 0, 0, 1],
      [0, 0, 0, 1]
    ].reverse();
    const result = solver.cornerOf('Z', 0, grid);
    expect(result).toBe(0);
  })
  test("correct empty state for Q", () => {
    const grid = [
      [0, 0, 0, 0],
      [0, 0, 0, 0],
      [0, 0, 0, 0],
      [0, 0, 0, 0]
    ].reverse();
    const result = solver.cornerOf('Q', 0, grid);
    expect(result).toBe(0);
  })
  test("correct 2rd row when 1st row occupied and ignores cols outside pattern", () => {
    const grid = [
      [0, 0, 0, 0],
      [0, 0, 0, 0],
      [0, 0, 1, 1],
      [1, 1, 0, 0]
    ].reverse();
    const result = solver.cornerOf('Q', 0, grid);
    expect(result).toBe(1);
  })
  test("correct 4th row even though first column not occupied", () => {
    const grid = [
      [0, 0, 0, 0],
      [0, 0, 0, 0],
      [0, 1, 0, 1],
      [0, 1, 0, 1],
      [0, 1, 0, 1]
    ].reverse();
    const result = solver.cornerOf('Q', 0, grid);
    expect(result).toBe(3);
  })
});

describe("place in grid", () => {

  it("correctly places I in empty grid", () => {
    const grid = [
      [0, 0, 0, 0],
      [0, 0, 0, 0],
    ].reverse();
    solver.placeInGrid('I', 0,0, grid);
    expect(grid.reverse()).toEqual([
      [0, 0, 0, 0],
      [1, 1, 1, 1],
    ]);
  })
  it("correctly places Q in empty grid", () => {
    const grid = [
      [0, 0, 0, 0],
      [0, 0, 0, 0],
    ].reverse();
    solver.placeInGrid('Q', 0,0, grid);
    expect(grid.reverse()).toEqual([
      [1, 1, 0, 0],
      [1, 1, 0, 0],
    ]);
  })
  it("correctly places Z in empty grid", () => {
    const grid = [
      [0, 0, 0, 0],
      [0, 0, 0, 0],
    ].reverse();
    solver.placeInGrid('Z', 0,0, grid);
    expect(grid.reverse()).toEqual([
      [1, 1, 0, 0],
      [0, 1, 1, 0],
    ]);
  })
  it("correctly places S in empty grid", () => {
    const grid = [
      [0, 0, 0, 0],
      [0, 0, 0, 0],
    ].reverse();
    solver.placeInGrid('S', 0,0, grid);
    expect(grid.reverse()).toEqual([
      [0, 1, 1, 0],
      [1, 1, 0, 0],
    ]);
  })
  it("correctly places T in empty grid", () => {
    const grid = [
      [0, 0, 0, 0],
      [0, 0, 0, 0],
    ].reverse();
    solver.placeInGrid('T', 0,0, grid);
    expect(grid.reverse()).toEqual([
      [1, 1, 1, 0],
      [0, 1, 0, 0],
    ]);
  })
  it("correctly places L in empty grid", () => {
    const grid = [
      [0, 0, 0, 0],
      [0, 0, 0, 0],
      [0, 0, 0, 0],
    ].reverse();
    solver.placeInGrid('L', 0,0, grid);
    expect(grid.reverse()).toEqual([
      [1, 0, 0, 0],
      [1, 0, 0, 0],
      [1, 1, 0, 0],
    ]);
  })
  it("correctly places J in empty grid", () => {
    const grid = [
      [0, 0, 0, 0],
      [0, 0, 0, 0],
      [0, 0, 0, 0],
    ].reverse();
    solver.placeInGrid('J', 0,0, grid);
    expect(grid.reverse()).toEqual([
      [0, 1, 0, 0],
      [0, 1, 0, 0],
      [1, 1, 0, 0],
    ]);
  })
})