
// Global Variables
const containerSize = 750;
const gridSize = 16;

const resetButton = document.querySelector("button"); 
const containerDiv = document.querySelector("#container");

// Create Grid
const createGrid = (gridSize) => {
    for (let i = 0; i < gridSize; i++){
        const row = document.createElement("div");
        row.classList.add("grid-row");

        for (let j = 0; j < gridSize; j++) {
            const gridWidthAndHeight = containerSize / gridSize;
            const gridBox = document.createElement("div");
            gridBox.classList.add("grid-box");
            gridBox.style.width = `${gridWidthAndHeight}px`;
            gridBox.style.height = `${gridWidthAndHeight}px`;
            gridBox.addEventListener("mouseenter", () => {
                gridBox.style.backgroundColor = "grey";
            })
            row.appendChild(gridBox);
        }
        containerDiv.appendChild(row);
    }
}

createGrid(gridSize);