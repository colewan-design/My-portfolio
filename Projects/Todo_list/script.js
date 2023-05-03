const myForm = document.querySelector('#my-form');
const titleInput = document.querySelector('#title');
const descriptionInput = document.querySelector('#description');
const timeInput = document.querySelector('#time');
const msg = document.querySelector('.msg');
const todo = document.querySelector('#todo');


myForm.addEventListener('submit', onSubmit);
function onSubmit(e){
   e.preventDefault();
   if(titleInput.value === '' ||descriptionInput.value === '' || timeInput.value === ''){
      msg.classList.add('error');
      msg.innerHTML = 'Please fill out all fields';
      setTimeout(() => msg.remove(), 3000);
   }
   else {
      const li = document.createElement('li');
      li.appendChild(document.createTextNode(`${titleInput.value} - ${descriptionInput.value} - ${timeInput.value}`));

      todo.appendChild(li);
      titleInput.value = '';
      descriptionInput.value = '';
      timeInput.value = '';
}
}