const { query } = require('../config/db');
const moment = require('moment');


const getUsers = async (req, res) => {
    try {
        const sql = 'SELECT * FROM users';
        const rows = await query(sql);
        console.log('hi im jame 1st')
        return res.status(200).send(rows);
    } catch (error) {
        console.log(error);
        res.status(500).send({ message: 'Internal server error' });
    }
}


module.exports = {
    getUsers
}