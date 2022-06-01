/* global data */
var $title = document.querySelector('#title');
var $photo = document.querySelector('#photo');
var $note = document.querySelector('#note-input');
var $img = document.querySelector('img');
var $form = document.querySelector('form');
var $newEntryHead = document.querySelector('.new-entry');
var $editEntryHead = document.querySelector('.edit-entry');

$form.addEventListener('submit', function saveAction(event) {
  if (data.view === 'entry-form') {
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
    var newEntry = appendEntryToDOM(data.entries[0]);
    $ul.prepend(newEntry);
    switchToEntries(event);
  }
  if (data.view === 'edit-entry') {
    event.preventDefault();
    var $liAll = document.querySelectorAll('li');
    for (var dataIndex = 0; dataIndex < data.entries.length; dataIndex++) {
      if (data.entries[dataIndex].id === data.editing.id) {
        data.editing = {
          imgSrc: $photo.value,
          title: $title.value,
          notes: $note.value,
          id: data.entries[dataIndex].id
        };
        data.entries.splice(dataIndex, 1, data.editing);
        var editedEntry = appendEntryToDOM(data.entries[dataIndex]);
        $liAll[dataIndex].replaceWith(editedEntry);
        switchToEntries(event);
        break;
      }
    }
    $form.reset();
    $img.setAttribute('src', 'images/placeholder-image-square.jpg');
  }
  defineEditIcon();
});

$photo.addEventListener('keyup', function imgUpdate(event) {
  $img.setAttribute('src', $photo.value);
});

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
  $h3Title.setAttribute('class', 'mt-20p pos-rel');
  $h3Title.textContent = inputData.title;
  $txtColDiv.append($h3Title);
  var $pNotes = document.createElement('p');
  $pNotes.setAttribute('class', 'mt-20p lh-1p25em font-15px fontw-500');
  $pNotes.textContent = inputData.notes;
  $txtColDiv.append($pNotes);

  var $editIcon = document.createElement('i');
  $editIcon.setAttribute('class', 'fa-solid fa-pen pos-abs');
  $editIcon.setAttribute('data-entry-id', inputData.id);

  $h3Title.append($editIcon);
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

var $entries = document.querySelector('#entries');
var $entryForm = document.querySelector('#entry-form');
var $entryTab = document.querySelector('.entry-tab');
var $newButton = document.querySelector('.new-button');
function switchToEntries(event) {
  $entries.setAttribute('class', 'view');
  $entryForm.setAttribute('class', 'view hidden');
  data.view = 'entry';
  defineEditIcon();
}
function switchToEntryForm(event) {
  $entries.setAttribute('class', 'view hidden');
  $entryForm.setAttribute('class', 'view');
  $editEntryHead.className = 'pt-20p mb-20p edit-entry hidden';
  $newEntryHead.className = 'pt-20p mb-20p edit-entry';
  data.view = 'entry-form';
  $form.reset();
  $img.setAttribute('src', 'images/placeholder-image-square.jpg');
}
$entryTab.addEventListener('click', switchToEntries);
$newButton.addEventListener('click', switchToEntryForm);

if (data.view === 'entry') {
  switchToEntries();
} if (data.view === 'entry-form') {
  switchToEntryForm();
} if (data.view === 'edit-entry') {
  switchToEditEntry();
}

function switchToEditEntry(event) {
  $entries.setAttribute('class', 'view hidden');
  $entryForm.setAttribute('class', 'view');
  data.view = 'edit-entry';
  $editEntryHead.className = 'pt-20p mb-20p edit-entry';
  $newEntryHead.className = 'pt-20p mb-20p edit-entry hidden';
  var dataEntryId = null;
  if (event !== undefined) {
    dataEntryId = parseInt(event.target.getAttribute('data-entry-id'));
  } else {
    dataEntryId = data.editing.id;
  }
  for (var dataIndex = 0; dataIndex < data.entries.length; dataIndex++) {
    if (data.entries[dataIndex].id === dataEntryId) {
      data.editing = data.entries[dataIndex];
    }
  }
  $img.setAttribute('src', data.editing.imgSrc);
  $photo.value = data.editing.imgSrc;
  $title.value = data.editing.title;
  $note.value = data.editing.notes;
}

function defineEditIcon() {
  var $i = document.querySelectorAll('i');
  for (var i = 0; i < $i.length; i++) {
    $i[i].addEventListener('click', switchToEditEntry);
  }
}
