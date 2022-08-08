document.getElementById('purple').onclick = partyPurple
document.getElementById('green').onclick = partyGreen
document.getElementById('blue').onclick = partyBlue

// make a new Smurf (event listener)
document.getElementById('red').onclick = partyRed



function partyPurple() {
  document.querySelector('body').style.backgroundColor = 'rgba(241,63,247,1)'
  document.querySelector('body').style.color = 'white'
}

function partyGreen() {
  document.querySelector('body').style.backgroundColor = 'rgba(0,253,81,1)'
  document.querySelector('body').style.color = 'white'
}

function partyBlue() {
  document.querySelector('body').style.backgroundColor = 'rgba(0,254,255)'
  document.querySelector('body').style.color = 'white'
}

// run instructions for new Smurf (event listener)
function partyRed() {
  document.querySelector('body').style.backgroundColor = 'rgba(255,0,0)'
  document.querySelector('body').style.color = 'white'
}