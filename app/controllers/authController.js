

const authController = {
    getLogin: (req, res) => {
        res.render('login');
    },

    postLogin: (req, res) => {
        const userLogin = req.body.login;
        console.log(userLogin);

        req.session.login = userLogin;

        console.log(req.session);

        res.status(201).redirect('/');
    },
};

module.exports = authController;