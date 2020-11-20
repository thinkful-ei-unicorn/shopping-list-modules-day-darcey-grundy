/* eslint-disable no-unused-vars */
import item from './item.js';



function findById(id) {
  items.find(items.id === id);
}

function addItem(name) {
  try {
    item.validateName(name);
    item.create(name);
    this.items.push(item.create(name));
  } catch (error) {
    console.log(`${error.message}`);
  }
}

function findAndToggleChecked(id) {
  this.findById(id);
  this.checked = !this.checked;
}

function findAndUpdateName(id, newName) {
  try {
    item.validateName(id, newName);
    findById;
  } catch (error) {
    console.log('Cannot update name: ${error.message}');
  }
}

function findAndDelete(id) {
  this.items.remove(findById());
}

const toggleCheckedFilter = function() {
  this.hideCheckedItems = !this.hideCheckedItems;
};

const items = '';
const hideCheckedItems = '';

export default {
  items: [],
  hideCheckedItems: false,
  findById,
  addItem,
  findAndToggleChecked,
  findAndUpdateName,
  toggleCheckedFilter,
  findAndDelete,
};