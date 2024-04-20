/*
 * The idea is to mark every single checkbox between the last one checked and the one that
 * activated the event. For that, we'll need a variable to hold the last clicked element
 * and a boolean one to mark if the current element is in between the two or not.
 *
 * When holding Shift key, the last element will remain the one that STARTED the selection.
 * When not holding Shift key, the lastChecked will be updated.
 *
 * Future update: add button to check / uncheck all!
 */
const items = document.querySelectorAll('.inbox input');

items.forEach(item => item.onclick = handleClicked);

let lastChecked;

function handleClicked(event) {
  console.log(lastChecked);
  if (event.shiftKey && lastChecked) {
    let inBetween = false;
    items.forEach(item => {
      if (item === this || item === lastChecked) {
        inBetween = !inBetween;
      }
      if (inBetween) item.checked = this.checked;
    })
  } else {
    lastChecked = this;
  }
}
