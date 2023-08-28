const db = require('../database/client');

const studentDataMapper = {

    async getPromoOfStudent(promoId) {
        const promoResult = await db.query(`SELECT * FROM "promo" WHERE id = $1`, [promoId]);
        return promoResult.rows[0];
    },

    async getAllStudentOfPromo(promoId){
        const studentsResult = await db.query(`SELECT * FROM "student" WHERE promo_id = $1`, [promoId]);
        return studentsResult.rows;
    },

    async getStudent(studentId){
        const studentPageResult = await db.query(`SELECT * FROM "student" WHERE "id" = $1`, [studentId]);
        return studentPageResult.rows[0];
    }
};


module.exports = studentDataMapper;