// Create game box
const containerDiv = document.querySelector("#container");

const titleBox = document.createElement("h1");
titleBox.id = "title-box";
titleBox.innerText = "Etch-A-Sketch";
containerDiv.appendChild(titleBox);

const outsideBox = document.createElement("div");
outsideBox.id = "outside-box";
containerDiv.appendChild(outsideBox);

const insideBox = document.createElement("div");
insideBox.id = "inside-box";
outsideBox.appendChild(insideBox);


// Create "grid"
const gridHeight = 16;
const gridWidth = 16;
let gridSquares;

function makeRows(row, col) {
    for (let i = 0; i < (row * col); i++) {
        let gridSquares = document.createElement("div");
        gridSquares.innerText = (i + 1);
        insideBox.appendChild(gridSquares).id = "grid-squares";
    }
}

makeRows(gridHeight, gridWidth);


// Broken - Need to fix
insideBox.addEventListener("mouseenter", (event) => {
    const target = event.target
    const gridColor = document.getElementById("grid-squares")

    gridColor.style.backgroundColor = "blue";
})
