const express = require('express');
const path = require('path');
require("dotenv").config({ path: "./config/.env" });
require("./config/db");
const cookieParser = require("cookie-parser");
const cors = require("cors");
const postRoute = require("./routes/post.route");

const app = express(); // Création de l'application
app.use(express.json()); // Configuration de l'application pour utiliser le format JSON
app.use(cookieParser()); // Importation du module qui permet de gérer les cookies
// Configuration des entêtes de réponse pour permettre l'accès à l'API depuis n'importe quelle origine
app.use(cors({
    origin: process.env.FRONTEND_URL,
    credentials: true
  }));
// Configuration de l'analyseur de corps de requête pour analyser les requêtes en format JSON
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const port = process.env.PORT;

app.get('/', (req, res) => res.send('Hello World!'));
app.use('/api/post', postRoute);

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
