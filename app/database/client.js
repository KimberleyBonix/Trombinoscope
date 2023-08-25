// On définit un client de connexion vers sa base de données
const { Client } = require("pg");

const client = new Client(process.env.PG_URL); // On créé le client

client.connect(); // On créé le "tuyau" de connexion

module.exports = client; // On exporte ce client pour pouvoir le réutiliser dans les autres fichiers !

