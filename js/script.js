const grid = document.getElementById("grid");

for (let i = 1; i <= 256; i++) {
    let square = document.createElement("div");
    square.classList.add("square");
    square.innerText = i;
    grid.appendChild(square);
    grid.style.gridTemplateColumns = 'repeat(16, [col-start] 1fr [col-end])';
}

//Change background color

grid.addEventListener("mouseover", () => {
    document.querySelectorAll(".square").forEach((square) => {
        square.addEventListener("mouseover", () => {
            square.style.backgroundColor = getRandomColor(6);
            square.style.color = "white";
        })
    })
})

//Generate random color
function getRandomColor(length) {
    for(let x = 0; x < length; x++){
      let letters = '0123456789ABCDEF';
      let color = '#';
      for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
      }
      return color;
    }
}

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