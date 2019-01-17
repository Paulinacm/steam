//manejo del DOM
// AQUI VA LA LOGICA. funciones filtrar, ordenar
const data = STEAM.appnews.newsitems;

let arrSteam = [];

//console.table(data)
const containerRoot = document.getElementById('root');
//console.log(containerRoot)
const nameAuthor1 = document.getElementById('sortAuthor');

//  document.getElementById('root').innerHTML='';
//document.getElementById('champions-list').innerHTML = '';
//for (let i = 0; i < data.length; i++) {
 //document.getElementById('allSteam').innerHTML +=


const showData = (data) => {
    let result = '';
    //console.log(data)
         for (let i = 0; i < data.length; i++) {
           document.getElementById('allSteam').innerHTML += `
          <div class = "card blue-grey darken-1"
          style = "max-width: 18rem;">
            <div class = "card-header"> ${data[i].date} </div> 
            <div class = "card-body">
            <h5 class = "card-title"> ${data[i].title} </h5> 
            <div class = "card-reveal">
              <span class = "card-title grey-text text-darken-4" > Card Title < i class = "material-icons right" > close < /i></span >
              <p> Here is some more information about this product that is only revealed once clicked on. < /p> 
              </div>
            <p class = "card-text"> ${data[i].contents} </p> </div>  
            </div>
            </div > `
            
           }
           return result;
           };
           
        //  nameAuthor1.addEventListener('change', () => {
        //     let sortType = nameAuthor1.options[sortAuthor.selectedIndex].text;
        //      //console.log(sortType)
        //     let filtered = sortDataAuthor(data, sortType);
        //     console.log(filtered)
        //     // limpio div
        //     containerRoot.innerHTML = '';

        //     filtered.forEach(element => {
        //       containerRoot.innerHTML += `
           

window.onload = showData(data);
        
    

//const dataSteam = document.querySelector("#allSteam .showFilterSteam");

//arrFilter = data.filter(compare => (compare.type[0] === condition || compare.type[1] === condition));


//ORDENAR cambiarlo a select
const nameAuthor = document.getElementById('sortAuthor');
let sortDataNews = 
    nameAuthor.addEventListener("change", () => {
        let sortType = nameAuthor.value;
        //console.log(sortType)
        const arrTemp = sortDataAuthor(data, sortType);
        //console.log(arrTemp)
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

/*
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
//     default:
//       arrSteamNewsDraw = arrSteam;
//       break;
//   }

//   if (optFilter === "") {
//     // si no hay filtro seleccionado, utilizo array original de pokemones
//     arrSteamNewsDraw = arrSteam
//   } else {
//     // Si hay filtro seleccionado, utilizo la función para filtrar el array ya ordenado
//     arrSteamNewsDraw = filterSteam(arrSteamNewsDraw, optFilter)
//   }

//   dataSteam.innerHTML = ""
//   arrSteamNewsDraw.forEach(element => {
//     const cardPokemon = createCard(element)
//     dataSteam.appendChild(cardPokemon);

//   });
//   //createGoogleChart(arrSteamNewsDraw)
// }
// */


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


/*
window.onload = loadData(title, date, author)
*/