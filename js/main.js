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

function appendEntryToDOM(inputData) {
  var $li = document.createElement('li');
  var $rowDiv = document.createElement('div');
  $rowDiv.setAttribute('class', 'row');
  var $imgColDiv = document.createElement('div');
  $imgColDiv.setAttribute('class', 'column-half mt-20p mb-20p');
  var $imgElement = document.createElement('img');
  $imgElement.setAttribute('src', inputData.imgSrc);
  var $txtColDiv = document.createElement('div');
  $txtColDiv.setAttribute('class', 'column-half pt-20p mb-40p entry-txt');
  var $h3Title = document.createElement('h3');
  $h3Title.setAttribute('class', 'mt-20p');
  $h3Title.textContent = inputData.title;
  $txtColDiv.append($h3Title);
  var $pNotes = document.createElement('p');
  $pNotes.setAttribute('class', 'mt-20p lh-1p25em font-15px fontw-500');
  $pNotes.textContent = inputData.notes;
  $txtColDiv.append($pNotes);

  $imgColDiv.append($imgElement);
  $rowDiv.append($imgColDiv);
  $rowDiv.append($txtColDiv);
  $li.append($rowDiv);
  return $li;
}

var $ul = document.querySelector('ul');
for (var dataEntryIndex = 0; dataEntryIndex < data.entries.length; dataEntryIndex++) {
  var liEntry = appendEntryToDOM(data.entries[dataEntryIndex]);
  $ul.append(liEntry);
}
