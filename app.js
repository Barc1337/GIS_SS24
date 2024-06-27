const sqlite3 = require('sqlite3').verbose();
let sql;

// Connect to DB
const db = new sqlite3.Database('./myDatabase.db', sqlite3.OPEN_READWRITE | sqlite3.OPEN_CREATE, (err) => {
    if (err) return console.error('Fehler beim Verbinden mit der Datenbank:', err.message);
    console.log('Verbindung zur Datenbank erfolgreich.');
});

// Create table if it doesn't exist
sql = `CREATE TABLE IF NOT EXISTS Iphones (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT NOT NULL,
    color TEXT NOT NULL,
    price REAL NOT NULL
)`;
db.run(sql, (err) => {
    if (err) return console.error('Fehler beim Erstellen der Tabelle:', err.message);
    console.log('Tabelle erfolgreich erstellt oder existiert bereits.');

    // Insert default data after table creation
    insertDefaultData();
});

// Insert data into table
function insertData(name, color, price) {
    sql = `INSERT INTO Iphones (name, color, price) VALUES (?, ?, ?)`;
    db.run(sql, [name, color, price], (err) => {
        if (err) return console.error('Fehler beim Einfügen der Daten:', err.message);
        console.log(`Daten erfolgreich eingefügt: ${name}`);
    });
}

// Insert default data
function insertDefaultData() {
    const defaultSmartphones = [
        { name: "Apple Iphone 15 128 GB", color: "Schwarz", price: 799 },
        { name: "Apple Iphone 15 Pro 128 GB", color: "Titan Schwarz", price: 899 },
        { name: "Apple Iphone 15 Pro Max 128 GB", color: "Titan Schwarz", price: 1199 }
    ];

    defaultSmartphones.forEach(smartphone => {
        insertData(smartphone.name, smartphone.color, smartphone.price);
    });
}

// App.js
const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database('./myDatabase.db');

// Funktion zum Abfragen von Daten aus der Datenbank
function queryData(callback) {
    const sql = "SELECT * FROM Iphones";
    db.all(sql, [], callback);
}

module.exports = {
    queryData
};

// Update data
function updateData(id, name) {
    sql = `UPDATE Iphones SET name = ? WHERE id = ?`;
    db.run(sql, [name, id], (err) => {
        if (err) return console.error('Fehler beim Aktualisieren der Daten:', err.message);
        console.log('Daten erfolgreich aktualisiert.');
    });
}

// Delete data
function deleteData(id) {
    sql = `DELETE FROM Iphones WHERE id = ?`;
    db.run(sql, [id], (err) => {
        if (err) return console.error('Fehler beim Löschen der Daten:', err.message);
        console.log('Daten erfolgreich gelöscht.');
    });
}

// Query the data
function queryData(callback) {
    sql = `SELECT * FROM Iphones`;
    db.all(sql, [], (err, rows) => {
        if (err) {
            console.error('Fehler beim Abfragen der Daten:', err.message);
            callback(err, null);
        } else {
            callback(null, rows);
        }
    });
}

// Example usage (uncomment to use)
// updateData(1, 'Apple Iphone 15 128 GB Updated');
// deleteData(1);
// queryData();

module.exports = {
    insertData,
    updateData,
    deleteData,
    queryData
};

