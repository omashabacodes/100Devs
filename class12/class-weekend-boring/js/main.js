// a Smurf to listen for the click
document.querySelector('#check').addEventListener('click', check)


function check() {

  // gets the value out of the input
  const day = document.querySelector('#day').value.toLowerCase()


  //Conditionals go here

  if (day === 'saturday' || day === 'sunday'){
    // console.log("It's the weekend!");
    document.getElementById("placeToSee").innerHTML = "It's the weekend!";
  }else if (day === 'tuesday' || day === 'thursday'){
    // console.log("It's a class day!");
    document.getElementById("placeToSee").innerHTML = "It's a class day!";
  }else{
    // console.log("It's a boring day!")
    document.getElementById("placeToSee").innerHTML = "BORRRRRRRING!!!!";
  }
}
