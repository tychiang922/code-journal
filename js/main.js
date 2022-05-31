var $txtInput = document.querySelectorAll('.txt-input');
var $saveButton = document.querySelector('.save-button');
var $title = document.querySelector('#title');
var $photo = document.querySelector('#photo');
var $note = document.querySelector('#note-input');

function saveAction(event) {
  for (var inputNode = 0; inputNode < $txtInput.length; inputNode++) {
    if ($txtInput[inputNode] === '') {
      event.preventDefault();
    }
  }
  event.preventDefault();
  data.entries.push({});
  data.entries[data.nextEntryId - 1].imgSrc = $photo.value;
  data.entries[data.nextEntryId - 1].title = $title.value;
  data.entries[data.nextEntryId - 1].notes = $note.value;
  data.nextEntryId++;

  $photo.value = '';
  $title.value = '';
  $note.value = '';
}

$saveButton.addEventListener('click', saveAction);
