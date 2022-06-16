// initialize an array to store the init state of cards
let cardsList = [
  { number: 1, color: "#6f98a8" },
  { number: 2, color: "#2b8ead" },
  { number: 3, color: "#2f454e" },
  { number: 4, color: "#2b8ead" },
  { number: 5, color: "#2f454e" },
  { number: 6, color: "#bfbfbf" },
  { number: 7, color: "#bfbfbf" },
  { number: 8, color: "#6f98a8" },
  { number: 9, color: "#2f454e" },
];

// update the cards on window load
window.onload = () => {
  // get list of cards
  updateCards();
};

// get action buttons
let shuffleBtn = document.querySelector(".btn-shuffle");
let sortBtn = document.querySelector(".btn-sort");

// add click event listener on both of the buttons
shuffleBtn.addEventListener("click", shuffle);
sortBtn.addEventListener("click", sort);

/**
 * function name: shuffle
 * parameters: none
 * return: void
 * description: It shuffles the card state array, and then calls updateCards function to update the position of cards in DOM
 */
function shuffle() {
  for (let i = 0; i < cardsList.length; i++) {
    let j = Math.floor(Math.random() * (i + 1));
    let temp = cardsList[i];
    cardsList[i] = cardsList[j];
    cardsList[j] = temp;
  }
  updateCards();
}

/**
 * function name: updateCards
 * parameters: none
 * return: void
 * description: It updates the position of cards in the DOM based on the values in cardList array
 */
function updateCards() {
  console.log("update ", cardsList);
  cards = document.querySelectorAll(".card");
  cards.forEach((elem, i) => {
    elem.innerHTML = cardsList[i].number;
    elem.style.backgroundColor = cardsList[i].color;
  });
}

/**
 * function name: sort
 * parameters: none
 * return: void
 * description: It sorts the cards in DOM based on the content of each div
 */
function sort() {
  Array.prototype.slice
    .call(document.querySelectorAll(".card"))
    .sort((elemA, elemB) => {
      if (elemA.textContent.trim() < elemB.textContent.trim()) return -1;
      if (elemA.textContent.trim() > elemB.textContent.trim()) return 1;
      return 0;
    })
    .forEach((card) => {
      card.parentElement.appendChild(card);
    });
}
