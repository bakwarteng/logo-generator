const inquirer = require("inquirer");
const fs = require("fs");
const { Square, Triangle, Circle } = require("./lib/shapes.js");

function writeToFile(logo, data) {
  fs.writeFile(logo, data, (err) =>
    err ? console.log(err) : console.log("Generated logo.SVG")
  );
}

function init() {
  inquirer
    .prompt([
      {
        type: "input",
        name: "text",
        message: "Enter up to 3 characters ",
      },

      {
        type: "input",
        name: "textColor",
        message: " Enter a text color keyword or a hexadecimal number",
      },
      {
        type: "input",
        name: "shapeColor",
        message: " Enter a shape color keyword or a hexadecimal number",
      },

      {
        type: "list",
        name: "shapes",
        choices: ["Circle", "Triangle", "Square"],
        message: " Please choose a shape",
      },
    ])
    .then((data) => {
      console.log(data);
      if (data.shapes === "Circle") {
        const shape = new Circle(data.text, data.textColor, data.shapeColor);
        fs.writeFileSync(
          "./examples/output.svg",
          `
      <svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">

  <circle cx="150" cy="100" r="80" fill="${shape.shapeColor}" />

  <text x="150" y="125" font-size="60" text-anchor="middle" fill="${shape.textColor}">${shape.text}</text>

</svg>
      `
        );
      }
      if (data.shapes === "Square") {
        const shape = new Square(data.text, data.textColor, data.shapeColor);
        fs.writeFileSync(
          "./examples/output.svg",
          `
      <svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">

  <rect width="175" height="175" x="10" y="10" rx="20" ry="20" fill="${shape.shapeColor}" />

  <text x="98" y="117" font-size="60" text-anchor="middle" fill="${shape.textColor}">${shape.text}</text>

</svg>
      `
        );
      }

      if (data.shapes === "Triangle") {
        const shape = new Triangle(data.text, data.textColor, data.shapeColor);
        fs.writeFileSync(
          "./examples/output.svg",
          `
      <svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">

  <polygon points="100,10 150,190 50,190" style="fill:${shape.shapeColor};stroke:purple;stroke-width:3" />

  <text x="100" y="125" font-size="25" text-anchor="middle" fill="${shape.textColor}">${shape.text}</text>

</svg>
      `
        );
      }
    });
}

init();
