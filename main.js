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

// var prevScrollpos = window.pageYOffset;
// function ScrollMenu (){
//   var currentScrollPos = window.pageYOffset;
//   if (prevScrollpos > currentScrollPos) {
//     document.getElementsById("taas").classList.add = `none`;
//   } else {
//     document.getElementsById("taas").classList.add = `block`;
//   }
//   prevScrollpos = currentScrollPos;
// }

// ScrollMenu();
// window.addEventListener(`scroll`,ScrollMenu);


/*const audio = new Audio();
audio.src = `./click.mp3`;

// function soundClick(){
//   audio.play();
//   window.addEventListener(`click`,soundClick);
// }

// soundClick(secTion);

*/