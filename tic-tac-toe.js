let boxes = document.querySelectorAll(".box");
let resetbtn = document.querySelector(".reset");
let container = document.querySelector(".mssg-container");
let mssgs = document.querySelector("#mssg");
let turn0 = true;

const winpatterns = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];

// Add event listeners to each box
boxes.forEach((box) => {
  box.addEventListener("click", () => {
    if (turn0) {
      box.innerText = "X";
      turn0 = false;
    } else {
      box.innerText = "O";
      turn0 = true;
    }
    box.style.pointerEvents = "none"; // Disable further clicks on this box
    checkwinner(); // Check if there's a winner after each turn
  });
});

// Function to display the winner
const showwinner = (win) => {
  mssgs.innerText = `Winner is ${win}`; // Corrected string interpolation

  container.style.display = "block"; // Display winner message container
};

// Function to check for a winner
let checkwinner = () => {
  for (let pattern of winpatterns) {
    let pos1val = boxes[pattern[0]].innerText;
    let pos2val = boxes[pattern[1]].innerText;
    let pos3val = boxes[pattern[2]].innerText;

    if (pos1val !== "" && pos2val !== "" && pos3val !== "") {
      if (pos1val === pos2val && pos2val === pos3val) {
        showwinner(pos1val); // Call showwinner function to display winner
        console.log(`${pos1val} is the winner!`);

        boxes.forEach((box) => (box.style.pointerEvents = "none")); // Disable all boxes
        return; // Stop further checks once a winner is found
      }
    }
  }
};

// Reset functionality
resetbtn.addEventListener("click", () => {
  boxes.forEach((box) => {
    box.innerText = ""; // Clear each box
    box.style.pointerEvents = "auto"; // Re-enable clicks
  });
  turn0 = true; // Reset turn tracker
  mssgs.innerText = ""; // Clear winner message
  container.style.display = "none"; // Hide winner message container
  console.log("Game reset!");
});
