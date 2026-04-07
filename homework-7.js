import { socialMediaComments } from './comments.js';

//ЗАДАНИЕ 2: Создать массив чисел от 1 до 10.
//получить массив чисел, начиная с 5. 
let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let bigNumbers = numbers.filter(num => num >= 5);
console.log(bigNumbers);

//ЗАДАНИЕ 3: Создать массив строк, относящихся к любой сущности 
let motorcycleParts = ["Бак", "Крыло", "Фильтр", "Руль", "Диски"];
let hasDisks= motorcycleParts.includes("Диски");
console.log("Диски есть?", hasDisks ? "Да" : "Нет");

//ЗАДАНИЕ 4: Написать функцию, аргументом будет принимать массив 
// и переворачивать его
function flipArray(anyArray) {
  anyArray.reverse();
  return anyArray;
}

numbers = [5, 6, 7, 8, 9, 10];
console.log(flipArray(numbers));

const motorcycleParts1 = ["Бак", "Крыло", "Фильтр", "Руль", "Диски"];
console.log(flipArray(motorcycleParts1));

// ЗАДАНИЕ 7: Фильтр по почте .com 
const comComments = socialMediaComments.filter(comment => {
  return comment.email.includes('.com');
});
console.log(comComments);

//ЗАДАНИЕ 8: Перебрать массив -
// пользователям с id меньше < 5 - postId: 2,
//остальным postId: 1
const updatedComments = socialMediaComments.map(comment => {
  if (comment.id <= 5) {
    return { ...comment, postId: 2 };
  } else {
    return { ...comment, postId: 1 };
  }
});
console.log(updatedComments);

//ЗАДАНИЕ 9: объекты из id и имя) 
const shortComments = socialMediaComments.map(comment => {
  return { id: comment.id, author: comment.author };
});
console.log(shortComments);

//ЗАДАНИЕ 10: массив добавить-isInvalid тем что > 180 символов
//true, меньше - false.
const checkedComments = socialMediaComments.map(comment => {
  const isInvalid = comment.text.length > 180;
  return { ...comment, isInvalid: isInvalid };
});
console.log(checkedComments);

//ЗАДАНИЕ 11:через reduce,map вывести массив почт 
const emailsMap = socialMediaComments.map(c => c.email);

const emailsReduce = socialMediaComments.reduce((acc, c) => {
  acc.push(c.email);
  return acc;
}, []);
console.log(emailsMap);
console.log(emailsReduce);

//ЗАДАНИЕ 12:через toString(), join() перебрать массив 
// с з/д №11,привести к строке
const finalString = emailsMap.join(', ');
console.log(finalString);
