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

  const pixel1 = document.getElementById("pixel1");

  var cordinatX = 0;
  var cordinatY = 0;

  document.addEventListener("keydown", function(event) {

    if (event.key === "ArrowUp") {
      cordinatY -= 2;
      pixel1.style.transform = `translate(${cordinatX}px, ${cordinatY}px)`;
     
    } else if (event.key === "ArrowDown") {
      cordinatY += 2;
      pixel1.style.transform = `translate(${cordinatX}px, ${cordinatY}px)`;
      
    } else if (event.key === "ArrowLeft") {
      cordinatX -= 2;
      pixel1.style.transform = `translate(${cordinatX}px, ${cordinatY}px)`;
     
    } else if (event.key === "ArrowRight") {
      cordinatX += 2;
      pixel1.style.transform = `translate(${cordinatX}px, ${cordinatY}px)`;
      
    }
  });
  
  
  
  
  
  
  