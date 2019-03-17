let langue = 'FR';
let persoIndex;

document.getElementById("persoJ1").attributes.nomFR = '';
document.getElementById("persoJ2").attributes.nomFR = '';
document.getElementById("persoJ1").attributes.nomEN = '';
document.getElementById("persoJ2").attributes.nomEN = '';

function changeLangue(newLangue) {
    langue = newLangue;

    let listeDivNomPerso = document.getElementsByClassName('nomPersonnage');
    for(let d of listeDivNomPerso) {
        if(langue == 'FR') {
            d.innerHTML = d.attributes.nomFR
        } else if(langue == 'EN') {
            d.innerHTML = d.attributes.nomEN
        }
    }

    if(langue == 'FR') {
        document.getElementById("persoJ1").innerHTML = document.getElementById("persoJ1").attributes.nomFR;
        document.getElementById("persoJ2").innerHTML = document.getElementById("persoJ2").attributes.nomFR;
    } else if(langue == 'EN') {
        document.getElementById("persoJ1").innerHTML = document.getElementById("persoJ1").attributes.nomEN;
        document.getElementById("persoJ2").innerHTML = document.getElementById("persoJ2").attributes.nomEN;
    }

    if(langue == 'FR') {
        document.getElementById("libelleJoueur1").innerHTML = "Joueur 1";
        document.getElementById("libelleNomJoueur1").innerHTML = "Nom";
        document.getElementById("libellePersonnageJoueur1").innerHTML = "Personnage";
        document.getElementById("libelleCouleurJoueur1").innerHTML = "Couleur";
        document.getElementById("libelleTitreMatch").innerHTML = "Titre match";
        document.getElementById("libelleButtonPreview").innerHTML = "Envoyer en preview";
        document.getElementById("libelleButtonStream").innerHTML = "Envoyer au stream";
        document.getElementById("libelleLangue").innerHTML = "Langue";
        document.getElementById("libelleJoueur2").innerHTML = "Joueur 2";
        document.getElementById("libelleNomJoueur2").innerHTML = "Nom";
        document.getElementById("libellePersonnageJoueur2").innerHTML = "Personnage";
        document.getElementById("libelleCouleurJoueur2").innerHTML = "Couleur";
    } else if(langue == 'EN') {
        document.getElementById("libelleJoueur1").innerHTML = "Player 1";
        document.getElementById("libelleNomJoueur1").innerHTML = "Name";
        document.getElementById("libellePersonnageJoueur1").innerHTML = "Character";
        document.getElementById("libelleCouleurJoueur1").innerHTML = "Color";
        document.getElementById("libelleTitreMatch").innerHTML = "Title match";
        document.getElementById("libelleButtonPreview").innerHTML = "Send to preview";
        document.getElementById("libelleButtonStream").innerHTML = "Send to stream";
        document.getElementById("libelleLangue").innerHTML = "Language";
        document.getElementById("libelleJoueur2").innerHTML = "Player 2";
        document.getElementById("libelleNomJoueur2").innerHTML = "Name";
        document.getElementById("libellePersonnageJoueur2").innerHTML = "Character";
        document.getElementById("libelleCouleurJoueur2").innerHTML = "Color";
    }

}

function choosePerso(perso) {
    if (persoIndex == 1) {
        nomPersoJ1 = perso.nomEN;
        numPersoJ1 = perso.numero;
        universPersoJ1 = perso.serie;
        document.getElementById("persoJ1").attributes.nomFR = perso.nomFR;
        document.getElementById("persoJ1").attributes.nomEN = perso.nomEN;
        if(langue == 'FR') {
            document.getElementById("persoJ1").innerHTML = perso.nomFR;
        } else if(langue == 'EN') {
            document.getElementById("persoJ1").innerHTML = perso.nomEN;
        }

        for (let i = 0; i < 8; i++) {
            document.getElementById("chroma1" + (i + 1)).setAttribute('chroma', "");
            document.getElementById("imgChroma1" + (i + 1)).setAttribute('src', "");
        }
        for (let i = 0; i < perso.chromas.length; i++) {
            document.getElementById("chroma1" + (i + 1)).setAttribute('chroma', perso.chromas[i]);
            document.getElementById("imgChroma1" + (i + 1)).setAttribute('src', "./assets/logos personnages flat/" +
                perso.numero + " - " + (perso.nomEN).replace(/[.]/g, "") + "/" +
                perso.numero + " - " + (perso.nomEN).replace(/[.]/g, "") + " - " + perso.chromas[i] + ".png");
        }

        document.getElementById("imgFondJ1").setAttribute("src", "./assets/personnages chromas/" +
            perso.numero + " - " + (perso.nomEN).replace(/[.]/g, "") + "/" +
            perso.numero + " - " + (perso.nomEN).replace(/[.]/g, "") + " - " + perso.chromas[0] + ".png");
    } else if (persoIndex == 2) {
        nomPersoJ2 = perso.nomEN;
        numPersoJ2 = perso.numero;
        universPersoJ2 = perso.serie;
        document.getElementById("persoJ2").attributes.nomFR = perso.nomFR;
        document.getElementById("persoJ2").attributes.nomEN = perso.nomEN;
        if(langue == 'FR') {
            document.getElementById("persoJ2").innerHTML = perso.nomFR;
        } else if(langue == 'EN') {
            document.getElementById("persoJ2").innerHTML = perso.nomEN;
        }

        for (var i = 0; i < 8; i++) {
            document.getElementById("chroma2" + (i + 1)).setAttribute('chroma', "");
            document.getElementById("imgChroma2" + (i + 1)).setAttribute('src', "");
        }
        for (var i = 0; i < perso.chromas.length; i++) {
            document.getElementById("chroma2" + (i + 1)).setAttribute('chroma', perso.chromas[i]);
            document.getElementById("imgChroma2" + (i + 1)).setAttribute('src', "./assets/logos personnages flat/" +
                perso.numero + " - " + (perso.nomEN).replace(/[.]/g, "") + "/" +
                perso.numero + " - " + (perso.nomEN).replace(/[.]/g, "") + " - " + perso.chromas[i] + ".png");
        }

        document.getElementById("imgFondJ2").setAttribute("src", "./assets/personnages chromas/" +
            perso.numero + " - " + (perso.nomEN).replace(/[.]/g, "") + "/" +
            perso.numero + " - " + (perso.nomEN).replace(/[.]/g, "") + " - " + perso.chromas[0] + ".png");
    }
    var listeCasePersonnages = document.getElementsByClassName("casePersonnage");
    for (let casePerso of listeCasePersonnages) {
        casePerso.classList.remove("selectionPersonnageJ" + persoIndex)
    }

    selectChroma('chroma' + persoIndex + '1', 'imgChroma' + persoIndex + '1', persoIndex)
    persoIndex = 0;
}

function selectPerso(index) {
    var listeCasePersonnages = document.getElementsByClassName("casePersonnage");
    for (let casePerso of listeCasePersonnages) {
        casePerso.classList.add("selectionPersonnageJ" + index)
    }
    persoIndex = index;

}

function selectChroma(idDivChroma, idImgChroma, numJoueur) {
    if (numJoueur == 1) {
        let listeChromasSelected = document.getElementsByClassName('chromaJ1Selected');
        for (let elem of listeChromasSelected) {
            elem.classList.remove('chromaJ1Selected');
            elem.classList.add('chromaJ1NonSelected');
        }
        chromaPersoJ1 = document.getElementById(idDivChroma).getAttribute('chroma');
        document.getElementById(idDivChroma).classList.add('chromaJ1Selected');
        document.getElementById(idDivChroma).classList.remove('chromaJ1NonSelected');

        document.getElementById("imgFondJ1").setAttribute("src", "./assets/personnages chromas/" +
            numPersoJ1 + " - " + (nomPersoJ1).replace(/[.]/g, "") + "/" +
            numPersoJ1 + " - " + (nomPersoJ1).replace(/[.]/g, "") + " - " + chromaPersoJ1 + ".png");
    } else if (numJoueur == 2) {
        let listeChromasSelected = document.getElementsByClassName('chromaJ2Selected');
        for (let elem of listeChromasSelected) {
            elem.classList.remove('chromaJ2Selected');
            elem.classList.add('chromaJ2NonSelected');
        }
        chromaPersoJ2 = document.getElementById(idDivChroma).getAttribute('chroma');
        document.getElementById(idDivChroma).classList.add('chromaJ2Selected');
        document.getElementById(idDivChroma).classList.remove('chromaJ2NonSelected');

        document.getElementById("imgFondJ2").setAttribute("src", "./assets/personnages chromas/" +
            numPersoJ2 + " - " + (nomPersoJ2).replace(/[.]/g, "") + "/" +
            numPersoJ2 + " - " + (nomPersoJ2).replace(/[.]/g, "") + " - " + chromaPersoJ2 + ".png");
    }
}

const socket = new WebSocket('ws://localhost:8080');

let nomJ1 = "";
let numPersoJ1 = "";
let nomPersoJ1 = "";
let chromaPersoJ1 = "";
let universPersoJ1 = "";
let scoreJ1 = 0;
let couleurJ1 = "#ff0000";

let nomMatch = "";
let bo = 0;

let nomJ2 = "";
let numPersoJ2 = "";
let nomPersoJ2 = "";
let chromaPersoJ2 = "";
let universPersoJ2 = "";
let scoreJ2 = 0;
let couleurJ2 = "#0000ff";

function sendStream() {
    socket.send(JSON.stringify({
        stream: {
            nomJ1: nomJ1,
            numPersoJ1: numPersoJ1,
            nomPersoJ1: nomPersoJ1,
            chromaPersoJ1: chromaPersoJ1,
            universPersoJ1: universPersoJ1,
            scoreJ1: scoreJ1,
            couleurJ1: couleurJ1,
            nomMatch: nomMatch,
            bo: bo,
            nomJ2: nomJ2,
            numPersoJ2: numPersoJ2,
            nomPersoJ2: nomPersoJ2,
            chromaPersoJ2: chromaPersoJ2,
            universPersoJ2: universPersoJ2,
            scoreJ2: scoreJ2,
            couleurJ2: couleurJ2
        }
    }));
}

function sendPreview() {
    socket.send(JSON.stringify({
        preview: {
            nomJ1: nomJ1,
            numPersoJ1: numPersoJ1,
            nomPersoJ1: nomPersoJ1,
            chromaPersoJ1: chromaPersoJ1,
            universPersoJ1: universPersoJ1,
            scoreJ1: scoreJ1,
            couleurJ1: couleurJ1,
            nomMatch: nomMatch,
            bo: bo,
            nomJ2: nomJ2,
            numPersoJ2: numPersoJ2,
            nomPersoJ2: nomPersoJ2,
            chromaPersoJ2: chromaPersoJ2,
            universPersoJ2: universPersoJ2,
            scoreJ2: scoreJ2,
            couleurJ2: couleurJ2
        }
    }));
}


var containerListePersonnages = document.getElementById("containerListePersonnages");

listePersonnages.forEach(function (personnage, index) {
    let divPerso = document.createElement("div");
    divPerso.classList.add("casePersonnage");
    divPerso.addEventListener('click', () => {
        this.choosePerso(JSON.parse(JSON.stringify(personnage)))
    });

    divPerso.style.backgroundImage = "url('./assets/personnages chromas/" +
        personnage.numero + " - " + (personnage.nomEN).replace(/[.]/g, "") + "/" +
        personnage.numero + " - " + (personnage.nomEN).replace(/[.]/g, "") + " - Classic.png')";

    let divNom = document.createElement("div");
    divNom.classList.add("nomPersonnage");
    divNom.innerHTML = personnage.nomFR;
    divNom.attributes.nomFR = personnage.nomFR;
    divNom.attributes.nomEN = personnage.nomEN;
    divPerso.appendChild(divNom);

    containerListePersonnages.appendChild(divPerso);
})

