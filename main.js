//manejo del DOM

let arrSteam =[];

//ver titulo
const resultTitleSteam = titleSteam(data);
//console.log(resultTitleSteam)
resultTitleSteam.forEach(element => {
  arrSteam.push(element)
});
arrSteam.forEach(element => {
  let titleNews = document.createTextNode(element)
  document.getElementById("allSteam").appendChild(titleNews)
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


