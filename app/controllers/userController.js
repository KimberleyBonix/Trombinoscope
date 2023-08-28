//const db = require("../database/client");

const userController = {
    renderLoginPage: async(req, res)=> {

        res.render('login');

    },
};

module.exports = userController;