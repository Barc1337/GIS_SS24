const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs');
const path = require('path');
const cors = require('cors');

const app = express();
const port = 3000;
const cartFilePath = path.join(__dirname, 'data', 'Warenkorb.json');
const frontendDir = path.join(__dirname, 'frontend');

// Statische Dateien aus dem "frontend"-Ordner bereitstellen
app.use(express.static(frontendDir));
app.use(cors());
app.use(bodyParser.json());

// Root-Route, um startseite.html zu liefern
app.get('/', (req, res) => {
    res.sendFile(path.join(frontendDir, 'startseite.html'));
});

// Route zum Abrufen des Warenkorbs
app.get('/api/cart', (req, res) => {
    fs.readFile(cartFilePath, 'utf8', (err, data) => {
        if (err) {
            console.error('Fehler beim Lesen der Datei:', err);
            return res.status(500).json({ error: 'Fehler beim Lesen der Datei' });
        }

        const cart = JSON.parse(data || '[]');
        res.json(cart);
    });
});

// Route zum Hinzufügen zum Warenkorb
app.post('/api/cart', (req, res) => {
    const newItem = req.body;

    fs.readFile(cartFilePath, 'utf8', (err, data) => {
        if (err) {
            console.error('Fehler beim Lesen der Datei:', err);
            return res.status(500).json({ error: 'Fehler beim Lesen der Datei' });
        }

        const cart = JSON.parse(data || '[]');
        cart.push(newItem);

        fs.writeFile(cartFilePath, JSON.stringify(cart), (err) => {
            if (err) {
                console.error('Fehler beim Schreiben der Datei:', err);
                return res.status(500).json({ error: 'Fehler beim Schreiben der Datei' });
            }

            res.json({ success: true });
        });
    });
});

// Route zum Leeren des Warenkorbs
app.delete('/api/cart', (req, res) => {
    fs.writeFile(cartFilePath, JSON.stringify([]), (err) => {
        if (err) {
            console.error('Fehler beim Leeren des Warenkorbs:', err);
            return res.status(500).json({ error: 'Fehler beim Leeren des Warenkorbs' });
        }

        res.json({ success: true });
    });
});

app.listen(port, () => {
    console.log(`Server läuft auf http://localhost:${port}`);
});
