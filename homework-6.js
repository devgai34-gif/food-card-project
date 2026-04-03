// 3. Создайте объект на основе ваших данных
const person = {
  firstName: "Devid",   
  lastName: "Maer",      
  job: "Developer",      
  age: 35,                 
  country: "Turcia",        
  city: "Stambul"           
};

//4. Создайте объект, который будет хранить данные об авто
const infoMotoData = {
  brand: "Yamaha",   
  model: "R-1",          
  year: 2020,             
  color: "Черный",         
  transmission: "Механика"  
};

infoMotoData.owner = person;
console.log(infoMotoData);

//5. Написать функцию которая аргументом будет принимать объект,
// описанный в пункте №4.
function checkSpeed(infoMotoData) {

  infoMotoData.maxSpeed = infoMotoData.maxSpeed || 200;
  
  console.log("Максимальная скорость установлена");
}
checkSpeed(infoMotoData);
console.log(infoMotoData.maxSpeed);

//6. Написать функцию, которая получает первым аргументом  — объект,
//а вторым аргументом — свойство объекта

function showInfo(obj, key) {

  console.log(`его ${key} — это ${obj[key]}`);
}

const motoInfo = {
  brand: "Yamaha XZ-400",
  color: "Черный"
};

showInfo(motoInfo, "brand"); 
showInfo(motoInfo, "color"); 

//7.Создать массив продуктов

const motoParts = [
  "Двигатель",    
  "Колесо",       
  "Руль",        
  "Рама",         
  "Цепь"          
];
  
//8.Создать массив, состоящий из объектов
const parking = [
  {
    name: "Honda",
    speed: 250,
    year: 2022,
    color: "Красный"
  },
  {
    name: "Yamaha",
    speed: 280,
    year: 2023,
    color: "Синий"
  },
  {
    name: "BMW",
    speed: 260,
    year: 2021,
    color: "Белый"
  }
];

parking.push({
  name: "Kawasaki",
  speed: 300,
  year: 2024,
  color: "Зеленый"
});

console.log(parking);

//9.Создать еще один массив, состоящих из тех же мотоциклов
const moonRovers = [{
    name: "Moon-1",
    speed: 50,
    year: 2030,
    color: "Серебристый"
  },
  {
    name: "Lunar-Bike",
    speed: 40,
    year: 2035,
    color: "Золотой"
  }
];

const bigGarage = [...parking, ...moonRovers];
console.log(bigGarage);

//10.Написать функцию, которая принимает 
// массив сущностей с задания №9.
const markRareVehicles = (vehiclesArray) => {
  const updatedGarage = vehiclesArray.map(item => {
    
    if (item.year > 2000) {
      item.isRare = true;
    } else {
      item.isRare = false;
    }
    return item;
  });
  return updatedGarage;
}

let finalGarage = markRareVehicles(bigGarage);

console.log(finalGarage);