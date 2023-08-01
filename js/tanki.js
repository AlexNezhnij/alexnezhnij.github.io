'use strict';

console.log("fuuuuuuuuuuuuuuuuu")
applyBodyClass(localStorage.getItem('bodyClass'));


function setDivHeightToThreeFourth() {
    const tankiMain = document.getElementById('tankiMain')
    const width = tankiMain.clientWidth;
    const height = (3 / 4) * width; // Высота равна 3/4 от ширины
  
    tankiMain.style.height = height + 'px';
    console.log('fooooo');
    
  }
  setDivHeightToThreeFourth()
  window.addEventListener("resize", setDivHeightToThreeFourth);