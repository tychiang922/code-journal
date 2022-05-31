/* global data */
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

function appendEntryToDOM() {
  var $li = document.createElement('li');
  var $rowDiv = document.createElement('div');
  $rowDiv.setAttribute('class', 'row');

  var $imgColDiv = document.createElement('div');
  $imgColDiv.setAttribute('class', 'column-half mb-20p mt-20p');

  var $imgElement = document.createElement('img');
  $imgElement.setAttribute('src', 'images/placeholder-image-square.jpg');

  var $txtColDiv = document.createElement('div');
  $txtColDiv.setAttribute('class', 'column-half pt-20p mb-20p entry-txt');

  var $h3Title = document.createElement('h3');
  $h3Title.textContent = 'hello';
  $txtColDiv.append($h3Title);
  var $pNotes = document.createElement('p');
  $pNotes.textContent = 'testing';
  $txtColDiv.append($pNotes);

  $imgColDiv.append($imgElement);
  $rowDiv.append($imgColDiv);
  $rowDiv.append($txtColDiv);
  $li.append($rowDiv);
}

appendEntryToDOM();
