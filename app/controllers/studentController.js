const studentDataMapper = require("../models/studentDataMapper");

const studentController = {
  renderAllStudentsOfPromoPage: async(req, res, next) => {
    const promoId = Number(req.params.id);
    if (isNaN(promoId)){return next();}

    try {
      const promoOfStudent = await studentDataMapper.getPromoOfStudent(promoId);
      if (!promoOfStudent) {next();return;}

      const allStudentOfPromo = await studentDataMapper.getAllStudentOfPromo(promoId);
      if (allStudentOfPromo.length === 0){next();return;}

      res.render("students", { students: allStudentOfPromo, promo: promoOfStudent });

    }
    catch (error){
      res.status(404).render("500");
    }

  },

  renderOneStudentPage: async (req, res, next) => {
    const studentId = parseInt(req.params.id);

    try {
      const student = await studentDataMapper.getStudent(studentId);
      if (!student){return next();}
      
      res.render("student", { student});
    }
    catch(error) {
      res.status(500).send("500");
    }
  }
};

module.exports = studentController;

