//3. Создать функцию, которая принимает 2 параметра: город и температуру 

function showWeather(city, temperature) {
  console.log(`Сейчас в ${city} температура — ${temperature} градусов по Цельсию`);
}

// Пример вызова функции:
showWeather('RIM', 20);
showWeather('STAMBUL', 15);

//4. Создать переменную, которая хранит внутри себя скорость света
// Константа (скорость света в м/с)
const LIGHT_SPEED = 299792458;

function compareSpeed(speed) {
  if (speed > LIGHT_SPEED) {
    console.log("Сверхсветовая скорость");
  } else if (speed < LIGHT_SPEED) {
    console.log("Субсветовая скорость");
  } else {
    console.log("Скорость света");
  }
}

// Примеры вызова:
compareSpeed(500);            // Субсветовая скорость
compareSpeed(300000000);      // Сверхсветовая скорость
compareSpeed(299792458);      // Скорость света

// 5. Создать переменную №1,№2,функцию для проверки
let carName = "Niva Travel";   // Название товара
let carPrice = 5000;     // Цена товара

// Создаёю функцию для покупки
function tryToBuy(currentBudget) {
    // Проверяю, хватает ли денег
    if (currentBudget >= carPrice) {
        // Если денег достаточно или впритык
        console.log(carName + " приобретён. Спасибо за покупку!");
    } else {
        // Если денег меньше, чем цена
        let difference = carPrice - currentBudget;
        console.log("Вам не хватает " + difference + "$, пополните баланс.");
    }
}
// Проверяю работу программы
console.log("Проверка покупки");

// есть 200$
tryToBuy(200); 

// А теперь, есть 400$
tryToBuy(400);

// 1. Создаю 3 переменные (модели машин) 
let ladaModel = "Lada Vesta";
let nivaModel = "Niva Travel";
let vazModel = "Vaz 2107";

// 2. Создаю функцию
// Название: checkCarStatus (Проверить статус машины)

function checkCarStatus(carName) {
    console.log("Проверка состояния:" + carName);
    console.log(carName + "Готов к отправке!");
}

// 3. Запускаю функцию для машин
checkCarStatus(ladaModel);
checkCarStatus(nivaModel);
checkCarStatus(vazModel);