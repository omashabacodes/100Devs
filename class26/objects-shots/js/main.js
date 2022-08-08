//The user will enter a cocktail. Get a cocktail name, photo, and instructions and place them in the DOM
document.querySelector('button').addEventListener('click', getDrink)

function getDrink(){
    let drink = document.querySelector('input').value

    fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${drink}`)
    .then(res => res.json()) // parse response as JSON
    .then(data => {
      console.log(data.drinks)
      document.querySelector('h2').innerText = data.drinks[0].strDrink
      document.querySelector('img').src = data.drinks[0].strDrinkThumb
      document.querySelector('h3').innerText = data.drinks[0].strInstructions

      // Build a list of related drinks
      for (const drink in data.drinks) {
        let li = document.createElement('li')
        let ol = document.querySelector('ol')

        ol.appendChild(li).innerText = data.drinks[drink].strDrink
      }

    })
    .catch(err => {
        console.log(`error ${err}`)
    });

}

// Remove all li elements on next click
document.querySelector('button').addEventListener('click', clearAllDrinks)

function clearAllDrinks() {
  let ol = document.querySelector('ol')

  function removeAllChildNodes(parent) {
    while (parent.firstChild) {
        parent.removeChild(parent.lastChild);
    }
  }
  removeAllChildNodes(ol);
}
