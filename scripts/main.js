let myImage = document.querySelector('img');

myImage.onclick = function() {
    let mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/ogift.jpg') {
      myImage.setAttribute('src','images/ogift2.jpg');
    } else {
      myImage.setAttribute('src','images/ogift.jpg');
    }
}

let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');

function setUserName() {
  let myName = prompt('Pleae enter your name.');
  if(!myName) {
    setUserName();
  } else {
    localStorage.setItem('name', myName);
    myHeading.textContent = 'This is a gift for you, ' + myName;
  }
}

if(!localStorage.getItem('name')) {
  setUserName();
} else {
  let storeName = localStorage.getItem('name');
  myHeading.textContent = 'This is a goft for you, ' + storedName;
}

myButton.onclick = function() {
  setUserName();
}
