const employee = {
    name : "Enes",
    streetAdress : "Ulus",
};
function updateEmployeeWithKeyAndValue(employee,key,value) {
    return Object.assign({},employee,{[key]:value});
}; 
function destructivelyUpdateEmployeeWithKeyAndValue(employee,key,value){
    employee[key] = value;
    return employee;
};
function deleteFromEmployeeByKey(){
    const newEmployee = Object.assign({},employee);
    delete newEmployee.name;
    return newEmployee;
};
function destructivelyDeleteFromEmployeeByKey(){
    delete employee.name;
    return employee;
};