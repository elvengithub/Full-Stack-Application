const db = require('../db');

exports.createUser = async (user) => {
    const [result] = await db.execute(
        'INSERT INTO users (first_name, last_name, email, password, role) VALUES (?, ?, ?, ?, ?)',
        [user.first_name, user.last_name, user.email, user.password, user.role || 'User']
    );
    return result.insertId;
};

exports.findByEmail = async (email) => {
    const [rows] = await db.execute('SELECT * FROM users WHERE email = ?', [email]);
    return rows[0];
};
