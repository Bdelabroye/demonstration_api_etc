const express = require('express');
const app = express();
const path = require('path');

// Servir les fichiers statiques du dossier 'front'
app.use(express.static(path.join(__dirname, '../front')));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../front/index.html'));
    });

    //à deux paramètres : le port et une fonction de rappel/anonyme/callback
app.listen(3000, () => {
    console.log('Server is running on http://localhost:3000');
});