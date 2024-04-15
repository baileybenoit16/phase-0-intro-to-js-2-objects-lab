// Write your solution in this file!
const employee = {
    name: "Sam",
    address: "11 Broadway"
}

function updateEmployeeWithKeyAndValue(employee, key, value){
    return {
    ...employee,
    [key]: value,
    };
}

function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value){
    employee[key] = value;
    return employee;
}
const newAddress = destructivelyUpdateEmployeeWithKeyAndValue(
    employee,
    "street",
    "12 Broadway"
);

function deleteFromEmployeeByKey(employee, key) {
    const newEmployee = {...employee};
    delete newEmployee[key];
    return newEmployee;
}

function destructivelyDeleteFromEmployeeByKey(employee, key) {
    delete employee[key];
    return employee;
}