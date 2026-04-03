//3. Создать функцию, которая принимает 2 параметра: 
// город и температуру

function showWeather(cityName, currentTemperature) {
  console.log(" в " + cityName + " t* — " + currentTemperature + " градус");
}

showWeather("Грозном", 1);

//4. Создать переменную,
//которая хранит внутри себя скорость света

const SPEED_LIGHT = 300000;
function compareSpeed(speed) {
  if (speed > SPEED_LIGHT) {
    console.log("больше скорости света");
  } else if (speed < SPEED_LIGHT) {
    console.log("меньше скорости света");
  } else {
    console.log("Скорость света");
  }
}

compareSpeed(1);
compareSpeed(300001);
compareSpeed(300000);

//5.Создать переменную №1,
//которая содержит продукт и переменную №2,
let product = "Мотоцикл-Ямаха";
let price = 1000;

function showProductInfo(budget) {
  if (budget >= price) {
    //Хватило 
    console.log(product + "Ямаха мой");
  } else {
    // Не хватило
    let notEnough = price - budget;
    console.log("не хватает " + notEnough + "$");
  }
}

showProductInfo(1);  
showProductInfo(10000);

//6. Создать 1 функцию и именовать её
//7. Создать 3 переменных 

let moto = "Umaha";
let speed = "200к/м";
let mileage = "50к/м";

function outputCarInfo() {
  console.log("Название " + moto + " Скорость " + speed +" Пробег "+ mileage);
}

outputCarInfo();
