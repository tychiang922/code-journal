var $input = document.querySelectorAll('input');
var $saveButton = document.querySelector('.save-button');
var $title = document.querySelector('.title');
var $photo = document.querySelector('.photo');
var $img = document.querySelector('img');

var userInputObj = [{}];

function saveAction(event) {
  for (var inputNode = 0; inputNode < $input.length; inputNode++) {
    if ($input[inputNode] === '') {
      event.preventDefault();
    }
  }
  event.preventDefault();
  var imgSrc = $photo.value;
  userInputObj[userInputObj.length - 1].imgFile = imgSrc;
  console.log(userInputObj);
}

$saveButton.addEventListener('click', saveAction);
