const { TestWatcher } = require("jest");
const addition = require("../calc");

describe("Calculator",() => {
    describe("Addition function", () => {
        test("should return 42 for 20 + 22", () => {
            expect(addition(20, 22)).toBe(42);
        });
        test("should return 10 for 4 + 6", () => {
            expect(addition(4,6)).toBe(10);
        });
        test("should return 4.8 for 3 + 1.8", () => {
            expect(addition(3, 1.8)).toBe(4.8);
        })
        test("should return -9 for 1 and -10", () => {
            expect(addition(1, -10)).toBe(-9);
        })
        test("should return 'Arguments must be numbers' if at least one of the params is a string", () => {
            expect(addition(1, "test")).toBe('Arguments must be numbers')
        })
        test("should return 'Addition must have two arguments' if one or both numbers are null", () => {
            expect(addition(1, null)).toBe('Addition must have two arguments')
        })
        test("should return 'Addition must have two arguments' if no arguments are given", () => {
            expect(addition()).toBe('Addition must have two arguments')
        })
    });
    describe("Subtraction function", () => {

    });
    describe("Multiplication function", () => {

    });
    describe("Division function", () => {

    });

})
