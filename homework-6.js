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
const updateMotoSpeed= {
  brand: "Yamaha",   
  model: "R-1",          
  year: 2020,             
  color: "Черный",         
  transmission: "Механика"  
};
updateMotoSpeed.owner = person;
console.log(updateMotoSpeed);

//5. Написать функцию которая аргументом будет принимать объект,
// описанный в пункте №4.
function checkMaxSpeed (updateMotoSpeed) {
  updateMotoSpeed.maxSpeed = updateMotoSpeed.maxSpeed ?? 200;
  console.log("Максимальная скорость установлена");
}
checkMaxSpeed(updateMotoSpeed);
console.log(updateMotoSpeed.maxSpeed);

//6. Написать функцию, которая получает первым аргументом  — объект,
//а вторым аргументом — свойство объекта
function showObjectProperty(obj, key) {
  console.log(`его ${key} — это ${obj[key]}`);
}
const motoInfo = {
  brand: "Yamaha XZ-400",
  color: "Черный"
};
showObjectProperty (motoInfo, "brand"); 
showObjectProperty (motoInfo, "color"); 

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
    year: 1999,
    color: "Красный"
  },
  {
    name: "Yamaha",
    speed: 280,
    year: 1998,
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
const markRareVehicles = (vehiclesArray) => 
  vehiclesArray.map(item => ({
    ...item,
    isRare: item.year > 2000 ? true : false
  }));
let finalGarage = markRareVehicles(bigGarage);
function displayFinalResult(data) {
  data.forEach(m => console.log(`Объект: ${m.name}, Редкий: ${m.isRare}`));
}
displayFinalResult(finalGarage);

