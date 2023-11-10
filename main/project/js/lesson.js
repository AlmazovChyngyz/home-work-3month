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