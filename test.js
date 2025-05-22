let btn1 = document.querySelector(".mode");
let currmode = "light";

btn1.addEventListener("click", () => {
  if (currmode === "light") {
    currmode = "dark";
    document.body.style.backgroundColor = "black";
    document.body.style.color = "white"; // Optional: Adjust text color for better visibility
  } else {
    currmode = "light";
    document.body.style.backgroundColor = "white";
    document.body.style.color = "black"; // Optional: Reset text color
  }
  console.log(currmode); // Log current mode to the console
});
