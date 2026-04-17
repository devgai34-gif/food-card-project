import { products } from './products.js';

// 4. с .reduce(), получить массив объектов,
// ключь название продукта,значение - описание
const productMap = products.reduce((acc, product) => {
    acc[product.name] = product.subtitle;
    return acc;
}, {});
console.log("Карта продуктов:", productMap);

//5."Сколько карточек отобразить? От 1 до 5"
// и +  (проверка if).
function getCountFromUser() {
    let count = prompt("Сколько карточек отобразить? От 1 до 5");
    count = parseInt(count);

    if (isNaN(count) || count < 1 || count > 5) {
        alert("введите число от 1 до 5!");
        return null;
    }
    return count;
}

function renderCards(count) {
    if (!count) return;

    const list = document.querySelector('.card-list');
    const templateElement = document.querySelector('.card-container'); 
    
    if (!templateElement) return;

    const cardTemplate = templateElement.cloneNode(true);

   list.innerHTML = '';
   list.replaceChildren(); 

    const selectedProducts = products.slice(0, count);

    selectedProducts.forEach(item => {
        const newCard = cardTemplate.cloneNode(true);

        newCard.querySelector('h2').textContent = item.name;
        newCard.querySelector('.product-subtitle').textContent = item.subtitle;
        
        const productImg = newCard.querySelector('img[alt]');
        if (productImg) {
            productImg.src = item.img;
        }
        
        const priceSpan = newCard.querySelector('.price-block span');
        if (priceSpan) {
            priceSpan.innerHTML = `${item.price} <span>&#8381;</span>`;
        }

        list.appendChild(newCard);
    });
}

const number = getCountFromUser();
renderCards(number);