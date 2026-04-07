import { socialMediaComments } from './comments.js';

//ЗАДАНИЕ 2: Создать массив чисел от 1 до 10.
//получить массив чисел, начиная с 5.
let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let filteredNumbers = numbers.filter(num => num >= 5);
console.log(filteredNumbers);

//ЗАДАНИЕ 3: Создать массив строк, относящихся к любой сущности
const motorcycleParts = ["Бак", "Крыло", "Фильтр", "Руль", "Диски"];
const hasDisks = motorcycleParts.includes("Диски");
console.log("Диски есть?", hasDisks ? "Да" : "Нет");

//ЗАДАНИЕ 4: Написать функцию, аргументом будет принимать массив 
// и переворачивать его
function flipArray(reverseArray) {
  reverseArray.reverse();
  return reverseArray;
}

numbers = filteredNumbers;
console.log(flipArray(numbers));

const partsList = ["Бак", "Крыло", "Фильтр", "Руль", "Диски"];
console.log(flipArray(partsList));

// ЗАДАНИЕ 7: Фильтр по почте .com
const comComments = socialMediaComments.filter(comment => {
  return comment.email.includes('.com');
});
console.log(comComments);

//ЗАДАНИЕ 8: Перебрать массив -
// пользователям с id меньше <= 5 - postId: 2,
//остальным postId: 1
const updatedComments = socialMediaComments.map(comment => ({
  ...comment,
  postId: comment.id <= 5 ? 2 : 1
}));
console.log(updatedComments);

//ЗАДАНИЕ 9: объекты из id и имя)
const shortComments = socialMediaComments.map(comment => {
  return { id: comment.id, author: comment.author };
});
console.log(shortComments);

//ЗАДАНИЕ 10: массив добавить-isInvalid тем что > 180 символов
//true, меньше - false.
const validatedComments = socialMediaComments.map(comment => {
  const isInvalid = comment.text.length > 180;
  return { ...comment, isInvalid: isInvalid };
});
console.log(validatedComments);

//ЗАДАНИЕ 11:через reduce,map вывести массив почт
const byMap = socialMediaComments.map(c => c.email);

const byReduce = socialMediaComments.reduce((acc, c) => {
  acc.push(c.email);
  return acc;
}, []);
console.log(byMap);
console.log(byReduce);

//ЗАДАНИЕ 12:через toString(), join() перебрать массив
// с з/д №11,привести к строке
const finalString = byMap.join(', ');
console.log(finalString);
