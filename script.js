
// Selector
const targetGroom = document.querySelector('#inputGroom')
const targetBride = document.querySelector('#inputBride')
const targetDate = document.querySelector('#inputDate')
const targetVenue = document.querySelector('#inputVenue')
const targetMessage = document.querySelector('#inputMessage')

const targetTextWhite = document.getElementById('text-white')
const targetTextBlack = document.getElementById('text-black')
const targetReset = document.getElementById('formInput3')

const targetPattern1 = document.getElementById('pattern1')
const targetPattern2 = document.getElementById('pattern2')
const targetPattern3 = document.getElementById('pattern3')
const targetPattern4 = document.getElementById('pattern4')
const targetPattern5 = document.getElementById('pattern5')

const targetHide = document.getElementById('hide')
const targetShow = document.getElementById('show')



// Function

function changePattern1 () {
  document.getElementById("patternShow").src = "./image/pattern-4.png"
  }

function changePattern2 () {
  document.getElementById("patternShow").src = "./image/pattern-1.png"
  }

function changePattern3 () {
  document.getElementById("patternShow").src = "./image/pattern-5.png"
  }

function changePattern4 () {
  document.getElementById("patternShow").src = "./image/pattern-3.png"
  }

function changePattern5 () {
  document.getElementById("patternShow").src = "./image/pattern-2.png"
  }


  
document.getElementById('displayGroomHTML').innerText = "Groom Top"
document.getElementById('displayGroomHTML').style.color = "darkgray"
function displayGroomJS() {
  document.getElementById('displayGroomHTML').innerText = inputGroom.value;
  document.getElementById('displayGroomHTML').style.color = "black"
  }

document.getElementById('displayBrideHTML').innerText = "Bride Top"
document.getElementById('displayBrideHTML').style.color = "darkgray"
function displayBrideJS() {
  document.getElementById('displayBrideHTML').innerText = inputBride.value;
  document.getElementById('displayBrideHTML').style.color = "black"
  }

document.getElementById('displayDateHTML').innerText = "Date Top"
document.getElementById('displayDateHTML').style.color = "darkgray"
function displayDateJS() {
  document.getElementById('displayDateHTML').innerText = inputDate.value;
  document.getElementById('displayDateHTML').style.color = "black"
  }

document.getElementById('displayVenueHTML').innerText = "Venue Top"
document.getElementById('displayVenueHTML').style.color = "darkgray"
function displayVenueJS() {
  document.getElementById('displayVenueHTML').innerText = inputVenue.value;
  document.getElementById('displayVenueHTML').style.color = "black"
  }

document.getElementById('displayMessageHTML').innerText = "Message Top"
document.getElementById('displayMessageHTML').style.color = "darkgray"
function displayMessageJS() {
  document.getElementById('displayMessageHTML').innerText = inputMessage.value;
  document.getElementById('displayMessageHTML').style.color = "black"
  }

  document.getElementById('clickText1').innerHTML = "Together with our families"
  document.getElementById('clickText2').innerHTML = "&#038"
  document.getElementById('clickText3').innerHTML = "are please to invite you <br> to our wedding <br> celebration<br>"
  document.getElementById('clickText4').innerHTML = "at"




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
    document.getElementById('clickText1').style.color="white"
    document.getElementById('clickText2').style.color="white"
    document.getElementById('clickText3').style.color="white"
    document.getElementById('clickText4').style.color="white"
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
    document.getElementById('clickText1').style.color="Black"
    document.getElementById('clickText2').style.color="Black"
    document.getElementById('clickText3').style.color="Black"
    document.getElementById('clickText4').style.color="Black"
  }
}

function inputReset() {
  document.getElementById('formInput1').reset();
  document.getElementById('formInput3').reset();

  document.getElementById('displayGroomHTML').innerText = "Groom Bottom"
  document.getElementById('displayBrideHTML').innerText = "Bride Bottom" 
  document.getElementById('displayDateHTML').innerText = "Date Bottom"  
  document.getElementById('displayVenueHTML').innerText = "Venue Bottom"  
  document.getElementById('displayMessageHTML').innerText = "Message Bottom"  
  
  document.getElementById('displayGroomHTML').style.color = "darkgray"
  document.getElementById('displayBrideHTML').style.color = "darkgray"
  document.getElementById('displayDateHTML').style.color = "darkgray"
  document.getElementById('displayVenueHTML').style.color = "darkgray"
  document.getElementById('displayMessageHTML').style.color = "darkgray"  
  }


function clickHide () {
  document.getElementById('meHere').style.display = "none"
  document.getElementById('meAlso').style.display = "none"
  console.log('hide me')
}
targetHide.addEventListener('click', clickHide) 

function clickShow () {
  document.getElementById('meHere').style.display = "block"
  document.getElementById('meAlso').style.display = "block"
  console.log('show me')
}
targetShow.addEventListener('click', clickShow)


// Call
targetGroom.addEventListener('input', displayGroomJS)
targetBride.addEventListener('input', displayBrideJS)
targetDate.addEventListener('input', displayDateJS)
targetVenue.addEventListener('input', displayVenueJS)
targetMessage.addEventListener('input', displayMessageJS)

targetTextWhite.addEventListener('click', inputTextWhite)
targetTextBlack.addEventListener('click', inputTextBlack)
targetReset.addEventListener('click', inputReset)


targetPattern1.addEventListener('click', changePattern1)
targetPattern2.addEventListener('click', changePattern2)
targetPattern3.addEventListener('click', changePattern3)
targetPattern4.addEventListener('click', changePattern4)
targetPattern5.addEventListener('click', changePattern5)



