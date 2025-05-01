const db = require('../db');

exports.getAll = async () => {
    const [rows] = await db.execute('SELECT * FROM employees');
    return rows;
};

exports.getById = async (id) => {
    const [rows] = await db.execute('SELECT * FROM employees WHERE id = ?', [id]);
    return rows[0];
};

exports.create = async (emp) => {
    const [result] = await db.execute(
        'INSERT INTO employees (employee_id, user_id, position, hire_date, department_id) VALUES (?, ?, ?, ?, ?)',
        [emp.employeeId, emp.userId, emp.position, emp.hireDate, emp.departmentId]
    );
    return result.insertId;
};

exports.update = async (id, emp) => {
    await db.execute(
        'UPDATE employees SET position = ?, hire_date = ?, department_id = ? WHERE id = ?',
        [emp.position, emp.hireDate, emp.departmentId, id]
    );
};

exports.remove = async (id) => {
    await db.execute('DELETE FROM employees WHERE id = ?', [id]);
};
