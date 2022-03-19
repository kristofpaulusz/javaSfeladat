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
  (kep3 = {
    cim: "Kerekek",
    ar: 12000,
    eleresiut: "picks/kerekek.jpg",
  }),
  (kep4 = {
    cim: "Bicigli",
    ar: 13000,
    eleresiut: "picks/bici.jpg",
  }),
  (kep5 = {
    cim: "Sün",
    ar: 7000,
    eleresiut: "picks/sün.jpg",
  }),
  (kep6 = {
    cim: "Térkép",
    ar: 15000,
    eleresiut: "picks/us_terkep.png",
  })
];
function ID(elem) {
  return document.getElementById(elem);
}
function galeria() {
  var txt = "";
  for (let index = 0; index < kep.length; index++) {
    txt +=
      "<div><h3>" +
      kep[index].cim +
      '</h3><img src="' +
      kep[index].eleresiut +
      '" alt=""/img><p>' +
      kep[index].ar +
      " Ft</p></div>";
  }
  ID("galeria").innerHTML = txt;
}

function init() {
  ID("title").innerHTML = "<h1>Galéria:</h1>";
  galeria();
}
