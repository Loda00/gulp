"use strict";

document.getElementById('upPopup').addEventListener('click', upPopup);

function upPopup() {
  var container = document.getElementById('upPopup');
  var href = container.setAttribute('href', '../publicAfter/partialsInicio/popup.html');
  var target = container.setAttribute('target', '_blank');
  Window.open(href, target, 'width=300', 'heigth=400');
}

;