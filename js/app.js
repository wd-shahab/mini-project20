const $ = document;

// input elements
const formBtnElem = $.querySelector("form button");
const nameInput = $.querySelector("#name");
const cardNumberInput = $.querySelector("#cardNum");
const monthInput = $.querySelector("#month-date");
const yearInput = $.querySelector("#year-date");
const cvcCardInput = $.querySelector("#cvc-input");

// front card element
const cardNum = $.querySelector(".num p");
const personName = $.querySelector(".name");
const expMonth = $.querySelector(".month");
const expYear = $.querySelector(".year");

// back card element
const cvcCard = $.querySelector(".back .cvc");

// functions

function setErr(elem) {
  elem.style.cssText =
    "border-color: hsl(0, 100%, 66%); background: hsl(0, 100%, 75%)";

  setTimeout(() => {
    elem.style.cssText = "";
    elem.value = "";
  }, 3e3);
}

// Event

formBtnElem.addEventListener("click", (e) => {
  e.preventDefault();
  let valid = 0; // from 5
  let nowDate = new Date();
  let namePattern = /^[a-z ]{3,}$/i;
  let cardNumPattern = /^[\d]{16}$/;
  let cvcPattern = /^[\d]{3}$/

  if (namePattern.test(nameInput.value.trim())) {
    valid++;
  } else {
    setErr(nameInput);
  }

  if (cardNumPattern.test(cardNumberInput.value)) {
    valid++;
  } else {
    setErr(cardNumberInput);
  }

  if (
    !isNaN(monthInput.value) &&
    +monthInput.value <= 12 &&
    +monthInput.value >= 1
  ) {
    valid++;
  } else {
    setErr(monthInput);
  }

  if (
    !isNaN(yearInput.value) &&
    +yearInput.value > +String(nowDate.getFullYear()).slice(2)
  ) {
    valid++;
  } else {
    setErr(yearInput);
  }

  if(cvcPattern.test(+cvcCardInput.value)){
    valid++
  }else {
    setErr(cvcCardInput)
  }

  if(valid == 5){
    $.querySelector('.form').classList.add("show")
  }
});

nameInput.addEventListener("keyup", () => {
  personName.innerHTML = nameInput.value.trim().toUpperCase();

  !nameInput.value.trim() && (personName.innerHTML = "Jane Appleseed");
});

cardNumberInput.addEventListener("keyup", () => {
  cardNum.innerHTML = cardNumberInput.value;

  cardNum.innerHTML = `${cardNum.innerHTML.slice(
    0,
    4
  )} ${cardNum.innerHTML.slice(4, 8)} ${cardNum.innerHTML.slice(
    8,
    12
  )} ${cardNum.innerHTML.slice(12, 16)}`;

  !cardNumberInput.value.trim() && (cardNum.innerHTML = "0000 0000 0000 0000");
});

monthInput.addEventListener("keyup", () => {
  expMonth.innerHTML = monthInput.value.trim();

  !monthInput.value.trim() && (expMonth.innerHTML = "00");
});
yearInput.addEventListener("keyup", () => {
  expYear.innerHTML = yearInput.value.trim();

  !yearInput.value.trim() && (expYear.innerHTML = "00");
});

cvcCardInput.addEventListener("keyup", () => {
  cvcCard.innerHTML = cvcCardInput.value.trim();

  !cvcCardInput.value.trim() && (cvcCard.innerHTML = "000");
});
