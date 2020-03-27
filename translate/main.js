/* 
1)  Создайте функцию f1. Функция должна выводить ширину объекта по которому произошел клик. Функция должна возвращать данное значение. 
2)  Создайте функциию f2, которая должна выводить имя тега элемента по которому произошел клик. Функция должна возвращать данное значение.
3)  Создайте 3 блока .b-3 и функцию f3. Функция должна при клике на блоке окрашивать блок в случайный цвет. Функцию окрашивания - реализуйте отдельно с именем randomColor - она должна генерировать случайное число от 0 до 255 включительно.*/

function f1() {
  return this.style.width
}

function f2() {
  return this.tagName
}

function f3() {
  this.style.background = "rgb(" + randomColor() + "," + randomColor() + "," + randomColor() + ")"
}

function randomColor() {
  return Math.floor(Math.random() * 256);
}

let item = document.querySelectorAll('.b-3');

for (let i = 0; i < item.length; ++i) {
  item[i].onclick = f3
}

