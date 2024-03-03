let billettene = [];

let telefonRegex = /^\d{8}$/;
let epostRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function kjopBillett() {

    let valgtFilm = document.getElementById("filmer").value;
    let valgteBilletter = document.getElementById("antall").value;
    let valgtFornavn = document.getElementById("fornavn").value;
    let valgtEtternavn = document.getElementById("etternavn").value;
    let valgtTelefonnr = document.getElementById("telefonnr").value;
    let valgtEpost = document.getElementById("epost").value;

    const billett1 = {
        film: valgtFilm,
        antall: valgteBilletter,
        fornavn: valgtFornavn,
        etternavn: valgtEtternavn,
        telefonnummer: valgtTelefonnr,
        epost: valgtEpost
    };

    let alleValideringeneBestatt = true;

    if(billett1.antall === ""){
        document.getElementById("feilAntall").innerHTML = "Må skrive noe inn i antall";
        alleValideringeneBestatt = false;
    }
    else{
        document.getElementById("feilAntall").innerHTML = "";
    }
    if(billett1.fornavn === ""){
        document.getElementById("feilFornavn").innerHTML = "Må skrive inn fornavn";
        alleValideringeneBestatt = false;
    }
    else{
        document.getElementById("feilFornavn").innerHTML = "";
    }
    if(billett1.etternavn === ""){
        document.getElementById("feilEtternavn").innerHTML = "Må skrive inn etternavn";
        alleValideringeneBestatt = false;
    }
    else {
        document.getElementById("feilEtternavn").innerHTML = "";
    }
    if(!telefonRegex.test(valgtTelefonnr)){
        document.getElementById("feilTlfnr").innerHTML = "Må skrive inn et gyldig telefonnummer";
        alleValideringeneBestatt = false;
    }
    else {
        document.getElementById("feilTlfnr").innerHTML = "";
    }
    if(!epostRegex.test(valgtEpost)){
        document.getElementById("feilEpost").innerHTML = "Må skrive inn en gyldig e-postadresse";
        alleValideringeneBestatt = false;
    }
    else {
        document.getElementById("feilEpost").innerHTML = "";
    }

    if(alleValideringeneBestatt) {
        billettene.push(billett1);
        skrivUt();
    }
    document.getElementById("filmer").value = "";
    document.getElementById("antall").value = "";
    document.getElementById("fornavn").value = "";
    document.getElementById("etternavn").value = "";
    document.getElementById("telefonnr").value = "";
    document.getElementById("epost").value = "";

}

function skrivUt() { //kjører gjennom en for-løkke for å skrive ut verdier vi har laget i objektet og satt inn i arrayet.
    let ut = "";
    for (let i = 0; i < billettene.length; i++) {
        ut += "Kinofilm: "+billettene[i].film + ". Antall billetter: " + billettene[i].antall + ". Navn: " + billettene[i].fornavn
            + billettene[i].etternavn + ". Telefonnummer: " + billettene[i].telefonnummer +
            ". E-post: " + billettene[i].epost+ "<br>";
    }
    document.getElementById("utskrift").innerHTML = ut;
}
function slettBillett() {

    billettene = [];
    console.log(billettene);
    skrivUt();
}