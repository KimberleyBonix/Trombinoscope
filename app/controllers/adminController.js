const promoDataMapper = require('../models/promoDataMapper');
const studentDataMapper = require('../models/studentDataMapper');

const adminController = {
    renderAddStudentPage: async(req, res)=> {
        const promos = await promoDataMapper.getAllPromos();

        res.render('addStudent', {promos});

    },

    createStudent: async(req, res) => {
        // createStudent utilise le req.body et l'envoie en paramère de la méthode insertStudent de notr dataMapper student
        try{
          const student = await studentDataMapper.addNewStudent(req.body);
          res.render('student', { student });
        }
        catch(err){
          console.log(err);
          res.status(500).render('500');
        }
    
      }
};

module.exports = adminController;