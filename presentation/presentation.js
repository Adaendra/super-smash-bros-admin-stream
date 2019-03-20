// Create WebSocket connection.
const socket = new WebSocket('ws://localhost:8080');

// Listen for messages
socket.addEventListener('message', function (event) {
    const dataJs = JSON.parse(event.data)

    if (dataJs.presentation != null) {
        document.getElementById("imgPersoJ1").setAttribute("src", "./assets/personnages chromas/" +
            dataJs.presentation.numPersoJ1 + " - " + dataJs.presentation.nomPersoJ1.replace(/[.]/g, "") + "/" +
            dataJs.presentation.numPersoJ1 + " - " + dataJs.presentation.nomPersoJ1.replace(/[.]/g, "") + " - Full.png");
        document.getElementById("imgUniversJ1").setAttribute("src", "./assets/logo series/" +
            dataJs.presentation.universPersoJ1.replace(/[.]/g, "") + ".svg");
        document.getElementById("spanNomJoueur1").innerHTML = dataJs.presentation.nomJ1;
        document.getElementById("nomPersoJ1").innerHTML = dataJs.presentation.nomPersoLJ1;
        document.getElementById("chromaJ1").setAttribute("src", "./assets/logos personnages flat/" +
            dataJs.presentation.numPersoJ1 + " - " + dataJs.presentation.nomPersoJ1.replace(/[.]/g, "") + "/" +
            dataJs.presentation.numPersoJ1 + " - " + dataJs.presentation.nomPersoJ1.replace(/[.]/g, "") + " - " + dataJs.presentation.chromaPersoJ1 + ".png")

        document.getElementById("imgPersoJ2").setAttribute("src", "./assets/personnages chromas/" +
            dataJs.presentation.numPersoJ2 + " - " + dataJs.presentation.nomPersoJ2.replace(/[.]/g, "") + "/" +
            dataJs.presentation.numPersoJ2 + " - " + dataJs.presentation.nomPersoJ2.replace(/[.]/g, "") + " - Full.png");
        document.getElementById("imgUniversJ2").setAttribute("src", "./assets/logo series/" +
            dataJs.presentation.universPersoJ2.replace(/[.]/g, "") + ".svg");
        document.getElementById("spanNomJoueur2").innerHTML = dataJs.presentation.nomJ2;
        document.getElementById("nomPersoJ2").innerHTML = dataJs.presentation.nomPersoLJ2;
        document.getElementById("chromaJ2").setAttribute("src", "./assets/logos personnages flat/" +
            dataJs.presentation.numPersoJ2 + " - " + dataJs.presentation.nomPersoJ2.replace(/[.]/g, "") + "/" +
            dataJs.presentation.numPersoJ2 + " - " + dataJs.presentation.nomPersoJ2.replace(/[.]/g, "") + " - " + dataJs.presentation.chromaPersoJ2 + ".png")

        /* document.getElementById("nomJoueur1").innerHTML = dataJs.presentation.nomJ1;
         document.getElementById("scoreJoueur1").innerHTML = dataJs.presentation.scoreJ1;
         document.getElementById("persoJ1").setAttribute("src", "./assets/logos personnages flat/" +
             dataJs.presentation.numPersoJ1 + " - " + dataJs.presentation.nomPersoJ1.replace(/[.]/g, "") + "/" +
             dataJs.presentation.numPersoJ1 + " - " + dataJs.presentation.nomPersoJ1.replace(/[.]/g, "") + " - " + dataJs.presentation.chromaPersoJ1 + ".png")

         document.getElementById("titreMatch").innerHTML = dataJs.presentation.nomMatch;
         document.getElementById("boMatch").innerHTML = "BO " + dataJs.presentation.bo;

         document.getElementById("nomJoueur2").innerHTML = dataJs.presentation.nomJ2;
         document.getElementById("scoreJoueur2").innerHTML = dataJs.presentation.scoreJ2;
         document.getElementById("persoJ2").setAttribute("src", "./assets/logos personnages flat/" +
             dataJs.presentation.numPersoJ2 + " - " + dataJs.presentation.nomPersoJ2.replace(/[.]/g, "") + "/" +
             dataJs.presentation.numPersoJ2 + " - " + dataJs.presentation.nomPersoJ2.replace(/[.]/g, "") + " - " + dataJs.presentation.chromaPersoJ2 + ".png")
             */
    }
});
