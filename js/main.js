var $input = document.querySelectorAll('input');
var $saveButton = document.querySelector('.save-button');

function rejectEmptyInput(event) {
  for (var inputNode = 0; inputNode < $input.length; inputNode++) {
    if ($input[inputNode] === '') {
      event.preventDefault();
    }
  }
}

$saveButton.addEventListener('click', rejectEmptyInput);
