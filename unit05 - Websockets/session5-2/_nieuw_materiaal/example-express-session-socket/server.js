const express = require('express');
const session = require('express-session');
const http = require('http');
const ws = require('ws');

const app = express();

const sessionParser = session({
    secret: 'jdnkjewa',
    resave: false,
    saveUninitialized: false
});

app.use(express.static('public'));

app.use(sessionParser);

app.post('/login', (req, res) => {
    
    req.session.user = 'dwa';
    
    res.json({
        message: 'session started'
    });
});

app.delete('/logout', (req, res) => {    
    delete req.session.destroy(() => {
        res.json({ message: 'session ended' });
    });
});


const httpServer = http.createServer(app);

// Normaal ben je gewend om de http-server direct mee te geven aan de WebSocket-server,
// maar we gaan deze connectie zelf leggen in het upgrade-even van de http-server
// Daarom geven we nu als optie noServer: true mee.
const wsServer = new ws.Server({ noServer: true , path: '/example'});

// In het upgrade event gaan we nu zelf de switch maken tussen de http-server en
// de WebSocket-server. 
// De 'socket' parameter verwijst naar de onderliggende TCP-socket (en NIET naar 
// een WebSocket). Het idee is dat de WebSocket-server een nieuwe WebSocket-verbinding
// opent over deze TCP-socket.
httpServer.on('upgrade', (req, socket, head) => {
    
    //Eerst moeten we kijken of de client die de websocket wil openen wel een geldige
    //sessie heeft. Aangezien we nu niet in de express-app zitten, moeten we de session
    //parser zelf aanroepen.
    sessionParser(req, {}, () => {
        //Als er geen session is, dan probeert de client iets wat niet de bedoeling is
        //en sluiten we direct de TCP-verbinding met deze client.
        if (!req.session.user) {
            socket.destroy();
            return;
        }

        wsServer.handleUpgrade(req, socket, head, (ws) => {
            // ws is de nieuwe websocket die de websocket server net heeft gemaakt
            // we kopieren de user uit de session nu naar deze websocket zodat we
            // tijdens het vesturen en ontvangen van websocket berichtjes niet 
            // meer naar de session hoeven te kijken 
            ws.user = req.session.user;
            
            wsServer.emit('connection', ws, req);
        });
    });
});


wsServer.on('connection', (ws, req) => { 
    // Nu kunnne we de user informatie direct uit de websocket halen, zonder
    // dat we een session nodig hebben.
    ws.send(`${ws.user} is connected`);

    ws.on('message', (mes) => {
        ws.send(`we have received the message ${mes} from ${ws.user}`);
    });

    // Als je nu uitlogt, dan kun je nog steeds websocket berichtjes sturen
    // als de gebruiker die net heeft uitgelogd. 
    // Dat is eigenlijk niet de bedoeling. Hoe zou je dit oplossen?????
    
    
    
    // Hint: implementeer de oplossing in route handler van app.delete('/logout')
});

httpServer.listen(3000, () => {
    console.log('HTTP server started on port 3000');
});