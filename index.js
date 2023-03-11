const employee = {
    name : "Sam"
}
function updateEmployeeWithKeyAndValue(employee, key, value) {
    const newEmployee = {...employee};
    newEmployee[key]= value;
    return newEmployee;
}
function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value) {
    employee[key] = value;
    return employee;
}
function deleteFromEmployeeByKey(employee, key) {
    const newEmployee = {employee};
    employee[key] = `Sam`;
    return newEmployee;
}
function destructivelyDeleteFromEmployeeByKey(employee, name) {
    delete employee[name];
    return employee;
}