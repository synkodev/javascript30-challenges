/** The <form> element */
const addItems = document.querySelector('.add-items'),
/** The <ul> element list that will contain all the items */
  itemsList = document.querySelector('.plates'),
/** Array that stores the names of the plates */
  items = [],
  btnClear = document.querySelector('button');

/** Pushes the value of the input text field inside of the `items` array */
function addItem(event) {
  event.preventDefault();
  const plate = this.querySelector('[type="text"]').value;
  const item = {
    plate,
    done: false
  }
  items.push(item);
  localStorage.setItem('items', JSON.stringify(items));
  addItemToList(item, itemsList);
  this.reset();
}

/** Creates the HTML corresponding to the item and inserts at the end of the list */
function addItemToList(item, list) {
  const listItem = `
    <li>
      <input type="checkbox" data-index="${items.indexOf(item)}" id="data-${items.indexOf(item)}" ${item.done && 'checked'}/>
      <label for="data-${items.indexOf(item)}">${item.plate}</label>
    </li>
  `
  list.insertAdjacentHTML('beforeend', listItem);
}

/** Fills the <ul> with list items based on what has been stored in localStorage */
function populateList() {
  if (localStorage.getItem('items') === null) return;
  items.push(...JSON.parse(localStorage.getItem('items')))
  if (items.length > 0) {
    itemsList.innerHTML = '';
    items.forEach(
      item => addItemToList(item, itemsList)
    );
  }
}

function toggleDone({ target }) {
  if (target.localName !== "input") return;
  items[target.dataset.index].done = !items[target.dataset.index].done;
  localStorage.setItem('items', JSON.stringify(items));
}

function clearAll() {
  localStorage.removeItem('items');
  items.splice(0, items.length);
  itemsList.innerHTML = '';
}

populateList();

/* Listen to the form submit */
addItems.addEventListener('submit', addItem);

/* Listen to the checkbox being checked */
itemsList.addEventListener('click', toggleDone);

/* Listen to the clear button being pressed */
btnClear.addEventListener('click', clearAll);
