function applyBodyClass(bodyClass) {
    document.body.classList.remove("background2", "background3", "background1");
    document.body.classList.add(bodyClass);
  }

function setBodyClass(bodyClass) {
    localStorage.setItem('bodyClass', bodyClass);
}
