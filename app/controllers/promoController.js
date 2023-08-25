const db = require("../database/client");

const promoController = {
  renderAllPromosPage(req, res) {

    db.query('SELECT * FROM "promo" ORDER BY name ASC') // Promesse = un objet dont le resultat arrivera "plus tard"
      
      .then(result => { // Accéder au resultat de la promesse lorsqu'elle est 'fulfilled' // EX : result = { rows: [{}, {}]}
        const promos = result.rows;
        res.render("promos", { promos });
      })

      .catch(error => { // Accéder à l'erreur de la promesse si elle est 'rejected'
        console.error(error);
        res.status(500).render("500"); // 500 car la BDD plante, c'est pas la faute du client !
      });

  },

  renderOnePromoPage(req, res, next) {
    // Controle des inputs utilisateurs 
    const promoId = parseInt(req.params.id);
    if (isNaN(promoId)) { return next(); /* 404 */ }

    // Query à la BDD
    db.query(`SELECT * FROM "promo" WHERE id = $1`, [promoId])
    
      .then(result => {
        // Gestion 404
        if (result.rows.length === 0) { // Si le tableau des resultats est vide, c'est que la promo n'existe pas !
          next(); return; // 404 : le client n'est pas sensé demander cette ressource. (Not Found !)
        }
        // Gestion du succes de la query
        const promo = result.rows[0]; // Attention : result = { rows: [ {...}, {...}, {...} ] }
        // console.log(result); // { command: 'SELECT', rows: [{ id: 663, name: 'Cheesecake', github_organization: 'https://github.com/O-clock-Cheesecake' } ] }
        
        // Render la bonne page
        res.render("promo", { promo });
      })

      .catch(error => {
        console.error(error);
        res.status(500).render("500");
      });
  }
};

module.exports = promoController;
