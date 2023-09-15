import { expect, test } from "bun:test";
import TetrisSolver from "../src/solver";
import { generateGrid } from "../src/utils/utils";



test("correctly places I in empty grid", () => {

    const ts = new TetrisSolver([
        [0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0],
    ].reverse());

    ts.place('I', 0, 0);

    expect(ts.getGrid().reverse()).toEqual([
        [0, 0, 0, 0, 0],
        [1, 1, 1, 1, 0],
    ]);
})
test("correctly places Q in empty grid", () => {
    const ts = new TetrisSolver([
        [0, 0, 0, 0],
        [0, 0, 0, 0],
    ].reverse());

    ts.place('Q', 0, 0);

    expect(ts.getGrid().reverse()).toEqual([
        [1, 1, 0, 0],
        [1, 1, 0, 0],
    ]);
})
test("correctly places Z in empty grid", () => {
    const ts = new TetrisSolver([
        [0, 0, 0, 0],
        [0, 0, 0, 0],
    ].reverse());

    ts.place('Z', 0, 0);

    expect(ts.getGrid().reverse()).toEqual([
        [1, 1, 0, 0],
        [0, 1, 1, 0],
    ]);
})
test("correctly places S in empty grid", () => {
    const ts = new TetrisSolver([
        [0, 0, 0, 0],
        [0, 0, 0, 0],
    ].reverse());

    ts.place('S', 0, 0);

    expect(ts.getGrid().reverse()).toEqual([
        [0, 1, 1, 0],
        [1, 1, 0, 0],
    ]);
})
test("correctly places T in empty grid", () => {
    const ts = new TetrisSolver([
        [0, 0, 0, 0],
        [0, 0, 0, 0],
    ].reverse());

    ts.place('T', 0, 0);

    expect(ts.getGrid().reverse()).toEqual([
        [1, 1, 1, 0],
        [0, 1, 0, 0],
    ]);
})
test("correctly places L in empty grid", () => {
    const ts = new TetrisSolver([
        [0, 0, 0, 0],
        [0, 0, 0, 0],
        [0, 0, 0, 0],
    ].reverse());

    ts.place('L', 0, 0);

    expect(ts.getGrid().reverse()).toEqual([
        [1, 0, 0, 0],
        [1, 0, 0, 0],
        [1, 1, 0, 0],
    ]);
})
test("correctly places J in empty grid", () => {
    const ts = new TetrisSolver([
        [0, 0, 0, 0],
        [0, 0, 0, 0],
        [0, 0, 0, 0]
    ].reverse());

    ts.place('J', 0, 0);

    expect(ts.getGrid().reverse()).toEqual([
        [0, 1, 0, 0],
        [0, 1, 0, 0],
        [1, 1, 0, 0],
    ]);
})

test("correctly clears a row", () => {
    const ts = new TetrisSolver([
        [0, 0, 0, 0, 0, 0, 0, 0],
        [1, 1, 1, 1, 0, 0, 0, 0],
    ].reverse());

    ts.place('I', 0, 4)

    expect(ts.getGrid().reverse()).toEqual([
        [0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0],
    ]);
})

test("correctly clears 2 rows", () => {
    const ts = new TetrisSolver([
        [0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0],
    ].reverse());

    ts.place('Q', 0, 0)
    ts.place('Q', 0, 2)
    ts.place('Q', 0, 4)
    ts.place('Q', 0, 6)

    expect(ts.getGrid().reverse()).toEqual([
        [0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0],
    ]);
})

test("pieces are correctly rigid", () => {
    const ts = new TetrisSolver([
        [0, 0, 0, 0, 0],
        [1, 1, 0, 0, 0],
    ].reverse());

    ts.place('I', 1, 0)

    expect(ts.getGrid().reverse()).toEqual([
        [1, 1, 1, 1, 0],
        [1, 1, 0, 0, 0],
    ]);
})



test("Q0,Q2,Q4,Q6", () => {
    const ts = new TetrisSolver(generateGrid(10, 10))
    const ans = ts.solve("Q0,Q2,Q4,Q6")
    expect(ts.getGrid().slice(0, 2).reverse()).toEqual([
        [1, 1, 1, 1, 1, 1, 1, 1, 0, 0],
        [1, 1, 1, 1, 1, 1, 1, 1, 0, 0],
    ])
    expect(ans).toEqual(2)
})
test("Q0,Q2,Q4,Q6,Q8", () => {
    const ts = new TetrisSolver(generateGrid(10, 10))
    const ans = ts.solve("Q0,Q2,Q4,Q6,Q8")
    expect(ts.getGrid().slice(0, 2).reverse()).toEqual([
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    ])
    expect(ans).toEqual(0)
})
test("I0,I4,Q8", () => {
    const ts = new TetrisSolver(generateGrid(10, 10))
    const ans = ts.solve("I0,I4,Q8")
    expect(ts.getGrid().slice(0, 2).reverse()).toEqual([
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 1, 1],
    ])
    expect(ans).toEqual(1)
})
test("T1,Z3,I4", () => {
    const ts = new TetrisSolver(generateGrid(10, 10))
    const ans = ts.solve("T1,Z3,I4")
    expect(ts.getGrid().slice(0, 4).reverse()).toEqual([
        [0, 0, 0, 0, 1, 1, 1, 1, 0, 0],
        [0, 0, 0, 1, 1, 0, 0, 0, 0, 0],
        [0, 1, 1, 1, 1, 1, 0, 0, 0, 0],
        [0, 0, 1, 0, 0, 0, 0, 0, 0, 0],
    ])
    expect(ans).toEqual(4)
})
test("Q0,I2,I6,I0,I6,I6,Q2,Q4", () => {
    const ts = new TetrisSolver(generateGrid(10, 10))
    const ans = ts.solve("Q0,I2,I6,I0,I6,I6,Q2,Q4")
    expect(ts.getGrid().slice(0, 3).reverse()).toEqual([
        [0, 0, 1, 1, 0, 0, 0, 0, 0, 0],
        [0, 0, 1, 1, 0, 0, 0, 0, 0, 0],
        [1, 1, 0, 0, 1, 1, 1, 1, 1, 1],
    ])
    expect(ans).toEqual(3)
})
test("Q0,Q2,Q4,Q6,Q8,Q1", () => {
    const ts = new TetrisSolver(generateGrid(10, 10))
    const ans = ts.solve("Q0,Q2,Q4,Q6,Q8,Q1")
    expect(ts.getGrid().slice(0, 2).reverse()).toEqual([
        [0, 1, 1, 0, 0, 0, 0, 0, 0, 0],
        [0, 1, 1, 0, 0, 0, 0, 0, 0, 0]
    ])
    expect(ans).toEqual(2)
})
test("Q0,Q2,Q4,Q6,Q8,Q1,Q1", () => {
    const ts = new TetrisSolver(generateGrid(10, 10))
    const ans = ts.solve("Q0,Q2,Q4,Q6,Q8,Q1,Q1")
    expect(ts.getGrid().slice(0, 4).reverse()).toEqual([
        [0, 1, 1, 0, 0, 0, 0, 0, 0, 0],
        [0, 1, 1, 0, 0, 0, 0, 0, 0, 0],
        [0, 1, 1, 0, 0, 0, 0, 0, 0, 0],
        [0, 1, 1, 0, 0, 0, 0, 0, 0, 0]
    ])
    expect(ans).toEqual(4)
})
test("I0,I4,Q8,I0,I4", () => {
    const ts = new TetrisSolver(generateGrid(10, 10))
    const ans = ts.solve("I0,I4,Q8,I0,I4")
    expect(ts.getGrid().slice(0, 2).reverse()).toEqual([
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
    ])
    expect(ans).toEqual(0)
})
test("L0,J2,L4,J6", () => {
    const ts = new TetrisSolver(generateGrid(10, 10))
    const ans = ts.solve("L0,J2,L4,J6")
    expect(ts.getGrid().slice(0, 4).reverse()).toEqual([
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [1, 0, 0, 1, 1, 0, 0, 1, 0, 0],
        [1, 0, 0, 1, 1, 0, 0, 1, 0, 0],
        [1, 1, 1, 1, 1, 1, 1, 1, 0, 0]
    ])
    expect(ans).toEqual(3)
})
test("L0,J2,L4,J6,Q8", () => {
    const ts = new TetrisSolver(generateGrid(10, 10))
    const ans = ts.solve("L0,J2,L4,J6,Q8")
    expect(ts.getGrid().slice(0, 4).reverse()).toEqual([
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [1, 0, 0, 1, 1, 0, 0, 1, 0, 0],
        [1, 0, 0, 1, 1, 0, 0, 1, 1, 1],
    ])
    expect(ans).toEqual(2)
})
test("L0,Z1,Z3,Z5", () => {
    const ts = new TetrisSolver(generateGrid(10, 10))
    const ans = ts.solve("L0,Z1,Z3,Z5")
    expect(ts.getGrid().slice(0, 4).reverse()).toEqual([
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [1, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [1, 1, 1, 1, 1, 1, 1, 0, 0, 0],
        [1, 1, 1, 1, 1, 1, 1, 1, 0, 0],
    ])
    expect(ans).toEqual(3)
})
test("L0,Z1,Z3,Z5,Z7", () => {
    const ts = new TetrisSolver(generateGrid(10, 10))
    const ans = ts.solve("L0,Z1,Z3,Z5,Z7")
    expect(ts.getGrid().slice(0, 4).reverse()).toEqual([
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [1, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [1, 1, 1, 1, 1, 1, 1, 1, 1, 0],
    ])
    expect(ans).toEqual(2)
})
test("T0,T3", () => {
    const ts = new TetrisSolver(generateGrid(10, 10))
    const ans = ts.solve("T0,T3")
    expect(ts.getGrid().slice(0, 4).reverse()).toEqual([
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [1, 1, 1, 1, 1, 1, 0, 0, 0, 0],
        [0, 1, 0, 0, 1, 0, 0, 0, 0, 0],
    ])
    expect(ans).toEqual(2)
})
test("T0,T3,I6,I6", () => {
    const ts = new TetrisSolver(generateGrid(10, 10))
    const ans = ts.solve("T0,T3,I6,I6")
    expect(ts.getGrid().slice(0, 4).reverse()).toEqual([
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 1, 0, 0, 1, 0, 1, 1, 1, 1],
    ])
    expect(ans).toEqual(1)
})
test("I0,I6,S4", () => {
    const ts = new TetrisSolver(generateGrid(10, 10))
    const ans = ts.solve("I0,I6,S4")
    expect(ts.getGrid().slice(0, 4).reverse()).toEqual([
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 1, 1, 0, 0, 0],
    ])
    expect(ans).toEqual(1)
})
test("T1,Z3,I4", () => {
    const ts = new TetrisSolver(generateGrid(10, 10))
    const ans = ts.solve("T1,Z3,I4")
    expect(ts.getGrid().slice(0, 4).reverse()).toEqual([
        [0, 0, 0, 0, 1, 1, 1, 1, 0, 0],
        [0, 0, 0, 1, 1, 0, 0, 0, 0, 0],
        [0, 1, 1, 1, 1, 1, 0, 0, 0, 0],
        [0, 0, 1, 0, 0, 0, 0, 0, 0, 0],
    ])
    expect(ans).toEqual(4)
})
test("L0,J3,L5,J8,T1", () => {
    const ts = new TetrisSolver(generateGrid(10, 10))
    const ans = ts.solve("L0,J3,L5,J8,T1")
    expect(ts.getGrid().slice(0, 4).reverse()).toEqual([
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [1, 0, 0, 0, 1, 1, 0, 0, 0, 1],
        [1, 1, 1, 1, 1, 1, 0, 0, 0, 1],
        [1, 1, 1, 1, 1, 1, 1, 0, 1, 1],
    ])
    expect(ans).toEqual(3)
})
test("L0,J3,L5,J8,T1,T6", () => {
    const ts = new TetrisSolver(generateGrid(10, 10))
    const ans = ts.solve("L0,J3,L5,J8,T1,T6")
    expect(ts.getGrid().slice(0, 4).reverse()).toEqual([
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [1, 0, 0, 0, 1, 1, 0, 0, 0, 1],
    ])
    expect(ans).toEqual(1)
})
test("L0,J3,L5,J8,T1,T6,J2,L6,T0,T7", () => {
    const ts = new TetrisSolver(generateGrid(10, 10))
    const ans = ts.solve("L0,J3,L5,J8,T1,T6,J2,L6,T0,T7")
    expect(ts.getGrid().slice(0, 4).reverse()).toEqual([
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 1, 0, 0, 1, 0, 0, 0],
        [1, 1, 1, 1, 0, 0, 1, 1, 1, 1],
    ])
    expect(ans).toEqual(2)
})
test("L0,J3,L5,J8,T1,T6,J2,L6,T0,T7,Q4", () => {
    const ts = new TetrisSolver(generateGrid(10, 10))
    const ans = ts.solve("L0,J3,L5,J8,T1,T6,J2,L6,T0,T7,Q4")
    expect(ts.getGrid().slice(0, 4).reverse()).toEqual([
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 1, 1, 1, 1, 0, 0, 0],
    ])
    expect(ans).toEqual(1)
})
test("S0,S2,S4,S6", () => {
    const ts = new TetrisSolver(generateGrid(10, 10))
    const ans = ts.solve("S0,S2,S4,S6")
    expect(ts.getGrid().slice(0, 8).reverse()).toEqual([
        [0, 0, 0, 0, 0, 0, 0, 1, 1, 0],
        [0, 0, 0, 0, 0, 0, 1, 1, 0, 0],
        [0, 0, 0, 0, 0, 1, 1, 0, 0, 0],
        [0, 0, 0, 0, 1, 1, 0, 0, 0, 0],
        [0, 0, 0, 1, 1, 0, 0, 0, 0, 0],
        [0, 0, 1, 1, 0, 0, 0, 0, 0, 0],
        [0, 1, 1, 0, 0, 0, 0, 0, 0, 0],
        [1, 1, 0, 0, 0, 0, 0, 0, 0, 0],
    ])
    expect(ans).toEqual(8)
})
test("S0,S2,S4,S5,Q8,Q8,Q8,Q8,T1,Q1,I0,Q4", () => {
    const ts = new TetrisSolver(generateGrid(20, 10))
    const ans = ts.solve("S0,S2,S4,S5,Q8,Q8,Q8,Q8,T1,Q1,I0,Q4")
    expect(ts.getGrid().slice(0, 16).reverse()).toEqual([
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 1, 1, 0, 0, 0, 0],
        [0, 1, 1, 0, 0, 1, 1, 0, 1, 1],
        [0, 1, 1, 0, 0, 1, 1, 0, 1, 1],
        [0, 1, 1, 1, 1, 1, 0, 0, 1, 1],
        [0, 0, 1, 1, 1, 0, 0, 0, 1, 1],
        [0, 0, 1, 1, 0, 0, 0, 0, 1, 1],
        [0, 1, 1, 0, 0, 0, 0, 0, 1, 1],
        [1, 1, 0, 0, 0, 0, 0, 0, 1, 1],
    ])
    expect(ans).toEqual(8)
})

test("L0,J3,L5,J8,T1,T6,S2,Z5,T0,T7", () => {
    const ts = new TetrisSolver(generateGrid(20, 10))
    const ans = ts.solve("L0,J3,L5,J8,T1,T6,S2,Z5,T0,T7")
    expect(ts.getGrid().slice(0, 8).reverse()).toEqual([
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    ])
    expect(ans).toEqual(0)
})

test("Q0,I2,I6,I0,I6,I6,Q2,Q4", () => {
    const ts = new TetrisSolver(generateGrid(20, 10))
    const ans = ts.solve("Q0,I2,I6,I0,I6,I6,Q2,Q4")
    expect(ts.getGrid().slice(0, 8).reverse()).toEqual([
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 1, 1, 0, 0, 0, 0, 0, 0],
        [0, 0, 1, 1, 0, 0, 0, 0, 0, 0],
        [1, 1, 0, 0, 1, 1, 1, 1, 1, 1],
    ])
    expect(ans).toEqual(3)
})