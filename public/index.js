/**   PLACEHOLDER  **/

function showCreateTwitModal() {

  var modalBackdrop = document.getElementById('modal-backdrop');
  var createTwitModal = document.getElementById('create-log-modal');

  // Show the modal and its backdrop.
  modalBackdrop.classList.remove('hidden');
  createTwitModal.classList.remove('hidden');

}

function hideCreateTwitModal() {

  var modalBackdrop = document.getElementById('modal-backdrop');
  var createTwitModal = document.getElementById('create-log-modal');

  // Hide the modal and its backdrop.
  modalBackdrop.classList.add('hidden');
  createTwitModal.classList.add('hidden');

  clearLogInputValues();

}

function clearLogInputValues() {

  var logInputElems = document.getElementsByClassName('log-input-element');
  for (var i = 0; i < logInputElems.length; i++) {
    var input = logInputElems[i].querySelector('input, textarea');
    input.value = '';
  }

}

