let kinobilletter = []; //gjør om arrayet fra kjopBillett-funksjonen globale for å hente den til slettBillett-funksjonen

function kjopBillett() {

    let valgtFilm = document.getElementById("filmer").value;
    let valgteBilletter = document.getElementById("antall").value;
    let valgtFornavn = document.getElementById("fornavn").value;
    let valgtEtternavn = document.getElementById("etternavn").value;
    let valgtTelefonnr = document.getElementById("telefonnr").value;
    let valgtEpost = document.getElementById("epost").value;

    const kinobillett1 = {  //Lager et objekt og setter inn lagde variable
        film: valgtFilm,
        antall: valgteBilletter,
        fornavn: valgtFornavn,
        etternavn: valgtEtternavn,
        telefonnr: valgtTelefonnr,
        epost: valgtEpost
    };

    if(kinobillett1.antall ==="") {
        document.getElementById("feilAntall").innerHTML = "Må skrive inn i antall:";
    }
    else {
        document.getElementById("feilAntall").innerHTML = "";
    }
}