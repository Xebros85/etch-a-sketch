
// Global Variables
const containerSize = 700;
let gridSize = 16;

const resetButton = document.querySelector("button"); 


// Create Grid
const createGrid = (gridSize) => {
    
    const containerDiv = document.querySelector("#container");
    
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

function resetBoard() {
    let board = document.querySelector("#container");
    let squares = board.querySelectorAll("div");
    squares.forEach((div) => div.style.backgroundColor = "white");
}

function removeBoard(){
    let board = document.querySelector("#container");
    let squares = board.querySelectorAll("div");
    squares.remove();
}

function changeSize() {
    
    let newSize = Number(prompt("What size would you like the board to be?"));    

    if (newSize >= 2 && newSize <= 100) {
               
        createGrid(newSize);

    } else {
        newSize = Number(prompt("Please enter a number between 2 and 100"));
    }
}