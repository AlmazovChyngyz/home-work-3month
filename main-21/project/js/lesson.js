// Phone check

const phoneInput = document.querySelector("#phone_input")
const phoneButton = document.querySelector("#phone_button")
const phoneSpan = document.querySelector("#phone_result")

const regExp = /^\+996 [2579]\d{2} \d{2}-\d{2}-\d{2}$/;

phoneButton.addEventListener("click", () =>{
    if (regExp.test(phoneInput.value)) {
        phoneSpan.innerHTML = "Ok";
        phoneSpan.style.color = "green"
    }else {
        phoneSpan.innerHTML = "Not Ok";
        phoneSpan.style.color = "red";
    }
})

//Tab slider

const tabsContentCards = document.querySelectorAll('.tab_content_block')
const tabsItems = document.querySelectorAll('.tab_content_item')
const tabsItemsParent = document.querySelector('.tab_content_items')

let index = 0
const hideTabsContentCards = () => {
    tabsContentCards.forEach((tabContentCard) => {
        tabContentCard.style.display = 'none'
    })
    tabsItems.forEach((tabItem) =>{
        tabItem.classList.remove('tab_content_item_active')
    })
}
// hideTabsContentCards()

const showTabsContentCards = (indexElement = 0) => {
    tabsContentCards[indexElement].style.display = 'block'
    tabsItems[indexElement].classList.add('tab_content_item_active')
}

const changeTabAuto = () => {
    hideTabsContentCards()
    showTabsContentCards(index)

    index= (index+1) % tabsContentCards.length
}

hideTabsContentCards()
showTabsContentCards(0)

const intervalId = setInterval(changeTabAuto, 3000)

tabsItemsParent.onclick = (event) => {
    if (event.target.classList.contains('tab_content_item')) {
        tabsItems.forEach((tabItem, tabItemIndex) => {
            if (event.target === tabItem) {
                hideTabsContentCards()
                showTabsContentCards(tabItemIndex)
                index = tabItemIndex
                clearInterval(intervalId)
            }
        })
    }
}


//Converter

// const somInput = document.querySelector("#som");
// const usdInput = document.querySelector("#usd");
// const eurInput = document.querySelector("#eur");
//
// const converter = (element, targetElement, type) => {
//     element.oninput = () => {
//         const request = new XMLHttpRequest();
//         request.open('GET','../data/converter.json');
//         request.setRequestHeader('Content-type', 'application/json');
//         request.send()
//
//         request.onload = ()=> {
//             const data = JSON.parse(request.response)
//             switch (type){
//                 case 'som':
//                     targetElement.value = (element.value / data.usd).toFixed(2);
//                     break;
//                 case 'usd':
//                     targetElement.value = (element.value * data.usd).toFixed(2);
//                     break;
//                 case 'eur':
//                     targetElement.value = (element.value * data.eur).toFixed(2);
//                     break;
//                 default:
//                     break;
//             }
//
//             element.value === "" && (targetElement.value = "")
//         }
//     }
// }
//
// converter(somInput, usdInput, 'som');
// converter(usdInput, somInput, 'usd');
// converter(usdInput, eurInput, 'eur');
// converter(eurInput, usdInput, 'usd')


// Версия с if/else
// if (type === 'som') {
//     targetElement.value = (element.value/data.usd).toFixed(2)
// }else  if (type ==='usd') {
//     targetElement.value = (element.value*data.usd).toFixed(2)
// }


//Converter

const somInput = document.querySelector("#som");
const usdInput = document.querySelector("#usd");
const eurInput = document.querySelector("#eur");
const converter = (element, targetElement1, targetElement2, type) => {
    element.oninput = () => {
        const request = new XMLHttpRequest();
        request.open('GET', '../data/converter.json');
        request.setRequestHeader('Content-type', 'application/json');
        request.send();

        request.onload = () => {
            const data = JSON.parse(request.response);
            switch (type) {
                case 'som':
                    targetElement1.value = convertCurrency(element.value, data.som / data.usd).toFixed(2);
                    targetElement2.value = convertCurrency(element.value, data.som / data.eur).toFixed(2);
                    break;
                case 'usd':
                    targetElement1.value = convertCurrency(element.value, data.usd * data.som).toFixed(2);
                    targetElement2.value = convertCurrency(element.value, data.usd / data.eur).toFixed(2);
                    break;
                case 'eur':
                    targetElement1.value = convertCurrency(element.value, data.eur / data.usd).toFixed(2);
                    targetElement2.value = convertCurrency(element.value, data.eur * data.som).toFixed(2);
                    break;
                default:
                    break;
            }

            element.value === "" && (targetElement1.value = targetElement2.value = "");
        };
    };
};

const convertCurrency = (amount, exchangeRate) => {
    return amount * exchangeRate;
};

converter(somInput, usdInput, eurInput, 'som', 'usd', 'eur');
converter(usdInput, somInput, eurInput, 'usd', 'som', 'eur');
converter(eurInput, usdInput, somInput, 'eur', 'usd', 'som');




//CARD switcher

const card = document.querySelector('.card');
const btnPrev = document.querySelector('#btn-prev');
const btnNext = document.querySelector('#btn-next');

let count = 0;
function fetchNum(direction) {
    direction === 'next' ? count++ : count--;

    if (count > 200) {
        count = 1;
    } else if (count < 1) {
        count = 200;
    }

    fetch(`https://jsonplaceholder.typicode.com/todos/${count}`)
        .then(response => response.json())
        .then(data => {
            card.innerHTML = `
                <p>${data.title}</p>
                <p style="color: ${data.completed ? 'green' : 'red'}">${data.completed}</p>
                <span>${data.id}</span>
            `;
        });
};

btnNext.onclick = () => {
    fetchNum('next');
};

btnPrev.onclick = () => {
    fetchNum('prev');
};

fetchNum('next');



// 2) Так же сделать отдельный fetch запрос на эту
// ссылку: 'https://jsonplaceholder.typicode.com/posts' и отобразить данные просто в консоли

fetch('https://jsonplaceholder.typicode.com/posts')
    .then( (response) => response.json())
    .then((data) => {
    console.log (data)
})