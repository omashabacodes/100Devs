document.querySelectorAll("li").forEach((square) =>
  square.addEventListener("click", function () {
    placeMark(square);
  })
);

function placeMark(square) {
  square.innerHTML = "X";
}

function computerPlaceMark(square) {
  square.innerText = "0";
}