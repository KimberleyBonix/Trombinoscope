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
    // Récupérer l'Id de l'étudiant demandé
    const studentId = parseInt(req.params.id);

    // Récupérer les infos de l'étudiant demandé
    const student = students.find(student => student.id === studentId);

    // Si pas d'étudiant, 404, on s'arrête
    if (!student) { next(); return; } // Clause de gardes sont parfois sur 1 ligne

    // Sinon, render la page d'un étudiant
    res.render("student", { student });
  }
};

module.exports = studentController;

