//manejo del DOM
// AQUI VA LA LOGICA. funciones filtrar, ordenar
const data = STEAM.appnews.newsitems;

const dataSteam = document.querySelector("#allSteam .showFilterSteam");

let arrSteam =[];

//arrFilter = data.filter(compare => (compare.type[0] === condition || compare.type[1] === condition));


//ORDENAR cambiarlo a select
const nameAuthor = document.getElementById('sortAuthor');
let sortData = 

    nameAuthor.addEventListener("change", () => {
        let sortType = nameAuthor.value;
        console.log(sortType)
        const arrTemp = sortData(data, sortType);
        console.log(arrTemp)
    });


/*
function start() {
  document.getElementById("activitySelector").addEventListener("change", addActivityItem, false);
}
function addActivityItem() {
  //option is selected
  alert("yeah");
}

window.addEventListener("load", start, false);
*/



//ORDENAR en forma de boton, cambiarlo a select
/*
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
*/

// Función que se ejecuta al cambiar filtro u orden
function drawSteamNews() {
  // Creo un array vacío, para recibir los array ordenados por las funciones
  let arrSteamNewsDraw = [];
  // obtengo que opción de orden esta seleccionada
  let optSort = document.getElementById("sortAuthor").value;
  // obtengo que opción de filtro esta seleccionada
  //let optFilter = document.getElementById("filterType").value;

  // Otengo array ordenado para cada tipo de filtro
  switch (optSort) {
    case "sortAuthorAz":
      arrSteamNewsDraw = sortNameAz(arrSteam);
      break;
    case "sortAuthorZa":
      arrSteamNewsDraw = sortNameZa(arrSteam);
      break;
    /*case "ascending":
      arrSteamNewsDraw = sortNumAsc(arrSteam);
      break;
    case "descending":
      arrSteamNewsDraw = sortNumDesc(arrSteam);
      break;*/
    default:
      arrSteamNewsDraw = arrSteam;
      break;
  }

  if (optFilter === "") {
    // si no hay filtro seleccionado, utilizo array original de pokemones
    arrSteamNewsDraw = arrSteam
  } else {
    // Si hay filtro seleccionado, utilizo la función para filtrar el array ya ordenado
    arrSteamNewsDraw = filterSteam(arrSteamNewsDraw, optFilter)
  }

  dataSteam.innerHTML = ""
  arrSteamNewsDraw.forEach(element => {
    const cardPokemon = createCard(element)
    dataSteam.appendChild(cardPokemon);

  });
  //createGoogleChart(arrSteamNewsDraw)
}



///////////////////

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
