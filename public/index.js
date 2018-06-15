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

function showModalClear() {

  var modalBackdrop = document.getElementById('modal-backdrop'); //variable referencing modal backdrop
  var clearModal = document.getElementById('clear-log-modal'); //The actual entry modal

  // Show the modal and its backdrop.
  modalBackdrop.classList.remove('hidden'); //
  clearModal.classList.remove('hidden');

}

function hideModalClear() {

  var modalBackdrop = document.getElementById('modal-backdrop');
  var clearModal = document.getElementById('clear-log-modal');

  // Hide the modal and its backdrop.
  modalBackdrop.classList.add('hidden');
  clearModal.classList.add('hidden');

}

function clearLogInputValues() {

  var logInputElems = document.getElementsByClassName('log-input-element');
  for (var i = 0; i < logInputElems.length; i++) {
    var input = logInputElems[i].querySelector('input, textarea');
    input.value = '';
  }

}

function getEntryIdFromURL() {
  var path = window.location.pathname;
  var pathParts = path.split('/');
  if (pathParts[1] === "edit") {
    return pathParts[2];
  } else {
    return null;
  }
}

function ModalAcceptClick() {

  var postEntry = document.getElementById('log-text-input').value.trim();
  var postTitle = document.getElementById('log-attribution-input').value.trim();
  var postMilage = document.getElementById('log-miles-input').value.trim();
  var postDate = document.getElementById('log-date-input').value.trim();
  if (postTitle && postEntry && postMilage && postDate) {

    var request = new XMLHttpRequest();
  //  var entryID = getId();
  //  var url = "/people/" + personID + "/addPhoto";

    request.open("POST", "/");

    var requestBody = JSON.stringify({
      title: postTitle,
      text: postEntry,
      miles: postMilage,
      date: postDate
    });
    allPosts.push({text:postEntry, title:postTitle ,miles:postMilage ,date:postDate});
    //insertNewEntry( postTitle,postEntry,postMilage ,postDate);
    request.addEventListener('load', function (event) {
      if (event.target.status === 200) {
        var entryCardTemplate = Handlebars.templates.entryCard;
        var newEntryCardHTML = entryCardTemplate({
          text: postEntry,
          miles: postMilage,
          date: postDate,
          title: postTitle
        });
        var entryContainer = document.querySelector('.leftcolumn');
        entryContainer.insertAdjacentHTML('beforeend', newEntryCardHTML);
      } else {
        alert("Error storing photo: " + event.target.response);
      }
    });

    request.setRequestHeader('Content-Type', 'application/json');
    request.send(requestBody);
    hideModal();
    updatePage();

  } else {
    alert('You must specify the title, date, entry and milage');
  }
}

function ClearModalAcceptClick() {

  var request = new XMLHttpRequest();

  request.open("DELETE", "/");
  request.send();
  hideModalClear();
  updatePageClear();

}


var allPosts = [];

window.addEventListener('DOMContentLoaded', function () {

  // Remember all of the existing twits in an array that we can use for search.
//  var entryElemsCollection = document.getElementsByClassName('blog-posts');/
//  for (var i = 0; i < entryElemsCollection.length; i++) {
//    allPosts.push(parseEntryElem(entryElemsCollection[i]));
//  }

  var entryElemsCollection = document.getElementsByClassName('card');
  for (var i = 0; i < entryElemsCollection.length; i++) {
    allPosts.push(parseEntryElem(entryElemsCollection[i]));
  }

  var createPostButton = document.getElementById('create-log');
  if (createPostButton) {
    createPostButton.addEventListener('click', showModal);
  }

  var createPostButton = document.getElementById('clear-log');
  if (createPostButton) {
    createPostButton.addEventListener('click', showModalClear);
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

  var modalCloseButton = document.querySelector('#clear-log-modal .modal-close-button');
  if (modalCloseButton) {
    modalCloseButton.addEventListener('click', hideModalClear);
  }

  var modalCancalButton = document.querySelector('#clear-log-modal .modal-cancel-button');
  if (modalCancalButton) {
    modalCancalButton.addEventListener('click', hideModalClear);
  }

  var modalAcceptButton = document.querySelector('#clear-log-modal .modal-accept-button');
  if (modalAcceptButton) {
    modalAcceptButton.addEventListener('click', ClearModalAcceptClick);
  }

});


//Developing a twit with handlebars

function insertNewEntry(title, text, miles, date){
  var entryTemplate = Handlebars.templates.entryCard;
  var newEntryHTML = entryTemplate ({
    text: text,
    miles: miles,
    date: date,
    title: title
  });
  var entryContainer = document.querySelector('.leftcolumn');
  entryContainer.insertAdjacentHTML('beforeend', newEntryHTML);
}


function updatePage(){

//remove all entries from dom temporarily
    var entryContainer = document.querySelector('.leftcolumn');
    if(entryContainer){
      while(entryContainer.lastChild){
        entryContainer.removeChild(entryContainer.lastChild);
      }
    }
    /*
    *loop through the collection of all twits and add twits back into the dom
    *
    */
    allPosts.forEach(function (entry){
      insertNewEntry(entry.title, entry.text, entry.miles, entry.date);
    });


}

function parseEntryElem(entryElem) {

  var entry = {};

  var entryTextElem = entryElem.querySelector('.logText');
  entry.text = entryTextElem.textContent.trim();

  var entryTitleElem = entryElem.querySelector('.logTitle');
  entry.title = entryTitleElem.textContent.trim();

  var entryMilesElem = entryElem.querySelector('.logMiles');
  entry.miles = entryTitleElem.textContent.trim();

  var entryDateElem = entryElem.querySelector('.logDate');
  entry.date = entryDateElem.textContent.trim();

  return entry;

}
/*
function insertNewClearEntry(title, text, miles, date){
  var entryTemplate = Handlebars.templates.entryCard;
  var newEntryHTML = entryTemplate ({
    text: text,
    miles: miles,
    date: date,
    title: title
  });
  var entryContainer = document.querySelector('.leftcolumn');
  entryContainer.insertAdjacentHTML('beforeend', newEntryHTML);
}
*/

function updatePageClear(){
    allPosts = [];
//remove all entries from dom temporarily
    var entryContainer = document.querySelector('.leftcolumn');
    if(entryContainer){
      while(entryContainer.lastChild){
        entryContainer.removeChild(entryContainer.lastChild);
      }
    }
    console.log(entryContainer);
    /*
    *loop through the collection of all twits and add twits back into the dom
    *
    */

}

