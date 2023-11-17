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

                clearInterval(intervalId)
            }
        })
    }
}

