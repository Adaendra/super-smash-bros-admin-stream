// Create WebSocket connection.
const socket = new WebSocket('ws://localhost:8080');

// Listen for messages
socket.addEventListener('message', function (event) {
    const dataJs = JSON.parse(event.data)

    if(dataJs.stream != null) {
        document.getElementById("nomJoueur1").innerHTML = dataJs.stream.nomJ1;
        document.getElementById("scoreJoueur1").innerHTML = dataJs.stream.scoreJ1;
        document.getElementById("persoJ1").setAttribute("src", "./assets/logos personnages flat/" +
            dataJs.stream.numPersoJ1 + " - " + dataJs.stream.nomPersoJ1.replace(/[.]/g, "") + "/" +
            dataJs.stream.numPersoJ1 + " - " + dataJs.stream.nomPersoJ1.replace(/[.]/g, "") + " - " + dataJs.stream.chromaPersoJ1 + ".png")

        document.getElementById("titreMatch").innerHTML = dataJs.stream.nomMatch;
        document.getElementById("boMatch").innerHTML = "BO " + dataJs.stream.bo;

        document.getElementById("nomJoueur2").innerHTML = dataJs.stream.nomJ2;
        document.getElementById("scoreJoueur2").innerHTML = dataJs.stream.scoreJ2;
        document.getElementById("persoJ2").setAttribute("src", "./assets/logos personnages flat/" +
            dataJs.stream.numPersoJ2 + " - " + dataJs.stream.nomPersoJ2.replace(/[.]/g, "") + "/" +
            dataJs.stream.numPersoJ2 + " - " + dataJs.stream.nomPersoJ2.replace(/[.]/g, "") + " - " + dataJs.stream.chromaPersoJ2 + ".png")
    }
});
