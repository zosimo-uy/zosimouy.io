const navLink = document.querySelectorAll(`.nav-link`);
const secTion = document.querySelectorAll(`section`);

function activeMenu (){
  let leng = secTion.length;
  while (--leng && window.scrollY +97 < secTion[leng].offsetTop){}
  navLink.forEach(ltx => ltx.classList.remove(`active`));
  navLink[leng].classList.add(`active`);
}

activeMenu();
window.addEventListener(`scroll`,activeMenu);

let modalInfo =[];

const modalName = document.getElementById(`modalName`);
const modalEmail = document.getElementById(`modalEmail`);
const modalText = document.getElementById(`modalText`);

function captureModal(){

  let contactInfo = {
    modalName :  modalName.value,
    modalEmail :  modalEmail.value,
    modalText :  modalText.value
  };

  let storedContacts = localStorage.getItem(contactInfo.modalEmail);

  let contactForms = storedContacts ? JSON.parse(storedContacts) : []; 
  contactForms.push(contactInfo);

  localStorage.setItem(`Contact`, JSON.stringify(contactForms));
}

window.onload = function (){
  let contactForm = document.getElementById(`contactForm`);
  contactForm.onsubmit = captureModal;
};