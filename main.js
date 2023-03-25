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