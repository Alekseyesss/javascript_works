/* 
4)  Мини проект - онлайн переводчик для текста. Создайте класс Translate который принимает свойство text - массив вида:

{ "hello" : "привет", "world" : "мир"}
Класс должен иметь метод show text - который возвращает строку вида:

<span class="translate" data-t = "hello">hello</span> <span class="translate" data-t = "world">world</span>>
и выводит данную строку в указанный элемент на страницу.

После чего вешает на все span.translate событие клик - метод actionTranslate - данного класса, которое выводит перевод слова на котором кликнули в консоль.

Продемонстрируйте работу данного класса. */

class Translate {
  constructor(value) {
    this.text = value;
  }
  showText(elem, class_span) {
    let node = document.querySelector(elem);
    let output = document.querySelector('.output');
    let str = "";
    let prop = Object.keys(this.text);
    let prop_val = Object.values(this.text);

    for (let i = 0; i < prop.length; ++i) {
      str += `<span class="${class_span}">${prop[i]}</span> `
    }

    node.innerHTML = str;

    let translate = document.querySelectorAll(`.${class_span}`);
    for (let i = 0; i < translate.length; ++i) {
      translate[i].onclick = function () { output.innerHTML = ('Перевод: '+` ${prop_val[i]}`) }
    }

    return str;
  }
}


let someone = new Translate({ "hello": "привет", "world": "мир", "bread": "хлеб" });
someone.showText(".transl", "translate");

let someone2 = new Translate({ "frost": "мороз", "sun": "солнце", "day": "день", "wonderful": "чудесный" });
someone2.showText(".transl2", "translate2");

