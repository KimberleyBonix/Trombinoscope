# QCM 1

Un `wireframe`, c'est :
- ❌ un board de gestion de projet ==> `Kanban` (ex, via Github Project)
- ✅ une maquette fonctionnelle
- ❌ le design final de la page ==> `mockup` 
- ❌ un tableau de Picasso


La description complète d'une fonctionnalité se trouve dans : 
- ❌ un `user-story` ==> scénario de test, au format très court : `En tant que... je souhaite... afin de...`
- ❌ une `pull request` ==> Demande d'intégration de code d'une branche vers une autre (lié à Git/Github)
- ✅ les **spécifications** d'un `use-case` ==> équivalent cahier des charges


`dotenv` permet de :
- ✅ charger des variables d'environnement ==> `require("dotenv").config()` en début de fichier d'index, on charge dans le PROCESSUS Node.js les variables définies dans le `.env`
- ❌ définir des variables d'environnement ==> `.env` on y déclare les variables
- ❌ empêcher de versionner les variables d'environnement ==> `.gitignore`
- ❌ les 3 réponses précédentes


Pour voir ce que fait la commande `npm run build`, je regarde dans quel fichier ?
- ❌ `index.js` ==> plutôt pour voir structure / point d'entrée de l'application
- ❌ `build.js`
- ✅ `package.json`

`npm run` permet de lancer un `script npm`. Les scripts npm sont définis dans le `package.json`

