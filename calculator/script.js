//-----стрелочная функция----------------

const showMessage = () => {
  let userName = prompt("Напиши свое имя");
  let message = "Привет, " + userName + "!";
  alert(message);
};

// function showMessage() {
//   let userName = prompt("Напиши свое имя");
//   let message = "Привет, " + userName + "!";
//   alert(message);
// }

//-----Калькулято - вариант 1-----------------------

function calcSum() {
  let a = prompt("Первое число?", 1);
  let b = prompt("Второе число?", 2);
  let c = +a + +b;
  let message = "Сумма равна " + c;

  alert(message);
}

function calcSubt() {
  let a = prompt("Первое число?", 1);
  let b = prompt("Второе число?", 2);
  let c = a - b;
  let message = "Разность равна " + c;
  alert(message);
}
function calcMult() {
  let a = prompt("Первое число?", 1);
  let b = prompt("Второе число?", 2);
  let c = a * b;
  let message = "Произведение равно " + c;
  alert(message);
}
function calcQuot() {
  let a = prompt("Первое число?", 1);
  let b = prompt("Второе число?", 2);
  let c = a / b;
  let message = "Частное от деления равно " + c;
  alert(message);
}

function select(sender) {
  sender.classList.add("selected");
}

//---------------calculator-вариант 2----------------

function showName() {
  let d = document.querySelector("#name1").value;
  document.querySelector(".show-name").textContent = `Привет, ${d}!`;
}

function calcS() {
  let x = Number(document.querySelector("#number1").value);
  let y = Number(document.querySelector("#number2").value);
  let z = x + y;
  document.querySelector(".sum").textContent = `Сумма равна: ${z}`;
}

function calcSub() {
  let x = Number(document.querySelector("#number3").value);
  let y = Number(document.querySelector("#number4").value);
  let z = x - y;
  document.querySelector(".sub").textContent = `Разность равна: ${z}`;
}

function calcM() {
  let x = Number(document.querySelector("#number5").value);
  let y = Number(document.querySelector("#number6").value);
  let z = x * y;
  document.querySelector(".m").textContent = `Произведение равно: ${z}`;
}

function calcQ() {
  let x = Number(document.querySelector("#number7").value);
  let y = Number(document.querySelector("#number8").value);
  let z = x / y;
  document.querySelector(".q").textContent = `Частное равно: ${z}`;
}

//----Калькулятор-вариант 3----------------

const input1 = document.querySelector("#input1");
const input2 = document.querySelector("#input2");
const div1 = document.querySelector("#result");
//------week15-вставка сюда------
// вариант 1

function check() {
  let result = document.querySelector("#input1").value;
  if (result == "") {
    alert(`Числа не введены!`);
  }
}

// вариант 2

function compare(a, b) {
  if (a > b) {
    console.log(a);
    return a;
  } else {
    return b;
  }
}
//  вариант 3
function compare2(a, b) {
  if (a > b && a > c) {
    console.log(a);
    return a;
  } else if (b > a && b > c) {
    return b;
  } else {
    return c;
  }
}
//вариант 4
function checkAge(age) {
  if (age >= 18) {
    alert("Все ок");
  } else {
    alert("Вход поспрещен");
  }
}

//--4 вариант записи условий--тенантный оператор:-если два варианта-------

function checkAge(age) {
  age >= 18 ? alert("Все ок") : alert("Вход запрещен");
}

//----5 вариант:-------

function weekDayName(number) {
  let name = "";
  switch (number) {
    case 1:
      name = "Понедельник";
      break;
    case 2:
      name = "Вторник";
      break;
    case 3:
      name = "Среда";
      break;
    case 4:
      name = "Четверг";
      break;
    case 5:
      name = "Пятница";
      break;
    case 6:
      name = "Суббота";
      break;
    case 7:
      name = "Воскресенье";
      break;

    default:
      name = "Такого дня недели нет";
  }
  return name;
}
weekDayName(2);

//------------------------------------

//----Калькулятор-вариант 3----------------

// const input1 = document.querySelector("#input1");
// const input2 = document.querySelector("#input2");
// const div1 = document.querySelector("#result");

// function getValueInput() {
//   console.log(input1.value);
//   input1.value = "";
// }

div1.textContent = "";
input1.value = "";
input2.value = "";

function Sum() {
  const inputFirstValue = input1.value;
  const inputSecondValue = input2.value;
  const result = +inputFirstValue + +inputSecondValue;
  div1.textContent = `Сумма чисел равна: ${result}`;
  if (result == "") {
    div1.textContent = `Числа не введены!`;
  }
}

function Clear() {
  div1.textContent = "";
  input1.value = "";
  input2.value = "";
}

function Sub() {
  const inputFirstValue = input1.value;
  const inputSecondValue = input2.value;
  const result = inputFirstValue - inputSecondValue;
  div1.textContent = `Разность чисел равна: ${result}`;
}

function Mult() {
  const inputFirstValue = input1.value;
  const inputSecondValue = input2.value;
  const result = inputFirstValue * inputSecondValue;
  div1.textContent = `Произведение чисел равно: ${result}`;
}

function Quot() {
  const inputFirstValue = input1.value;
  const inputSecondValue = input2.value;
  const result = inputFirstValue / inputSecondValue;

  if (input2.value > 0 || input2.value < 0) {
    div1.textContent = `Частное равно: ${result}`;
  } else {
    div1.textContent = `На ноль делить нельзя!`;
  }
}

//---слайдер

let index = 5;
function NextImg() {
  index++;
  document.querySelector(".image").src = `./images/${index}.JPG`;
}

function PreviousImg() {
  index--;
  document.querySelector(".image").src = `./images/${index}.JPG`;
}

//-- счетчик 1

const counter = document.querySelector("#counter");

const countResult = document.querySelector("#countresult");
counter.onclick = onCount; //  подписка на событие click - вместо вставки в HTML

let i = 0;

function onCount() {
  i++;
  countResult.textContent = i;
}

//--- счетчик 2----------------

// selector = ".meter_1" / ".meter_2" / ".meter_3"
function createCounter(selector) {
  const counterElement = document.querySelector(selector); //---уточнение - внутри чего находятся те элементы, с которыми мы работаем. Потом внизу указываем ".meter_1" и т д
  const butcounter = counterElement.querySelector(".butcounter");
  const butshow = counterElement.querySelector(".butshow");
  butcounter.onclick = onMeter; //--- подписка на событие click - вместо вставки в HTML
  let i = 0;

  function onMeter() {
    i++;
    butshow.textContent = i;
  }
}

// const meter1 = document.querySelector(".meter_1");
// const meter2 = document.querySelector(".meter_2");

createCounter(".meter_1");
createCounter(".meter_2");
createCounter(".meter_3");
