function validateName(name) {
  if (typeof variable !== 'undefined') {
    throw new TypeError('Name must not be blank');
  } else {
    console.log(name);
  }
}

function create(name) {
  return item = {
    id: 'cuid()',
    name: name,
    checked: false
  };
}

export default {
  validateName,
  create
};