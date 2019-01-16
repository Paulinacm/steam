//Filtros
//filtrar por título
const titleSteam = (data) => {
  //console.log(data);
  let title = [];
  for (let i=0; i< data.length; i++){
    title.push(data[i].title)
  }
  return title;
}
window.titleSteam = titleSteam;

// ordenar por nombre autorAZ
let sortAuthorAz = (data) => {
  console.log(data)
  data = data.sort((a, b) => {
    if (a.author > b.author)
      return 1
    else
      return -1
  })
  return data
}
window.sortAuthorAz = sortAuthorAz

// ordenar por nombre autorZA
const sortAuthorZa = (data) => {
  data = data.sort((a, b) => {
    if (a.author < b.author)
      return 1
    else
      return -1
  })
  return data
}
window.sortAuthorZa = sortAuthorZa


const sortData = (array, sortName) => {
   console.log(array,sortName)
   if (sortName == sortAuthorAz){
     return sortAuthorAz
   })
   if else (sortName == sortAuthorZa){
     return sortAuthorZa
   }
  }
window.sortData = sortData


//filtrar por date. falta realizar calculo
const dateSteam = (data) => {
  //console.log(data);
  let date = [];
  for (let i = 0; i < data.length; i++) {
    
    date.push(data[i].date)
  }
  return date;
}
window.dateSteam = dateSteam;


// filtrar por autor
const authorSteam = (data) => {
  //console.log(data);
  let author = [];
  for (let i = 0; i < data.length; i++) {
    author.push(data[i].author)
  }
  return author;
}
window.authorSteam = authorSteam;


//ordenar alfabeticamente
//funciones para ordenar de forma descendete y ascendente
// Se factorizan todas las funciones para que devuelven el array en el orden deseado
function sortNumDesc(arraySteam) {
  let arrSteamNumDesc = arraySteam;
  arrSteamNumDesc = arrSteamNumDesc.sort((a, b) => {
    if (parseInt(a.num) < parseInt(b.num))
      return 1
    else
      return -1
  })
  return arrSteamNumDesc
}

function sortNumAsc(arrayPokemones) {
  let arrSteamNumAsc = arrayPokemones;
  arrSteamNumAsc = arrSteamNumAsc.sort((a, b) => {
    if (parseInt(a.num) > parseInt(b.num))
      return 1
    else
      return -1
  })
  return arrSteamNumAsc
}





// Mostrar la data en una interfaz: puede ser un card, una tabla, una lista, etc.



/*
filterData(data, condition): esta función filter o filtrar recibiría la data,
  y nos retornaría aquellos datos que sí cumplan con la condición.

sortData(data, sortBy, sortOrder): esta función sort u ordenar recibe tres parámetros.
El primer parámetro, data, nos entrega los datos.El segundo parámetro, sortBy, nos dice con respecto a cuál de los campos de la data se quiere ordenar.El tercer parámetro, sortOrder, indica si se quiere ordenar de manera ascendente o descendente.

computeStats(data): la función compute o calcular, nos permitirá hacer cálculos estadísticos básicos
para ser mostrados de acuerdo a la data proporcionada.
*/

