const { Square, Triangle, Circle } = require("./lib/shapes");

describe("Circle", () => {
  test("should render svg for a green circle element", () => {
    const circle = new Circle("ABC", "yellow", "purple");
    expect(circle.shapeColor).toBe("purple");
  });
});

describe("Triangle", () => {
  test("should render svg for a green polygon element", () => {
    const triangle = new Triangle("ABC", "yellow", "purple");
    expect(triangle.textColor).toBe("yellow");
  });
});

describe("Square", () => {
  test("should render svg for a green polygon element", () => {
    const square = new Square("ABC", "yellow", "purple");
    expect(square.text).toBe("ABC");
  });
});
