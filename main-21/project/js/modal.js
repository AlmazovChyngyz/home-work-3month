// Modal
//
const modal = document.querySelector('.modal');
const modalTriggerBtn = document.querySelector('#btn-get');
const modalCloseBtn = document.querySelector('.modal_close');

const openModal = () => {
    modal.style.display = 'block';
    document.body.style.overflow = 'hidden'
}
const closeModal = () => {
    modal.style.display = 'none'
    document.body.style.overflow = ''
}

modalTriggerBtn.onclick = () => openModal();
modalCloseBtn.onclick = () => closeModal();

modal.onclick = (event) => {
    if (event.target === modal) {
        closeModal();
    }
}

setTimeout(openModal, 10000);

let modalTriggered = false;

const onScrollDown = () => {
    if (!modalTriggered && (window.innerHeight + window.scrollY) >= document.body.offsetHeight) {
        openModal();
        modalTriggered = true;
        window.removeEventListener('scroll', onScrollDown);
    }
};

window.addEventListener('scroll', onScrollDown);


// POST DATA

const formElement = document.querySelector('form');

const postData = (url, data) => {
    const response = fetch (url, {
        method: 'POST',
        headers: { 'Content-type' : 'application/json'},
        body: data
    })
    return response
}

const bindPostData = (form) => {
    form.onsubmit = (event) => {
        event.preventDefault()
        const formData = new FormData(form)
        const obj = {}
        formData.forEach((item, index ) => {
            obj[index] = item
        })
        const json = JSON.stringify(obj)
        if (window.location.pathname === "/main-21/project/") {
            postData('server.php', json)
        } else {
            postData('../server.php', json)
        }
        // postData('server.php', json)
    }
}

bindPostData(formElement)

// const postData = (form) => {
//     form.addEventListener("submit", (event) => {
//         event.preventDefault();
//
//         const request = new XMLHttpRequest();
//         request.open("POST", "server.php");
//         request.setRequestHeader("Content-type", "application/json");
//
//         const formData = new FormData (form);
//         const obj = {};
//         formData.forEach( (item, index) => {
//             console.log (item)
//         })
//         const json = JSON.stringify(obj);
//         request.send(json)
//     })
// }
// postData(formElement)