//manejo del DOM
// AQUI VA LA LOGICA. funciones filtrar, ordenar
const data = STEAM.appnews.newsitems;

let arrSteam =[];

//arrFilter = data.filter(compare => (compare.type[0] === condition || compare.type[1] === condition));

//ver titulo
const resultTitleSteam = titleSteam(data);
//console.log(resultTitleSteam)

//ORDENAR en forma de boton, cambiarlo a select
document.getElementById("author").addEventListener("click", (eventMouse) => {
    let dataOrdered = sortAuthorAz(data) 
    document.getElementById("allSteam").innerHTML =""
    dataOrdered.forEach(element => {
        console.log(element)
        document.getElementById("allSteam").innerHTML += "<p>autor: "+ element.author+"</p>"
    });
})

document.getElementById("author").addEventListener("click", (eventMouse) => {
    let dataReverse = sortAuthorZa(data)
    document.getElementById("allSteam").innerHTML =""
    dataReverse.forEach(element => {
        console.log(element)
        document.getElementById("allSteam").innerHTML += "<p>author: " + element.author+"</p>"
    });
})


// Función que se ejecuta al cambiar filtro u orden
function drawSteamNews() {
  // Creo un array vacío, para recibir los array ordenados por las funciones
  let arrPokemonesDraw = [];
  // obtengo que opción de orden esta seleccionada
  let optSort = document.getElementById("sort").value;
  // obtengo que opción de filtro esta seleccionada
  let optFilter = document.getElementById("filterType").value;

  // Otengo array ordenado para cada tipo de filtro
  switch (optSort) {
    case "nameaz":
      arrPokemonesDraw = sortNameAz(arrPokemones);
      break;
    case "nameza":
      arrPokemonesDraw = sortNameZa(arrPokemones);
      break;
    case "ascending":
      arrPokemonesDraw = sortNumAsc(arrPokemones);
      break;
    case "descending":
      arrPokemonesDraw = sortNumDesc(arrPokemones);
      break;
    default:
      arrPokemonesDraw = arrPokemones;
      break;
  }

  if (optFilter === "") {
    // si no hay filtro seleccionado, utilizo array original de pokemones
    arrPokemonesDraw = arrPokemones
  } else {
    // Si hay filtro seleccionado, utilizo la función para filtrar el array ya ordenado
    arrPokemonesDraw = filterPokemon(arrPokemonesDraw, optFilter)
  }

  dataPokemon.innerHTML = ""
  arrPokemonesDraw.forEach(element => {
    const cardPokemon = createCard(element)
    dataPokemon.appendChild(cardPokemon);

  });
  createGoogleChart(arrPokemonesDraw)
}




// ver titulo
const resultTitleSteam = titleSteam(data)
resultTitleSteam.forEach(element => {
  arrSteam.push(element)
});
arrSteam.forEach(element => {
  let titleSteam = document.createTextNode(element)
  document.getElementById("allSteam").appendChild(titleSteam)
});


//ver fecha (date)
const resultDateSteam = dateSteam(data);
//console.log(resultDateSteam)
resultDateSteam.forEach(element => {
  arrSteam.push(element)
});
arrSteam.forEach(element => {
  let dateNews = document.createTextNode(element)
  document.getElementById("allSteam").appendChild(dateNews)
});

//ver autor
const resultAuthorSteam = authorSteam(data);
//console.log(resultAuthorSteam)
resultAuthorSteam.forEach(element => {
  arrSteam.push(element)
});
arrSteam.forEach(element => {
  let authorNews = document.createTextNode(element)
  document.getElementById("allSteam").appendChild(authorNews)
});



//document.getElementById('root').innerHTML = " ";
//window.onload = loadData(title, date, author);
