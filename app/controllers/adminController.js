const promoDataMapper = require('../models/promoDataMapper');
const studentDataMapper = require('../models/studentDataMapper');
//const studentDataMapper = require('../models/studentDataMapper');

const adminController = {
    renderAddStudentPage: async(req, res, next)=> {
      if(req.session.login !== 'Michel'){
        return res.status(403).send('Accès non autorisé');
      }

        const promos = await promoDataMapper.getAllPromos();
        if(!promos){return next();}

        res.render('addStudent', {promos});
    }, 

    createPromo: async(req, res, next) =>{
      try{
        const newPromo = await promoDataMapper.addNewPromo(req.body);
        res.render('promo', {promo : newPromo});
      }
      catch(err){
        console.error(err);
        res.status(500).render('500');
      }
  
    },

    createStudent: async(req, res, next) => {
      try{
          const newStudent = await studentDataMapper.createNewStudent(req.body);
          if(!newStudent){return next();}
          console.log(newStudent);
          res.status(201).redirect(`/student/${newStudent.id}`);
      }
      catch(err){
        console.error(err);
        res.status(500).render('500');
      }

    },
};

module.exports = adminController;