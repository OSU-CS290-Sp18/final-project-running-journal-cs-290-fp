/**   PLACEHOLDER  **/

function showModal() {

  var modalBackdrop = document.getElementById('modal-backdrop'); //variable referencing modal backdrop
  var createModal = document.getElementById('create-log-modal'); //The actual entry modal

  // Show the modal and its backdrop.
  modalBackdrop.classList.remove('hidden'); //
  createModal.classList.remove('hidden');

}

function hideModal() {

  var modalBackdrop = document.getElementById('modal-backdrop');
  var createModal = document.getElementById('create-log-modal');

  // Hide the modal and its backdrop.
  modalBackdrop.classList.add('hidden');
  createModal.classList.add('hidden');

  clearLogInputValues();

}

function clearLogInputValues() {

  var logInputElems = document.getElementsByClassName('log-input-element');
  for (var i = 0; i < logInputElems.length; i++) {
    var input = logInputElems[i].querySelector('input, textarea');
    input.value = '';
  }

}

function ModalAcceptClick() {

  var postTitle = document.getElementById('log-text-input').value;
  var postEntry = document.getElementById('log-attribution-input').value;
  var postMilage = document.getElementById('log-miles-input').value;
  var postDate = document.getElementById('log-date-input').value;
  if (postTitle && postEntry && postMilage && postDate) {

    allPosts.push({
      title: postTitle,
      text: postEntry,
      miles: postMilage,
      date: postDate
    });

    hideModal();

  } else {
    alert('You must specify the title, date, entry and milage');
  }
}

var allPosts = [];

window.addEventListener('DOMContentLoaded', function () {

  var createPostButton = document.getElementById('create-log');
  if (createPostButton) {
    createPostButton.addEventListener('click', showModal);
  }

  var modalCloseButton = document.querySelector('#create-log-modal .modal-close-button');
  if (modalCloseButton) {
    modalCloseButton.addEventListener('click', hideModal);
  }

  var modalCancalButton = document.querySelector('#create-log-modal .modal-cancel-button');
  if (modalCancalButton) {
    modalCancalButton.addEventListener('click', hideModal);
  }

  var modalAcceptButton = document.querySelector('#create-log-modal .modal-accept-button');
  if (modalAcceptButton) {
    modalAcceptButton.addEventListener('click', ModalAcceptClick);
  }

});



//Developing a twit with handlebars

function insertNewEntry(title, text, miles, data){
  var entryTemplate = Handlebars.templates.entryCard;
  var newEntryHTML = entryTemplate
}
