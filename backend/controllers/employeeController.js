exports.getEmployees = (req, res) => {
    res.send('Get all employees');
};

exports.getEmployeeById = (req, res) => {
    res.send(`Get employee with ID ${req.params.id}`);
};

exports.createEmployee = (req, res) => {
    res.send('Create employee');
};

exports.updateEmployee = (req, res) => {
    res.send(`Update employee with ID ${req.params.id}`);
};

exports.deleteEmployee = (req, res) => {
    res.send(`Delete employee with ID ${req.params.id}`);
};
