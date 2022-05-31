var $input = document.querySelectorAll('input');
var $saveButton = document.querySelector('.save-button');
var $title = document.querySelector('.title');
var $photo = document.querySelector('.photo');
var $img = document.querySelector('img');

var userInputObj = [{ imgFile: null, title: null, notes: null }];

function saveAction(event) {
  for (var inputNode = 0; inputNode < $input.length; inputNode++) {
    if ($input[inputNode] === '') {
      event.preventDefault();
    }
  }
  event.preventDefault();
  userInputObj[userInputObj.length - 1].imgFile = $photo.value;
  userInputObj[userInputObj.length - 1].title = $title.value;
  console.log(userInputObj);
}

$saveButton.addEventListener('click', saveAction);
