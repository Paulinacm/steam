//manejo del DOM
// AQUI VA LA LOGICA. funciones filtrar, ordenar
const data = STEAM.appnews.newsitems;

let arrSteam =[];

//arrFilter = data.filter(compare => (compare.type[0] === condition || compare.type[1] === condition));


//ver titulo
const resultTitleSteam = titleSteam(data);
//console.log(resultTitleSteam)

//en forma de boton, cambiarlo a select
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
