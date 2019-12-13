
// /* when checkbox is clicked, container id is added an overlay class */

let hambugerCheckBox = document.getElementById('hamburger-button');
let slidingMenu = document.getElementById('sliding-menu');

 function dim(e){
   var overlay = document.getElementById('overlay');
   // overlay.classList.toggle('overlay');
}
let slideMenu = ()=>{
  if(hambugerCheckBox.checked == true){
    slidingMenu.style.width = "250px";
  }else if(hambugerCheckBox.checked == false){
    slidingMenu.style.width ="0px";
  }
}


/*
if our checkbox is clicked then we toggle in and out our menu
*/
if (hambugerCheckBox.checked == true){
  alert('hamburger is checked');
  console.log('he')
}

function revealBottom(){
  /*hover hero quote animation*/
  let heroQuote = document.getElementById('hero-quote-bottom');
  heroQuote.classList.add('reveal');
}
function hideBottom(){
  let heroQuote = document.getElementById('hero-quote-bottom');
  heroQuote.classList.remove('reveal');
}
