// Create WebSocket connection.
const socket = new WebSocket('ws://localhost:8080');

// Listen for messages
socket.addEventListener('message', function (event) {
    const dataJs = JSON.parse(event.data)

    if(dataJs.preview != null) {
        document.getElementById("nomJoueur1").innerHTML = dataJs.preview.nomJ1;
        document.getElementById("scoreJoueur1").innerHTML = dataJs.preview.scoreJ1;
        document.getElementById("persoJ1").setAttribute("src", "./assets/logos personnages flat/" +
            dataJs.preview.numPersoJ1 + " - " + dataJs.preview.nomPersoJ1.replace(/[.]/g, "") + "/" +
            dataJs.preview.numPersoJ1 + " - " + dataJs.preview.nomPersoJ1.replace(/[.]/g, "") + " - " + dataJs.preview.chromaPersoJ1 + ".png")

        document.getElementById("titreMatch").innerHTML = dataJs.preview.nomMatch;
        document.getElementById("boMatch").innerHTML = "BO " + dataJs.preview.bo;

        document.getElementById("nomJoueur2").innerHTML = dataJs.preview.nomJ2;
        document.getElementById("scoreJoueur2").innerHTML = dataJs.preview.scoreJ2;
        document.getElementById("persoJ2").setAttribute("src", "./assets/logos personnages flat/" +
            dataJs.preview.numPersoJ2 + " - " + dataJs.preview.nomPersoJ2.replace(/[.]/g, "") + "/" +
            dataJs.preview.numPersoJ2 + " - " + dataJs.preview.nomPersoJ2.replace(/[.]/g, "") + " - " + dataJs.preview.chromaPersoJ2 + ".png")
    }
});
