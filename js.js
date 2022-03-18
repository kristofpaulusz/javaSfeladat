  /*   var kepCimek = [ "Virágok", "Kerekek", "Kutyukák"]
    var kepAr = [1200, 1500, 12000]
    var kepEleresi = ["picks/kerekek.jpg", "picks/kutyak.jpg", "picks/viragok.jpg"]
    var kepTipus = ["Virágok", "Autos", "Allatok"]*/
    
var kep = [
    kep1={
        cim:"Virágok",
        ar: 1200,
        eleresiut: "picks/viragok.jpg"
    },
    kep2={
        cim: "Kutyukák",
        ar:  1500,
        eleresiut: "picks/kutyak.jpg"
    },
    kep2={
        cim: "Kerekek",
        ar: 12000,
        eleresiut: "picks/kerekek.jpg"
    }
]

function atlagar() {
    /** 1. átlagára */
    console.log("Átlagár:")
    var osszes = 0;
    for (var i = 0; i<kep.length; i++) {
        osszes = osszes+kep[i].ar;
    }
    var atlag = osszes / kep.length;
    console.log(atlag);
}
    
function vanedragabb() {
    /** 2. Van e olyan kép ami 10 ezernél drágább*/
    var nincs = true;
    var i = 0;
    while (nincs) {
        if (kep[i].ar<10000)
            nincs = false;
        i = i+1;
    }
    if (nincs==false) {
        console.log("Van bizony");
    }
    else
    console.log("Nincsen.")
}

    var olcsok = [];
    for (let i = 0; i<=kep.length; i++) {
        if (kep[i].ar < 10000) {
            olcsok[olcsok.length] = kep[i].cim;
        }
    }
   console.log(olcsok);
    

atlagar()
vanedragabb()
   /** Van e olyan képcím ami 20 karakternél hosszabb? 

   nincs = true;
    i = 0;
    while (nincs & i!=kepCimek.length) {
        if (kepCimek[i].length > 20)
            nincs = false
        i = i+1;
    }
    console.log("Van e olyan képcím ami 20 karakternél hosszabb?")
    if (nincs==false) {
        console.log("Van bizony");
    }
    else
    console.log("Nincsen.");
    
    var kepem_cime = kepCimek[0] 
    var tipus;

    for (var i = 0; i < kepCimek.length; i++) {
        
        kepem_cime = kepCimek[i];
        
        switch (kepem_cime) {
            case kepCimek[0]:
                tipus = kepTipus[0]
                break;
            case kepCimek[1]:
                tipus = kepTipus[1]
                break;
            case kepCimek[2]:
                tipus = kepTipus[2]
                break;
            default:
                tipus = "UNDEFINED"
                break;
        }
        console.log("Címe: "+kepem_cime+", Kép típusa: "+tipus);
    }
    
   /**  switch (kepem_cime) {
        case "Virágok":
            tipus = kepTipus[0]
            break;
        case "Kerekek":
            tipus = kepTipus[1]
            break;
        case "Kutyukák":
            tipus = kepTipus[2]
            break;
        default:
            tipus = "UNDEFINED"
            break;
    }



var szemely= {
    nev: "Géza",
    kor: 34,
    gyerekek: ["Juci", "Teri", "James"]
    }
    
    szemely.nem = "férfi"
szemely.nev="jolán";
console.log(szemely) */
