const { Client } = require("pg"); // Client = la fabrique à client

const DB_URL = "postgres://etudiant:js4life@pg.oclock.lan:5432/trombi"; // Addresse de la BDD que l'on va contacter
const client = new Client(DB_URL);

// On connecte le client -> on créé le tunnel entre notre machine et la BDD !
client.connect();

// On fait notre première query

client.query('SELECT * FROM "student"', (error, result) => { // Cette fonction se déclenchera lorsque le résultat de la query arrive ! (qques millisecondes >>> qques ns pour le reste du code)
  console.log(error);
  console.log(result);
});




// Schéma classique pour les addresse de BDD : 
// protocol://user:password@host:port/database_name

