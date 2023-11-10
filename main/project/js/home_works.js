//HOME WORK 1 (PART1)

const gmailInput = document.querySelector("#gmail_input");
const gmailButton = document.querySelector("#gmail_button");
const gmailSpan = document.querySelector("#gmail_result");

const regExp = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\.[a-zA-Z]{2,}$/;

gmailButton.addEventListener("click", () => {
    if (regExp.test(gmailInput.value)) {
        gmailSpan.innerHTML = "Ok";
        gmailSpan.style.color = "green";
    }else {
        gmailSpan.innerHTML = "Not ok";
        gmailSpan.style.color = "red";
    }
})


//HOME WORK 1 (PART2)

let position = 0;

function recursionAnimation(){
    position = position + 5;
    if (position > 450) return;
    document.querySelector(".child_block").style.left = position +"px";
    animation();
}
function animation(){
    setTimeout(recursionAnimation, 100);
}
animation();