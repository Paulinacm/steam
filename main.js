//manejo del DOM
// AQUI VA LA LOGICA. funciones filtrar, ordenar
const data = STEAM.appnews.newsitems;

let arrSteam = [];

//console.table(data)
const containerRoot = document.getElementById('root');
//console.log(containerRoot)
const nameAuthor1 = document.getElementById('sortAuthor');

const showData = (data) => {
    let result = '';
    //console.log(data)
    data.forEach(element => {
          //console.log(element.author);
          if (element.author === '' && element.title === '') {
            result = containerRoot.innerHTML += `
            <div class = "col s6 m3">
              <div class = "card">
              <div class = "card-content">
              <span class = "card-title activator grey-text text-darken-2"> 
              <h6> $ {data[i].title} </h6>
                <i class="material-icons right">more_vert</i > </span> </div> <div class = "card-reveal" >
              <span class = "card-title grey-text text-darken-4" > ${data[i].author} 
              <i class = "material-icons right"> close </i></span >
              <p> Fecha: ${data[i].date} </p> 
              <p> Game ID: ${data[i].gid} </p> 
              <p> Feedlabel: ${data[i].feedlabel} </p> <span class = "link"
            data - champion = '${data[i].url}' > Ver mas < /span> </div> 
            </div> 
              </div> ` 
            }
        }



         nameAuthor1.addEventListener('change', () => {
            let sortType = nameAuthor1.options[sortAuthor.selectedIndex].text;
             //console.log(sortType)
            let filtered = sortDataAuthor(data, sortType);
            console.log(filtered)
            // limpio div
            containerRoot.innerHTML = '';

            filtered.forEach(element => {
              containerRoot.innerHTML += `

    <div>
      <div class="card">
        <div class="box">
          <div class="img">
              <img src="${element.image}">
          </div>
          <h2>${element.name}<br><span>${element.house}</span></h2>
          <p>Patronus: ${element.patronus}</p>
        </div>
      </div>
    </div>`
            })
          })

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


/*document.getElementById('root').innerHTML = " ";
window.onload = loadData(title, date, author)
*/