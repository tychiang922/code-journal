var $title = document.querySelector('#title');
var $photo = document.querySelector('#photo');
var $note = document.querySelector('#note-input');
var $img = document.querySelector('img');
var $form = document.querySelector('form');

function saveAction(event) {
  event.preventDefault();
  var dataObject = {
    imgSrc: $photo.value,
    title: $title.value,
    notes: $note.value,
    id: data.nextEntryId
  };
  data.entries.unshift(dataObject);
  data.nextEntryId++;
  $form.reset();
  $img.setAttribute('src', 'images/placeholder-image-square.jpg');
}

function imgUpdate(event) {
  $img.setAttribute('src', $photo.value);
}

$form.addEventListener('submit', saveAction);
$photo.addEventListener('keyup', imgUpdate);
