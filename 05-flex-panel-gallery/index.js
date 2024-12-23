const panels = document.querySelectorAll('.panel');

function toggleOpen() {
  const openPanel = document.querySelector('.open');
  if (openPanel) openPanel.classList.remove('open');
  this.classList.toggle('open');
}

function toggleActive(e) {
  //Safari transitionend event.propertyName === flex
  //Chrome + FF transitionend event.propertyName === flex-grow
  if (e.propertyName.includes('flex')) {
    this.classList.toggle('open-active');
  }
}

panels.forEach((panel) => panel.addEventListener('click', toggleOpen));
panels.forEach((panel) =>
  panel.addEventListener('transitionend', toggleActive)
);
