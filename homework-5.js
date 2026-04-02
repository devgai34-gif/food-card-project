//3. Создать функцию, которая принимает 2 параметра: 
// город и температуру

function weather(city,temperature) {
  console.log(" в " + city + " t* — " + temperature + " градус");
}

weather("Грозном",1);

//4. Создать переменную,
//которая хранит внутри себя скорость света

const SpeedLight = 300000;

function checkSpeed(speed) {
  if (speed > SpeedLight) {
    
    console.log("больше скорости света");
  } else if (speed < SpeedLight) {
    console.log("меньше скорости света");
  } else {
    console.log("Скорость света");
  }
}
checkSpeed(1);
checkSpeed(300001);
checkSpeed(300000);

//5.Создать переменную №1,
//которая содержит продукт и переменную №2,

let product = "Мотоцикл-Ямаха";
let price = 1000;

function buyMotik(MoneyHave) {
  if (MoneyHave >= price) {
    //Хватило 
    console.log(product + "Ямаха мой");
  } else {
    // Не хватило
    let NotEnough = price - MoneyHave;
    console.log("не хватает " + NotEnough + "$");
  }
}

buyMotik(1);  
buyMotik(10000);

//6. Создать 1 функцию и именовать её
//7. Создать 3 переменных 

let Moto = "Umaha";
let Spidde = "200к/м";
let mileage = "50к/м";

function toKnowProduct() {
  console.log("Название " + Moto + " Скорость " + Spidde +" Пробег "+ mileage);
}

  toKnowProduct();
