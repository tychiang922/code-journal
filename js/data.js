/* exported data */

var data = {
  view: 'entry-form',
  entries: [],
  editing: null,
  nextEntryId: 1
};

var previousDataJSON = localStorage.getItem('userData');
if (previousDataJSON !== null) {
  data = JSON.parse(previousDataJSON);
}

function storage(event) {
  var dataJSON = JSON.stringify(data);
  localStorage.setItem('userData', dataJSON);
}

window.addEventListener('beforeunload', storage);
