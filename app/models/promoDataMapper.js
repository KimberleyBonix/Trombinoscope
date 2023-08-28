const db = require('../database/client');

const promoDataMapper = {
    async getAllPromos() {
        const promoResult = await db.query('SELECT * FROM "promo" ORDER BY name ASC');
        return promoResult.rows;
    },

    async getPromoFromId(id){
        const promoResult = await db.query(`SELECT * FROM "promo" WHERE id = $1`, [id]);
        return promoResult.rows[0]; 
    }
};

module.exports = promoDataMapper;