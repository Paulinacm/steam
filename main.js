//manejo del DOM
const data = STEAM.appnews.newsitems;

let arrSteam = [];

//console.table(data)
const containerRoot = document.getElementById('root');
//console.log(containerRoot)
const nameAuthor1 = document.getElementById('sortAuthor');
//console.log(nameAuthor1)

//Card para mostrar todas la data
const showData = (data) => {
    let result = '';
    //console.log(data)
         for (let i = 0; i < data.length; i++) {
           document.getElementById('allSteam').innerHTML += `
          <div class = "card"style = "width: 18rem;">
            <img class = "card-img-top" src = ${data[i].img} alt = "Card image cap">
            <div class = "card-body">
            <h5 class = "card-title"> ${data[i].title} </h5> 
            <p class = "card-text"> ${data[i].contents} </p> 
            </div> 
            <ul class = "list-group list-group-flush">
            <li class = "list-group-item"> Author: ${data[i].author} </li>  
            <li class = "list-group-item"> Label: ${data[i].feedlabel} </li> 
            <li class = "list-group-item"> Vestibulum at eros </li>  
            </ul>  
            <div class = "card-body" > <a href = "#"
              class = "card-link"> Link: ${data[i].url} </a> 
              </div>
                </div>`
           }
           return result;
           };
           

// nameAuthor1.addEventListener('change', () => {
//     let sortType = nameAuthor1.options[sortAuthor.selectedIndex].text;
//     console.log(sortType)
//     let filtered = sortDataAuthor(data, sortType);
//     //console.log(filtered)
//     // limpio div
//     containerRoot.innerHTML = '';

//     filtered.forEach(element => {
//         containerRoot.innerHTML += `
//            <div class = "card" style = "width: 18rem;">
//              <img class = "card-img-top"
//            src = ${data[i].img} alt = "Card image cap">
//              <div class = "card-body" >
//              <h5 class = "card-title"> ${data[i].title} </h5>  
//              <p class = "card-text"> ${data[i].contents} </p>  </div>  
//              <ul class = "list-group list-group-flush">
//              <li class = "list-group-item" > 
//              Author: ${data[i].author} </li>   
//              <li class = "list-group-item"> Label: ${data[i].feedlabel} </li>  
//              <li class = "list-group-item"> Vestibulum at eros </li>   </ul>   
//              <div class = "card-body"> <a href = "#"
//            class = "card-link"> Link: ${data[i].url} </a>  </div> </div>`
//              })
//              })
        

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




//ORDENAR en forma de boton
document.getElementById("az").addEventListener("click", (eventMouse) => {
    let dataOrdered = sortAuthorAz(data)
    document.getElementById("allSteam").innerHTML =""
    dataOrdered.forEach(element => {
        //console.log(element)
        document.getElementById("allSteam").innerHTML += "<p>autor: "+ element.author+"</p>"
    });
})

document.getElementById("za").addEventListener("click", (eventMouse) => {
    let dataReverse = sortAuthorZa(data)
    document.getElementById("allSteam").innerHTML =""
    dataReverse.forEach(element => {
        //console.log(element)
        document.getElementById("allSteam").innerHTML += "<p>author: " + element.author+"</p>"
    });
})


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




//google chart
 google.charts.load("current", {
   "packages": ["table"]
 });
 google.charts.setOnLoadCallback(drawTable);

 function drawTable() {
   const data = new google.visualization.DataTable();
   data.addColumn("string", "Name");
   data.addColumn("number", "Salary");
   data.addColumn("boolean", "Full Time Employee");
   data.addRows([
     ["Mike", {v: 10000,f: "$10,000"}, true],
     ["Jim", { v: 8000, f: "$8,000"}, false],
     ["Alice", {v: 12500,f: "$12,500"}, true],
     ["Bob", {v: 7000,f: "$7,000"}, true]
   ]);

   const table = new google.visualization.Table(document.getElementById("table_div"));

   table.draw(data, {
     showRowNumber: true,
     width: "100%",
     height: "100%"
   });
 }