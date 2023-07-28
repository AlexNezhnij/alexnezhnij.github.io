'use strict';

console.log("123")

function applyBodyClass() {

    document.body.classList.add( localStorage.getItem('bodyClass'));
    console.log("inSetClass", localStorage.getItem('bodyClass'))

}

console.log("preSetClass")

applyBodyClass();

console.log("afterSetClass")