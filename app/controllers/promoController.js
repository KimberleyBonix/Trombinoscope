const promoDataMapper = require("../models/promoDataMapper");

const promoController = {
  renderAllPromosPage: async(req, res) => {
    try {
      const promos = await promoDataMapper.getAllPromos();
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
      const promo = await promoDataMapper.getPromoFromId(promoId);

      res.render("promo", { promo });
    } 
    catch (error){
      res.status(404).render("500");
    }

  }
};

module.exports = promoController;
