var $saveButton = document.querySelector('.save-button');
var $title = document.querySelector('#title');
var $photo = document.querySelector('#photo');
var $note = document.querySelector('#note-input');
var $img = document.querySelector('img');

function saveAction(event) {
  event.preventDefault();
  data.entries.push({});
  data.entries[data.nextEntryId - 1].imgSrc = $photo.value;
  data.entries[data.nextEntryId - 1].title = $title.value;
  data.entries[data.nextEntryId - 1].notes = $note.value;
  data.nextEntryId++;

  $photo.value = '';
  $title.value = '';
  $note.value = '';
  $img.setAttribute('src', 'images/placeholder-image-square.jpg');
  storage(data);
}

function imgUpdate(event) {
  $img.setAttribute('src', $photo.value);
}

function storage(input) {
  var dataJSON = JSON.stringify(input);
  localStorage.setItem('userData', dataJSON);
}

$saveButton.addEventListener('click', saveAction);
$photo.addEventListener('keyup', imgUpdate);
