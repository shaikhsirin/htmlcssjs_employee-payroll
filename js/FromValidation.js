window.addEventListener('DOMContentLoaded', () => {
    validName();
    salaryRange();
});

function validName() {
    const name = document.querySelector("#name");
    const textError = document.querySelector(".text-error");
    name.addEventListener('input', function () {
        try {
            let empData = new EmployeePayrollData();
            empData.name = name.value;
            textError.textContent = "";
        } catch (e) {
            textError.textContent = e;
        }
    });
}

/** set event listener on salary range*/
function salaryRange() {
    const salary = document.querySelector("#salary");
    const output = document.querySelector('.salary-output');
    salary.addEventListener('input', function () {
        output.textContent = salary.value;
    });
}

/** On form submit populate employee payroll data object */
const save = () => {
    let employeePayrollData = createEmployeePayroll();
    createAndUpdateLocalStorage(employeePayrollData);
}

const createEmployeePayroll = () => {
    let employeePayrollData = new EmployeePayrollData();
    try {
        employeePayrollData.name = getInputValueById('#name');
        setTextValue('.text-error', "");
    } catch (e) {
        setTextValue('.text-error', e);
    }

    try {
        let date = getInputValueById('#day') + " " + getInputValueById('#month') + " " + getInputValueById('#year');
        employeePayrollData.startDate = new Date(Date.parse(date));
        setTextValue('.date-error', "");
    } catch (e) {
        setTextValue('.date-error', e);
    }

    employeePayrollData.profilePic = getSelectedValues('[name=profile]').pop();
    employeePayrollData.gender = getSelectedValues('[name=gender]').pop();
    employeePayrollData.department = getSelectedValues('[name=department]');
    employeePayrollData.salary = getInputValueById('#salary');
    employeePayrollData.note = getInputValueById('#notes');
    employeePayrollData.id = new Date().getTime() + 1;
    alert(employeePayrollData.toString());
    return employeePayrollData;
}

const getInputValueById = (id) => {
    let value = document.querySelector(id).value;
    return value;
}

const setTextValue = (id, message) => {
    const textError = document.querySelector(id);
    textError.textContent = message;
}

const getSelectedValues = (propertyValue) => {
    let allItems = document.querySelectorAll(propertyValue);
    let setItems = [];
    allItems.forEach(item => {
        if (item.checked == true)
            setItems.push(item.value);
    });
    return setItems;
}

/** save employee object into local storage */
const createAndUpdateLocalStorage = (empData) => {
    let dataList = JSON.parse(localStorage.getItem("EmployeePayrollList"));
    if (dataList != undefined) {
        dataList.push(empData)
    }
    else {
        dataList = [empData];
    }
    localStorage.setItem('EmployeePayrollList', JSON.stringify(dataList));
    alert("data stored with name " + empData.name);
}

/** Reset employee payroll form */

const resetForm = () => {
    setTextValue('#name', '');
    unsetSelectedValues('[name=profile]');
    unsetSelectedValues('[name=gender]');
    unsetSelectedValues('[nmae=department]');
    setValue('#salary','');
    setValue('#notes','');
    setValue('#day','1');
    setValue('#month','January');
    setValue('#year','2021');
}

const unsetSelectedValues =(propertyValue) =>{
    let allItems = document.querySelectorAll(propertyValue);
    allItems.forEach (item =>{
        item.checked = false;
    });
}

const setValue = (id, value) =>{
    const element = document.querySelector(id);
    element.value = value;
}