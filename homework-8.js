import { products } from './products.js';

// 4. С использованием .reduce() получаем массив объектов:
// ключ — название продукта, значение — описание.
const productMap = products.reduce((acc, product) => {
    const newEntry = { [product.name]: product.subtitle };
    acc.push(newEntry);
    return acc;
}, []);

console.log("Карта продуктов:", productMap);

function getCountFromUser() {
    let count = prompt("Сколько карточек отобразить? От 1 до 5");
    count = parseInt(count);

    if (isNaN(count) || count < 1 || count > 5) {
        alert("Ошибка! введите число от 1 до 5.");
        // РЕКУРСИЯ
        return getCountFromUser();
    }
    return count;
}

function renderCards(data) {
    if (!data || data.length === 0) return;

    const list = document.querySelector('.card-list');
    const templateElement = document.querySelector('.card-container');
    if (!templateElement || !list) return;

    const cardTemplate = templateElement.cloneNode(true);
    
    list.innerHTML = '';

    data.forEach(item => {
        const newCard = cardTemplate.cloneNode(true);

        newCard.querySelector('h2').textContent = item.name;
        newCard.querySelector('p').textContent = item.subtitle;
        
        const productImg = newCard.querySelector('img[alt]');
        if (productImg) {
            productImg.src = `img-cards/${item.img}.png`;
        }
        
        const priceSpan = newCard.querySelector('.price-block span');
        if (priceSpan) {
            priceSpan.innerHTML = `${item.price.toLocaleString()} <span>&#8381;</span>`;
        }

        list.appendChild(newCard);
    });
}

const count = getCountFromUser();
const selectedProducts = products.slice(0, count);
renderCards(selectedProducts);
