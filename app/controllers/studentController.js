const db = require('../database/client');

const studentController = {
  /* renderAllStudentsOfPromoPage(req, res, next) {
    const promoId = Number(req.params.id);

    db.query(`SELECT * FROM "student" WHERE promo_id = ${promoId}`)

      .then(result => {
        if (result.rows.length === 0) {next();  return;}

        const promoStudents = result.rows;
        res.render("students", { students: promoStudents, promo });
      })
      .catch(error => {
        res.status(404).render("500");
      });

  }, */

  renderAllStudentsOfPromoPage(req, res, next) {
    const promoId = Number(req.params.id);
  
    // Query to fetch promo information
    const promoQuery = `SELECT * FROM "promo" WHERE id = $1`;
  
    // Query to fetch students of the promo
    const studentsQuery = `SELECT * FROM "student" WHERE promo_id = $1`;
  
    db.query(promoQuery, [promoId])
      .then(promoResult => {
        const promo = promoResult.rows[0];
        
        if (!promo) {next();return;}
  
        db.query(studentsQuery, [promoId])
          .then(studentsResult => {
            const promoStudents = studentsResult.rows;
            res.render("students", { students: promoStudents, promo });
          });
      })
      .catch(error => {
        res.status(404).render("500");
      });
  },

  renderOneStudentPage(req, res, next) {
    const studentId = parseInt(req.params.id);

    db.query(`SELECT * FROM "student" WHERE "id" = $1`, [studentId])
      .then(result => {
        if (result.rows.length === 0) {next();return;}

        const student = result.rows[0];
        res.render("student", { student });
      })
      .catch(error => {
        res.status(500).send("500");
      });
  }
};

module.exports = studentController;

