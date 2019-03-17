const WebSocket = require('ws');

const wss = new WebSocket.Server({port: 8080});

/* ----- DATA STREAM ----- */
let stream_nomJ1 = "";
let stream_numPersoJ1 = "";
let stream_nomPersoJ1 = "";
let stream_chromaPersoJ1 = "";
let stream_universPersoJ1 = "";
let stream_scoreJ1 = 0;
let stream_couleurJ1 = "#ff0000";

let stream_nomMatch = "";
let stream_bo = 0;

let stream_nomJ2 = "";
let stream_numPersoJ2 = "";
let stream_nomPersoJ2 = "";
let stream_chromaPersoJ2 = "";
let stream_universPersoJ2 = "";
let stream_scoreJ2 = 0;
let stream_couleurJ2 = "#0000ff";

/* ----- DATA PREVIEW ----- */
let preview_nomJ1 = "";
let preview_numPersoJ1 = "";
let preview_nomPersoJ1 = "";
let preview_chromaPersoJ1 = "";
let preview_universPersoJ1 = "";
let preview_scoreJ1 = 0;
let preview_couleurJ1 = "#ff0000";

let preview_nomMatch = "";
let preview_bo = 0;

let preview_nomJ2 = "";
let preview_numPersoJ2 = "";
let preview_nomPersoJ2 = "";
let preview_chromaPersoJ2 = "";
let preview_universPersoJ2 = "";
let preview_scoreJ2 = 0;
let preview_couleurJ2 = "#0000ff";

/* ----- DATA PRESENTATION ----- */
let presentation_nomJ1 = "";
let presentation_numPersoJ1 = "";
let presentation_nomPersoJ1 = "";
let presentation_nomPersoLJ1 = "";
let presentation_chromaPersoJ1 = "";
let presentation_universPersoJ1 = "";
let presentation_scoreJ1 = 0;
let presentation_couleurJ1 = "#ff0000";

let presentation_nomMatch = "";
let presentation_bo = 0;

let presentation_nomJ2 = "";
let presentation_numPersoJ2 = "";
let presentation_nomPersoJ2 = "";
let presentation_nomPersoLJ2 = "";
let presentation_chromaPersoJ2 = "";
let presentation_universPersoJ2 = "";
let presentation_scoreJ2 = 0;
let presentation_couleurJ2 = "#0000ff";

wss.on('connection', function connection(ws) {
    ws.on('message', function incoming(data) {
        const dataJs = JSON.parse(data)

        if(dataJs.stream != null) {
            stream_nomJ1 = dataJs.stream.nomJ1;
            stream_numPersoJ1 = dataJs.stream.numPersoJ1;
            stream_nomPersoJ1 = dataJs.stream.nomPersoJ1;
            stream_chromaPersoJ1 = dataJs.stream.chromaPersoJ1;
            stream_universPersoJ1 = dataJs.stream.universPersoJ1;
            stream_scoreJ1 = dataJs.stream.scoreJ1;
            stream_couleurJ1 = dataJs.stream.couleurJ1;

            stream_nomMatch = dataJs.stream.nomMatch;
            stream_bo = dataJs.stream.bo;

            stream_nomJ2 = dataJs.stream.nomJ2;
            stream_numPersoJ2 = dataJs.stream.numPersoJ2;
            stream_nomPersoJ2 = dataJs.stream.nomPersoJ2;
            stream_chromaPersoJ2 = dataJs.stream.chromaPersoJ2;
            stream_universPersoJ2 = dataJs.stream.universPersoJ2;
            stream_scoreJ2 = dataJs.stream.scoreJ2;
            stream_couleurJ2 = dataJs.stream.couleurJ2;
            
        } else if(dataJs.preview != null) {
            preview_nomJ1 = dataJs.preview.nomJ1;
            preview_numPersoJ1 = dataJs.preview.numPersoJ1;
            preview_nomPersoJ1 = dataJs.preview.nomPersoJ1;
            preview_chromaPersoJ1 = dataJs.preview.chromaPersoJ1;
            preview_universPersoJ1 = dataJs.preview.universPersoJ1;
            preview_scoreJ1 = dataJs.preview.scoreJ1;
            preview_couleurJ1 = dataJs.preview.couleurJ1;

            preview_nomMatch = dataJs.preview.nomMatch;
            preview_bo = dataJs.preview.bo;

            preview_nomJ2 = dataJs.preview.nomJ2;
            preview_numPersoJ2 = dataJs.preview.numPersoJ2;
            preview_nomPersoJ2 = dataJs.preview.nomPersoJ2;
            preview_chromaPersoJ2 = dataJs.preview.chromaPersoJ2;
            preview_universPersoJ2 = dataJs.preview.universPersoJ2;
            preview_scoreJ2 = dataJs.preview.scoreJ2;
            preview_couleurJ2 = dataJs.preview.couleurJ2;
            
        } else if(dataJs.presentation != null) {
            presentation_nomJ1 = dataJs.presentation.nomJ1;
            presentation_numPersoJ1 = dataJs.presentation.numPersoJ1;
            presentation_nomPersoJ1 = dataJs.presentation.nomPersoJ1;
            presentation_nomPersoLJ1 = dataJs.presentation.nomPersoLJ1;
            presentation_chromaPersoJ1 = dataJs.presentation.chromaPersoJ1;
            presentation_universPersoJ1 = dataJs.presentation.universPersoJ1;
            presentation_scoreJ1 = dataJs.presentation.scoreJ1;
            presentation_couleurJ1 = dataJs.presentation.couleurJ1;

            presentation_nomMatch = dataJs.presentation.nomMatch;
            presentation_bo = dataJs.presentation.bo;

            presentation_nomJ2 = dataJs.presentation.nomJ2;
            presentation_numPersoJ2 = dataJs.presentation.numPersoJ2;
            presentation_nomPersoJ2 = dataJs.presentation.nomPersoJ2;
            presentation_nomPersoLJ2 = dataJs.presentation.nomPersoLJ2;
            presentation_chromaPersoJ2 = dataJs.presentation.chromaPersoJ2;
            presentation_universPersoJ2 = dataJs.presentation.universPersoJ2;
            presentation_scoreJ2 = dataJs.presentation.scoreJ2;
            presentation_couleurJ2 = dataJs.presentation.couleurJ2;
        }

        wss.broadcast(formerJson());
    });

    wss.broadcast(formerJson());
});

wss.broadcast = function broadcast(msg) {
    wss.clients.forEach(function each(client) {
        client.send(msg);
    });
};

function formerJson() {
    return JSON.stringify({
        stream : {
            nomJ1 : stream_nomJ1,
            numPersoJ1 : stream_numPersoJ1,
            nomPersoJ1 : stream_nomPersoJ1,
            chromaPersoJ1 : stream_chromaPersoJ1,
            universPersoJ1 : stream_universPersoJ1,
            scoreJ1 : stream_scoreJ1,
            couleurJ1 : stream_couleurJ1,
            nomMatch : stream_nomMatch,
            bo : stream_bo,
            nomJ2 : stream_nomJ2,
            numPersoJ2 : stream_numPersoJ2,
            nomPersoJ2 : stream_nomPersoJ2,
            chromaPersoJ2 : stream_chromaPersoJ2,
            universPersoJ2 : stream_universPersoJ2,
            scoreJ2 : stream_scoreJ2,
            couleurJ2 : stream_couleurJ2
        },
        preview : {
            nomJ1 : preview_nomJ1,
            numPersoJ1 : preview_numPersoJ1,
            nomPersoJ1 : preview_nomPersoJ1,
            chromaPersoJ1 : preview_chromaPersoJ1,
            universPersoJ1 : preview_universPersoJ1,
            scoreJ1 : preview_scoreJ1,
            couleurJ1 : preview_couleurJ1,
            nomMatch : preview_nomMatch,
            bo : preview_bo,
            nomJ2 : preview_nomJ2,
            numPersoJ2 : preview_numPersoJ2,
            nomPersoJ2 : preview_nomPersoJ2,
            chromaPersoJ2 : preview_chromaPersoJ2,
            universPersoJ2 : preview_universPersoJ2,
            scoreJ2 : preview_scoreJ2,
            couleurJ2 : preview_couleurJ2
        },
        presentation : {
            nomJ1 : presentation_nomJ1,
            numPersoJ1 : presentation_numPersoJ1,
            nomPersoJ1 : presentation_nomPersoJ1,
            nomPersoLJ1 : presentation_nomPersoLJ1,
            chromaPersoJ1 : presentation_chromaPersoJ1,
            universPersoJ1 : presentation_universPersoJ1,
            scoreJ1 : presentation_scoreJ1,
            couleurJ1 : presentation_couleurJ1,
            nomMatch : presentation_nomMatch,
            bo : presentation_bo,
            nomJ2 : presentation_nomJ2,
            numPersoJ2 : presentation_numPersoJ2,
            nomPersoJ2 : presentation_nomPersoJ2,
            nomPersoLJ2 : presentation_nomPersoLJ2,
            chromaPersoJ2 : presentation_chromaPersoJ2,
            universPersoJ2 : presentation_universPersoJ2,
            scoreJ2 : presentation_scoreJ2,
            couleurJ2 : presentation_couleurJ2
        }
    })
}
