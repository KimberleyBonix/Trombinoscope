const db = require('../database/client');

const studentController = {
  renderAllStudentsOfPromoPage: async(req, res, next) => {
    const promoId = Number(req.params.id);

    try {
      const promoResult = await db.query(`SELECT * FROM "promo" WHERE id = $1`, [promoId]);

      const promo = promoResult.rows[0];
      if (!promo) {next();return;}

      const studentsResult = await db.query(`SELECT * FROM "student" WHERE promo_id = $1`, [promoId]);

      const promoStudents = studentsResult.rows;
      res.render("students", { students: promoStudents, promo });

    }
    catch (error){
      res.status(404).render("500");
    }

  },

  renderOneStudentPage: async (req, res, next) => {
    const studentId = parseInt(req.params.id);

    try {
      const studentPageResult = await db.query(`SELECT * FROM "student" WHERE "id" = $1`, [studentId]);

      if (studentPageResult.rows.length === 0) {next();return;}

      const student = studentPageResult.rows[0];
      res.render("student", { student});
    }
    catch(error) {
      res.status(500).send("500");
    }
  }
};

module.exports = studentController;

