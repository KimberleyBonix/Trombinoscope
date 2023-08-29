const mainController = {
  renderHomePage(req, res) {
    const user = req.session.login;
    res.render("home", {user});
  }
};

module.exports = mainController;
