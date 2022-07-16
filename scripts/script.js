let modalWindow = document.querySelector('.modal-container');
let searchHotelButton = document.querySelector('.search-hotel-link');
let modalCloseButton = document.querySelector('.modal-close-button');
let overlayModal = document.querySelector('.modal-overlay');

searchHotelButton.onclick = function () {
  modalWindow.classList.remove('modal-container-close');
}

modalCloseButton.onclick = function () {
  modalWindow.classList.add('modal-container-close');
}

overlayModal.onclick = function () {
  modalWindow.classList.add('modal-container-close');
}
