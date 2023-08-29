const db = require('../database/client');

const promoDataMapper = {
    async getAllPromos() {
        const promoResult = await db.query('SELECT * FROM "promo" ORDER BY name ASC');
        return promoResult.rows;
    },

    async getPromoFromId(id){
        const promoResult = await db.query(`SELECT * FROM "promo" WHERE id = $1`, [id]);
        return promoResult.rows[0]; 
    },

    async addNewPromo(promo){
        const {name, github_organization} = promo;
        const sqlQuery = `INSERT INTO "promo"("name", "github_organization") VALUES ($1, $2) RETURNING *`;
        const newPromo = await db.query(sqlQuery, [name, github_organization]);
        console.log(newPromo.rows);
        return newPromo.rows[0];
    },
};

module.exports = promoDataMapper;