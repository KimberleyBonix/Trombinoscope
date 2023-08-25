const promos = require("../../data/promos.json"); // [{}, {}, {}]
const students = require("../../data/students.json"); // [{}, {}, {}]

const studentController = {
  renderAllStudentsOfPromoPage(req, res, next) {
    // Récupérer l'ID de la promo demandée --> promoId
    const promoId = parseInt(req.params.id); // ex: 663

    // Vérifier si la promo existe. Si elle n'existe pas, 404 !
    // Importer les données des promos
    // Vérifions si dans le tableau "promos" il existe un objet dont l'ID est promoId 
    const doesPromoExist = promos.some(promo => promo.id === promoId);
    if (!doesPromoExist) {
      next(); // On renvoie la 404
      return; // Note : on pourrait faire un ELSE au lieu de return. Ceci est une clause de guard / early return
    }

    // Récupérer les étudiants qui sont dans la promo.
    const promoStudents = students.filter(student => student.promo === promoId);

    // Renvoyer la page qui affiche les étudiants
    // 1. Créer la vue EJS
    // 2. Fournir les étudiants à la vue pour qu'elle puisse faire une boucle dessus
    // 3. implémenter la vue !

    res.render("students", { students: promoStudents });
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

