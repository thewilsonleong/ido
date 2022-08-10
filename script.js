

// SELECTOR

// Selector for form
const targetGroom = document.querySelector('#inputGroom')
const targetBride = document.querySelector('#inputBride')
const targetDate = document.querySelector('#inputDate')
const targetVenue = document.querySelector('#inputVenue')
const targetMessage = document.querySelector('#inputMessage')

const targetClickGroom = document.querySelector('#clickGroom')
const targetClickBride = document.querySelector('#clickBride')
const targetClickDate = document.querySelector('#clickDate')
const targetClickVenue = document.querySelector('#clickVenue')
const targetClickMessage = document.querySelector('#clickMessage')

// Selector for button
const targetHide = document.getElementById('hide')
const targetShow = document.getElementById('show')

const targetTextWhite = document.getElementById('text-white')
const targetTextBlack = document.getElementById('text-black')
const targetReset = document.getElementById('formInput3')

const targetClickTextWhite = document.getElementById('click-white')
const targetClickTextBlack = document.getElementById('click-black')
const targetClickReset = document.getElementById('formInput4')

// Selector for pattern
const targetPattern1 = document.getElementById('pattern1')
const targetPattern2 = document.getElementById('pattern2')
const targetPattern3 = document.getElementById('pattern3')
const targetPattern4 = document.getElementById('pattern4')
const targetPattern5 = document.getElementById('pattern5')
const targetPattern6 = document.getElementById('pattern6')
const targetPattern7 = document.getElementById('pattern7')
const targetPattern8 = document.getElementById('pattern8')
const targetPattern9 = document.getElementById('pattern9')
const targetPattern10 = document.getElementById('pattern10')

const myForm = {
  Groom: document.querySelector('#inputGroom').value,
  Bride: document.querySelector('#inputBride').value,
  Date: document.querySelector('#inputDate').value,
  Venue: document.querySelector('#inputVenue').value,
  Message: document.querySelector('#inputMessage').value
}

// FUNCTION

// Function for pattern
function changePattern1 () {
  document.getElementById("patternShow").src = "./image/Pattern-1.jpg"
  }

function changePattern2 () {
  document.getElementById("patternShow").src = "./image/Pattern-2.jpg"
  }

function changePattern3 () {
  document.getElementById("patternShow").src = "./image/Pattern-3.jpg"
  }

function changePattern4 () {
  document.getElementById("patternShow").src = "./image/Pattern-4.jpg"
  }

function changePattern5 () {
  document.getElementById("patternShow").src = "./image/Pattern-5.jpg"
  }

function changePattern6 () {
document.getElementById("patternShow").src = "./image/Pattern-6.jpg"
}

function changePattern7 () {
document.getElementById("patternShow").src = "./image/Pattern-7.jpg"
}

function changePattern8 () {
document.getElementById("patternShow").src = "./image/Pattern-8.jpg"
}

function changePattern9 () {
document.getElementById("patternShow").src = "./image/Pattern-9.jpg"
}

function changePattern10 () {
document.getElementById("patternShow").src = "./image/Pattern-10.jpg"
}


// Function for preview placeholder  
document.getElementById('displayGroomHTML').innerText = "Groom"
document.getElementById('displayGroomHTML').style.color = "darkgray"
function displayGroomJS() {
  document.getElementById('displayGroomHTML').innerText = inputGroom.value;
  document.getElementById('displayGroomHTML').style.color = "black"
  }

document.getElementById('displayBrideHTML').innerText = "Bride"
document.getElementById('displayBrideHTML').style.color = "darkgray"
function displayBrideJS() {
  document.getElementById('displayBrideHTML').innerText = inputBride.value;
  document.getElementById('displayBrideHTML').style.color = "black"
  }

document.getElementById('displayDateHTML').innerText = "Date"
document.getElementById('displayDateHTML').style.color = "darkgray"
function displayDateJS() {
  document.getElementById('displayDateHTML').innerText = inputDate.value;
  document.getElementById('displayDateHTML').style.color = "black"
  }

document.getElementById('displayVenueHTML').innerText = "Venue"
document.getElementById('displayVenueHTML').style.color = "darkgray"
function displayVenueJS() {
  document.getElementById('displayVenueHTML').innerText = inputVenue.value;
  document.getElementById('displayVenueHTML').style.color = "black"
  }

document.getElementById('displayMessageHTML').innerText = "Message"
document.getElementById('displayMessageHTML').style.color = "darkgray"
function displayMessageJS() {
  document.getElementById('displayMessageHTML').innerText = inputMessage.value;
  document.getElementById('displayMessageHTML').style.color = "black"
  }


document.getElementById('formText1').innerHTML = "Together with our families"
document.getElementById('formText2').innerHTML = "&#038"
document.getElementById('formText3').innerHTML = "are please to invite you <br> to our wedding <br> celebration<br>"
document.getElementById('formText4').innerHTML = "at"


// Function for click

function clickGroomJS() {
  document.getElementById('clickGroom').style.border = 0
  document.getElementById('clickGroom').style.textAlign = "center"
  console.log('Groom')
}

function clickBrideJS() {
  document.getElementById('clickBride').style.border = 0
  document.getElementById('clickBride').style.textAlign = "center"
  console.log('Bride')
}

function clickDateJS() {
  document.getElementById('clickDate').style.border = 0
  document.getElementById('clickDate').style.textAlign = "center"
  console.log('Date')
}

function clickVenueJS() {
  document.getElementById('clickVenue').style.border = 0
  document.getElementById('clickVenue').style.textAlign = "center"
  console.log('Venue')
}

function clickMessageJS() {
  document.getElementById('clickMessage').style.border = 0
  document.getElementById('clickMessage').style.textAlign = "center"
  console.log('Message')
}

document.getElementById('clickText1').innerHTML = "Together with our families"
document.getElementById('clickText2').innerHTML = "&#038"
document.getElementById('clickText3').innerHTML = "are please to invite you <br> to our wedding <br> celebration<br>"
document.getElementById('clickText4').innerHTML = "at"




// Function for button

function inputTextWhite () {
  if(document.getElementById('formInput1') !== ""){
    document.getElementById('displayGroomHTML').innerText = inputGroom.value;
    document.getElementById('displayGroomHTML').style.color = "white"
    document.getElementById('displayBrideHTML').innerText = inputBride.value;
    document.getElementById('displayBrideHTML').style.color = "white"
    document.getElementById('displayDateHTML').innerText = inputDate.value;
    document.getElementById('displayDateHTML').style.color = "white"
    document.getElementById('displayVenueHTML').innerText = inputVenue.value;
    document.getElementById('displayVenueHTML').style.color = "white"
    document.getElementById('displayMessageHTML').innerText = inputMessage.value;
    document.getElementById('displayMessageHTML').style.color = "white"
    document.getElementById('formText1').style.color="white"
    document.getElementById('formText2').style.color="white"
    document.getElementById('formText3').style.color="white"
    document.getElementById('formText4').style.color="white"
  }
}

function inputTextBlack () {
  if (document.getElementById('formInput1') !== ""){
    document.getElementById('displayGroomHTML').innerText = inputGroom.value;
    document.getElementById('displayGroomHTML').style.color = "Black"
    document.getElementById('displayBrideHTML').innerText = inputBride.value;
    document.getElementById('displayBrideHTML').style.color = "Black"
    document.getElementById('displayDateHTML').innerText = inputDate.value;
    document.getElementById('displayDateHTML').style.color = "Black"
    document.getElementById('displayVenueHTML').innerText = inputVenue.value;
    document.getElementById('displayVenueHTML').style.color = "Black"
    document.getElementById('displayMessageHTML').innerText = inputMessage.value;
    document.getElementById('displayMessageHTML').style.color = "Black"
    document.getElementById('formText1').style.color="Black"
    document.getElementById('formText2').style.color="Black"
    document.getElementById('formText3').style.color="Black"
    document.getElementById('formText4').style.color="Black"
  }
}

function clickTextWhite () {
  if(document.getElementById('clickInput1') !== ""){
    document.getElementById('clickGroom').innerText = inputGroom.value;
    document.getElementById('clickGroom').style.color = "white"
    document.getElementById('clickBride').innerText = inputBride.value;
    document.getElementById('clickBride').style.color = "white"
    document.getElementById('clickDate').innerText = inputDate.value;
    document.getElementById('clickDate').style.color = "white"
    document.getElementById('clickVenue').innerText = inputVenue.value;
    document.getElementById('clickVenue').style.color = "white"
    document.getElementById('clickMessage').innerText = inputMessage.value;
    document.getElementById('clickMessage').style.color = "white"
    document.getElementById('clickText1').style.color="white"
    document.getElementById('clickText2').style.color="white"
    document.getElementById('clickText3').style.color="white"
    document.getElementById('clickText4').style.color="white"
  }
}

function clickTextBlack () {
  if (document.getElementById('clickInput1') !== ""){
    document.getElementById('clickGroom').innerText = inputGroom.value;
    document.getElementById('clickGroom').style.color = "Black"
    document.getElementById('clickBride').innerText = inputBride.value;
    document.getElementById('clickBride').style.color = "Black"
    document.getElementById('clickDate').innerText = inputDate.value;
    document.getElementById('clickDate').style.color = "Black"
    document.getElementById('clickVenue').innerText = inputVenue.value;
    document.getElementById('clickVenue').style.color = "Black"
    document.getElementById('clickMessage').innerText = inputMessage.value;
    document.getElementById('clickMessage').style.color = "Black"
    document.getElementById('clickText1').style.color="Black"
    document.getElementById('clickText2').style.color="Black"
    document.getElementById('clickText3').style.color="Black"
    document.getElementById('clickText4').style.color="Black"
  }
}

function inputReset() {
  document.getElementById('formInput1').reset();
  document.getElementById('formInput3').reset();

  document.getElementById('displayGroomHTML').innerText = "Groom"
  document.getElementById('displayBrideHTML').innerText = "Bride" 
  document.getElementById('displayDateHTML').innerText = "Date"  
  document.getElementById('displayVenueHTML').innerText = "Venue"  
  document.getElementById('displayMessageHTML').innerText = "Message"  
  
  document.getElementById('displayGroomHTML').style.color = "darkgray"
  document.getElementById('displayBrideHTML').style.color = "darkgray"
  document.getElementById('displayDateHTML').style.color = "darkgray"
  document.getElementById('displayVenueHTML').style.color = "darkgray"
  document.getElementById('displayMessageHTML').style.color = "darkgray"  
  }

function clickReset () {
  document.getElementById('clickInput1').reset();
  document.getElementById('formInput4').reset();

  document.getElementById('clickGroom').style.textAlign = "left"
  document.getElementById('clickGroom').style.borderWidth = "1px"
  document.getElementById('clickGroom').style.borderStyle = "solid"
  document.getElementById('clickGroom').style.border = "block"
  document.getElementById('clickGroom').style.borderColor = "darkgray"

  document.getElementById('clickBride').style.textAlign = "left"
  document.getElementById('clickBride').style.borderWidth = "1px"
  document.getElementById('clickBride').style.borderStyle = "solid"
  document.getElementById('clickBride').style.border = "block"
  document.getElementById('clickBride').style.borderColor = "darkgray"

  document.getElementById('clickDate').style.textAlign = "left"
  document.getElementById('clickDate').style.borderWidth = "1px"
  document.getElementById('clickDate').style.borderStyle = "solid"
  document.getElementById('clickDate').style.border = "block"
  document.getElementById('clickDate').style.borderColor = "darkgray"

  document.getElementById('clickVenue').style.textAlign = "left"
  document.getElementById('clickVenue').style.borderWidth = "1px"
  document.getElementById('clickVenue').style.borderStyle = "solid"
  document.getElementById('clickVenue').style.border = "block"
  document.getElementById('clickVenue').style.borderColor = "darkgray"

  document.getElementById('clickMessage').style.textAlign = "left"
  document.getElementById('clickMessage').style.borderWidth = "1px"
  document.getElementById('clickMessage').style.borderStyle = "solid"
  document.getElementById('clickMessage').style.border = "block"
  document.getElementById('clickMessage').style.borderColor = "darkgray"
}

function clickHide () {
  document.getElementById('meHere').style.display = "none"
  document.getElementById('meAlso').style.display = "none"
  console.log('hide me')
}

function clickShow () {
  document.getElementById('meHere').style.display = "block"
  document.getElementById('meAlso').style.display = "block"
  console.log('show me')
}


// CALL

// Call for preview
targetGroom.addEventListener('input', displayGroomJS)
targetBride.addEventListener('input', displayBrideJS)
targetDate.addEventListener('input', displayDateJS)
targetVenue.addEventListener('input', displayVenueJS)
targetMessage.addEventListener('input', displayMessageJS)

// Call for click
targetClickGroom.addEventListener('input', clickGroomJS)
targetClickBride.addEventListener('input', clickBrideJS)
targetClickDate.addEventListener('input', clickDateJS)
targetClickVenue.addEventListener('input', clickVenueJS)
targetClickMessage.addEventListener('input', clickMessageJS)


// Call for button

targetTextWhite.addEventListener('click', inputTextWhite)
targetTextBlack.addEventListener('click', inputTextBlack)
targetReset.addEventListener('click', inputReset)

targetClickTextWhite.addEventListener('click', clickTextWhite)
targetClickTextBlack.addEventListener('click', clickTextBlack)
targetClickReset.addEventListener('click', clickReset)

targetHide.addEventListener('click', clickHide) 
targetShow.addEventListener('click', clickShow)


// Call for pattern
targetPattern1.addEventListener('click', changePattern1)
targetPattern2.addEventListener('click', changePattern2)
targetPattern3.addEventListener('click', changePattern3)
targetPattern4.addEventListener('click', changePattern4)
targetPattern5.addEventListener('click', changePattern5)
targetPattern6.addEventListener('click', changePattern6)
targetPattern7.addEventListener('click', changePattern7)
targetPattern8.addEventListener('click', changePattern8)
targetPattern9.addEventListener('click', changePattern9)
targetPattern10.addEventListener('click', changePattern10)

