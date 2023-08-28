const db = require("../database/client");

const searchController = {
    renderSearchPage(req, res) {
        res.render('search');
    },

    renderResultPage: async(req, res) => {
        try {
            const search  = '%' + req.query.search + '%';
            const searchResult = await db.query('SELECT * FROM "promo" WHERE "name" ILIKE $1', [search]);
            
            res.render('result', {results: searchResult.rows});

        }
        catch (error){
            res.status(404).render("500");
        }
    },

};


module.exports = searchController;