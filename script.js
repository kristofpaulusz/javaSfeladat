window.addEventListener("load", init);

var kep = [
  (kep1 = {
    cim: "Virágok",
    ar: 1200,
    eleresiut: "picks/viragok.jpg",
  }),
  (kep2 = {
    cim: "Kutyák",
    ar: 15000,
    eleresiut: "picks/kutyak.jpg",
  }),
  (kep2 = {
    cim: "Kerekek",
    ar: 12000,
    eleresiut: "picks/kerekek.jpg",
  }),
];
function ID(elem) {
  return document.getElementById(elem);
}
function galeria() {
  var txt = "";
  for (let index = 0; index < kep.length; index++) {
    txt +=
      "<div><h1>" +
      kep[index].cim +
      '</h1><img src="' +
      kep[index].eleresiut +
      '" alt=""/img><p>' +
      kep[index].ar +
      " Ft</p></div>";
  }
  ID("galeria").innerHTML = txt;
}

function kiir() {
  var txt = "";
  for (let index = 0; index < kep.length; index++) {
    txt += "<h2>" + kep[index].cim + "</h2>";
  }
  ID("galeria").innerHTML = txt;
}
function arak() {
  var txt = "<ul>";
  for (let index = 0; index < kep.length; index++) {
    txt += "<li>" + kep[index].ar + " Ft </li>";
  }
  txt += "</ul>";
  ID("arak").innerHTML = txt;
}
function kepek() {
  var txt = "";
  for (let index = 0; index < kep.length; index++) {
    txt += '<img src="' + kep[index].eleresiut + '" alt=""/img>';
  }
  ID("kepek").innerHTML = txt;
}
function init() {
  ID("title").innerHTML = "<h1>Galéria:</h1>";
  /*kiir();
  arak();
  kepek();*/
  galeria();
}
('""');
