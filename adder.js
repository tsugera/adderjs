function validate(input) {
  let regex = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
  let adress = email.value;
  if (regex.test(adress))
    return true;   
  alert("Введите корректный email");
  return false;
}
let form = document.forms["validationField"];
let email = form["email"];
let resultBlock = document.getElementById("resultBlock");
 
form.onsubmit = () => false;
document.getElementById("add").addEventListener('click', putElement);
 
function putElement() {
  if (!validate(email))
      return;
  let value = email.value;
  let newElementLi = document.createElement('li');
  newElementLi.innerText = value;
  resultBlock.appendChild(newElementLi);
}