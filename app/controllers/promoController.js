const db = require("../database/client");

const promoController = {
  renderAllPromosPage: async(req, res) => {
    try {
      const promoResult = await db.query('SELECT * FROM "promo" ORDER BY name ASC');
      const promos = promoResult.rows;
      res.render("promos", { promos });

    } 
    catch (error){
      res.status(404).render("500");
    }

  },

  renderOnePromoPage: async(req, res, next) => {
    const promoId = Number(req.params.id);
    if (isNaN(promoId)) { return next();}

    try {
      const promoResult = await db.query(`SELECT * FROM "promo" WHERE id = $1`, [promoId]);
      if (promoResult.rows.length === 0) { next(); return; }

      const promo = promoResult.rows[0]; 
      res.render("promo", { promo });
    } 
    catch (error){
      res.status(404).render("500");
    }

  }
};

module.exports = promoController;
