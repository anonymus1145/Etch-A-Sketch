const grid = document.getElementById("grid");

for (let i = 1; i <= 256; i++) {
    let square = document.createElement("div");
    square.classList.add("square");
    square.innerText = i;
    grid.appendChild(square);
    grid.style.gridTemplateColumns = 'repeat(16, [col-start] 1fr [col-end])';
}


grid.addEventListener("mouseover", () => {
    document.querySelectorAll(".square").forEach((square) => {
        square.addEventListener("mouseover", () => {
            square.style.backgroundColor = "black";
            square.style.color = "white";
        })
    })
})

function changeGrid() {
    let newSquare = prompt("How many squares would you like?");
    if (newSquare > 100) {
        alert("Please enter a number less than 100");
    } else {
        for (let i = 1; i <= newSquare * newSquare; i++) {
            let square = document.createElement("div");
            square.classList.add("square");
            square.innerText = i;
            grid.appendChild(square);
            grid.style.gridTemplateColumns = `repeat(${newSquare}, [col-start] 1fr [col-end])`;
        }
    }
}

//remove old grid -> create new grid

const removeGrid = document.getElementById("bttn");
removeGrid.addEventListener("click", () => {
    grid.innerHTML = "";
    changeGrid();
})