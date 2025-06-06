const formbutton = document.getElementById('form-button');
const formdiv = document.getElementById('form');
const closee = document.querySelector('#close-btn');

formbutton.addEventListener('click', function() {

    formdiv.classList.toggle('block');
})

closee.addEventListener('click', function() {

    formdiv.classList.toggle('block');
}
)