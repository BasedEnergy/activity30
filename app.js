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
  ,
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
    render (employeeList[i]);
  }
}

// verify employee name with T or F
else if (userFunction === 'verify'){
  const verifyName = prompt('enter employee name:');
  let msg = 'false';
  for (let i = 0; i < employeeList.length; i++){
    if (employeeList[i].name === verifyName){
    msg = 'true';
    }
    render (msg);
  }

}

//lookup employee information
else if (userFunction === 'lookup'){
  const lookupName = prompt('enter employee name:');
}


//contains - prints all employee info if contains string

//update - prompt for name, let user update field, print new info

// add employee info to list

// delete object from array