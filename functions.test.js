const { returnTwo, greeting, add, subtract, multiply, divide } = require("./functions");

test("returnTwo should return the number 2", () => {
    expect(returnTwo()).toEqual(2)
})

test("add should return the sum of two numbers", () => {
    expect(add(5, 6)).toEqual(11)
    expect(add(5, 9)).toEqual(14)
})


describe("Math Functions", () => {
    test("greeting(name) should return 'Hello, name.'", () => {
        expect(greeting("jon")).toEqual("Hello, jon.")
        expect(greeting("Jill")).toEqual("Hello, Jill.")
        expect(greeting("Jack")).toEqual("Hello, Jack.")
    })
    test("multiply() should return a dynamic product based on two number parameters.", () => {
        expect(multiply(1, 2)).toEqual(2);
        expect(multiply(5, 9)).toEqual(45);
    });

    test("divide() should return a dynamic quotient based on two number parameters.", () => {
        expect(divide(2, 1)).toEqual(2);
        expect(divide(9, 3)).toEqual(3);
    });

    test("subtract() should return a dynamic difference based on two number parameters.", () => {
        expect(subtract(2, 1)).toEqual(1);
        expect(subtract(9, 3)).toEqual(6);
    });
})

