
// создаём массив с цифрами элементов и id
const myarray=["1", "2", "3"]
// сортируем их рандомно
myarray.sort(function() { return Math.random() - 0.5 })
// показ элементов
let buld = document.querySelectorAll('.bulb__item')
// count счётчик
let count = 0
buld.forEach(element => {
  // вписываем в элемен рандомный id
  element.id = myarray[count]
  element.querySelector('span').textContent = myarray[count]
  count++
});

const btn = document.getElementById('btn')
btn.addEventListener('click', function(){
  document.querySelector('.container').style.display = "none"
  document.querySelector('.bulb__container').style.display = "block"
})

const vievTempBtn = document.querySelector('#vievTempBtn')
const select = document.querySelector('#select')

vievTempBtn.onclick = (event) => {
    event.preventDefault();
    const tempSpan = document.querySelector('.temp__information')
    // console.log(select.value);
    // console.log(document.getElementById(select.value).querySelector('img').getAttribute("temp"));
    // getAttribute("align")
    tempSpan.textContent = document.getElementById(select.value).querySelector('img').getAttribute("temp")
    // console.log(document.querySelector('img[id="' + select.selectedIndex+'"]'));
};


// const checkTemp

// // создаём массив с цифрами для того чтобы включатель выбрал опреденную лампу
// const arrayBulb = ["1", "2", "3"]
// сортируем еще раз наш массив
myarray.sort(function() { return Math.random() - 0.5 })

// Получаем контент
const content = document.querySelector('.content')

content.addEventListener('click', function(elem){
  // // если тумблер  включен то включаем лампочку
  // получаем зачение из инпута котрое записано в атрибуте
  let value = elem.path[0].attributes.targetItem.value
  value = value - 1;
  let img = document.getElementById(myarray[value]).querySelector('img')
  // создаем значение температуы
  let countTemp = 0

  if (elem.path[0].checked) {
    img.setAttribute('src', "image/buldtrue.jpg");

    let countTempSetInterval =  setInterval(() => { countTemp += 1;img.setAttribute('temp', countTemp); if (!elem.path[0].checked || countTemp > 100) {
      clearInterval(countTempSetInterval)
    } }, 300);

  } else {
    img.setAttribute('src', "image/buldfalse.jpg");
  }

})


// if (checkboxOne.checked) {
//   console.log(document.getElementById(myarray[0]));
// }