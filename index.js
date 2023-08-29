// Charger les variables d'environnement
require("dotenv").config();
// require("dotenv/config"); // Alternativement

// Import dependences
const express = require("express");
const session = require("express-session");
const router = require("./app/router");

// Create app
const app = express();

app.use(session({
  secret: 'keyboard cat',
  resave: false,
  saveUninitialized: true,
  cookie: {}

}));

// Use post method
app.use(express.json());
app.use(express.urlencoded({
  extended : false
}));

// Configure view engine
app.set("view engine", "ejs");
app.set("views", "./app/views");

// Setup public folder
app.use(express.static("./public")); // Toutes les ressources présentes dans le dossier "public" seront donc accessible via leur nom de fichier !

// Configure routes
app.use(router);

// Start app
const PORT = process.env.PORT || 3000; // Port par défaut classique : 3000 / 8080 / 8000 (fallback = filet de sécurité = ici par défaut, PORT=3000)
app.listen(PORT, () => {
  console.log(`Listening at http://localhost:${PORT}`);
});

