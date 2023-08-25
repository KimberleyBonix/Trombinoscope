const promos = require("../../data/promos.json"); // [{}, {}, {}]
const students = require("../../data/students.json"); // [{}, {}, {}]

const db = require('../database/client');

const studentController = {
  renderAllStudentsOfPromoPage(req, res, next) {
    const promoId = Number(req.params.id);

    db.query(`SELECT * FROM "student" WHERE promo_id = ${promoId}`)

      .then(result => {
        if (result.rows.length === 0) {next();  return;}

        const promoStudents = result.rows;

        res.render("students", { students: promoStudents });
      })
      .catch(error => {
        res.status(404).render("500");
      });

  },

  renderOneStudentPage(req, res, next) {
    const studentId = parseInt(req.params.id);

    db.query(`SELECT * FROM "student" WHERE "id" = ${studentId}`)
      .then(result => {
        if (result.rows.length === 0) {
          next();  return;}

        const student = result.rows[0];
        res.render("student", { student });
      })
      .catch(error => {
        res.status(500).send("500");
      })
  }
};

module.exports = studentController;

