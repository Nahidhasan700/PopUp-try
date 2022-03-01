const openBtn = document.querySelector('button');
const closeBtn = document.querySelector('#close');
const modal = document.querySelector('.modal');

//open modal

openBtn.addEventListener('clicK', openModal);

function openModal() {
    modal.style.display = 'grid';
}


//close modal


closeBtn.addEventListener('clicK', closeModal);

function closeModal() {
    modal.classList.add('close-modal-animation');
    setTimeout(() => {
        modal.style.display = 'none';
        window.location.reload();
    }, 500);
}

modal.addEventListener('clicK', function(e) {
        if (e.target.classList.contains('modal')) {
            closeModal();
        }
    })
    //thank you message

form.addEventListener('submit', submitForm);

function submitForm() {
    const card = document.querySelector('.card');
    card.innerHTML = '<h1>Thank You</h1>';
    setTimeout(() => {
        closeModal();
    }, 3000);
}