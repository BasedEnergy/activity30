const employeeList = [
  {
    name: 'Jan',
    officeNum: 1,
    phoneNum: '222-222-2222'
  },
  {
    name: 'Juan',
    officeNum: 304,
    phoneNum: '489-789-8789'
  },
  {
    name: 'Margie',
    officeNum: 789,
    phoneNum: '789-789-7897'
  },
  {
    name: 'Sara',
    officeNum: 32,
    phoneNum: '222-789-4654'
  },
  {
    name: 'Tyrell',
    officeNum: 3,
    phoneNum: '566-621-0452'
  },
  {
    name: 'Tasha',
    officeNum: 213,
    phoneNum: '789-766-5675'
  },
  {
    name: 'Ty',
    officeNum: 211,
    phoneNum: '789-766-7865'
  },
  {
    name: 'Sarah',
    officeNum: 345,
    phoneNum: '222-789-5231'
  }
];

const userFunction = prompt('Input a command');

// print all array objects
if (userFunction === 'print'){
  for (let i = 0; i < employeeList.length; i++){
  render (employeeList[i].name);
  render (employeeList[i].officeNum);
  render (employeeList[i].phoneNum);
  }
}


// verify employee name with T or F
else if (userFunction === 'verify'){
  const verifyName = prompt('enter employee name:');
  msg = 'false';
  for (let i = 0; i < employeeList.length; i++){
    if (employeeList[i].name === verifyName){
    msg = 'true';
    }
  }
  render (msg);
}

//lookup employee information
else if (userFunction === 'lookup'){
  const lookupName = prompt('enter employee name:');
  for (let i = 0; i < employeeList.length; i++){
    if (employeeList[i].name === lookupName){
      render (employeeList[i].name);
      render (employeeList[i].officeNum);
      render (employeeList[i].phoneNum);
    }
  }
}

//not finished
//contains - prints all employee info if contains string
else if (userFunction === 'contains'){
  const containsName = prompt('enter a partial name:');
  for (let i = 0; i < employeeList.length; i++){
      if (employeeList[i].includes(containsName)){
      render (employeeList[i].name);
      render (employeeList[i].officeNum);
      render (employeeList[i].phoneNum);
    }
  }
}

//not finished
//update - prompt for name, let user update field, print new info
else if (userFunction === 'update'){
  const updateName = prompt('enter employee name');
  const updateField = prompt('which field would you like to update?');
  const updateValue = prompt('what is the new value?');
  for (let i = 0; i < employeeList.length; i++){
    if (updateName === employeeList[i].name);
    
      
    
  }
}

// add employee info to list
else if (userFunction === 'add'){
  const newName = prompt('enter new employee name');
  const newOffice = prompt('enter new office number');
  const newNumber = prompt('enter new telephone number');
  var newEmployee = {
    name: newName,
    officeNum: newOffice,
    phoneNum: newNumber
  }
  employeeList.push(newEmployee);
  for (let i = 0; i < employeeList.length; i++){
    render (employeeList[i].name);
    render (employeeList[i].officeNum);
    render (employeeList[i].phoneNum);
  }
}

// delete object from array
else if (userFunction === 'delete') {
  const deleteName = prompt('which employee to delete?');
  for (let i = 0; i < employeeList.length; i++) {
    if (deleteName === employeeList[i].name) {
      employeeList.splice(deleteName, 1);
    }
    render(employeeList[i].name);
    render(employeeList[i].officeNum);
    render(employeeList[i].phoneNum);
  }
}