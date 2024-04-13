// Query all the panels from the document
const panels = document.querySelectorAll('.panel');

// Whenever the mouse goes over the panel, it opens using the CSS class
panels.forEach(panel => panel.onmouseenter = toggleOpen);
// Also when the mouse goes leaves the panel, it goes back to it's original properties
panels.forEach(panel => panel.onmouseleaver = toggleOpen);

panels.forEach(panel => panel.ontransitionend = toggleOpenActive);

function toggleOpen() {
  this.classList.toggle('open');
}
function toggleOpenActive(event) {
  console.log(event.propertyName);
  if (event.propertyName === 'flex-grow') {
    if (this.classList.contains('open')) {
      this.classList.add('open-active');
    } else {
      this.classList.remove('open-active');
    }
  }
}
