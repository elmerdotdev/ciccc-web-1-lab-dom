const form = document.querySelector('form');

form.addEventListener('submit', (e) => {
  e.preventDefault();

  const formData = new FormData(form);
  const newEmployee = {
    firstname: formData.get('firstname'),
    lastname: formData.get('lastname'),
    email: formData.get('email'),
    hire_date: formData.get('hire_date'),
    photo: formData.get('photo').name // Get the file name
  };

  // Display the employee information on the page
  displayEmployee(newEmployee);
  form.reset()
});

function displayEmployee(employee) {
  const employeeList = document.querySelector('#employeeList');
  const employeeItem = document.createElement('tr');

  employeeItem.innerHTML = `
    <td><img src="../images/${employee.photo}"/></td>
    <td>${employee.firstname}</td>
    <td>${employee.lastname}</td>
    <td>${employee.email}</td>
    <td>${employee.hire_date}</td>
  `;

  const deleteBtn = document.createElement('button')
  deleteBtn.textContent = 'Delete'
  deleteBtn.addEventListener('click', () => {
    if (confirm('Are you sure you want to delete this employee?') === true) {
      deleteBtn.parentElement.parentElement.remove()
    }
  })
  const deleteCell = document.createElement('td')
  deleteCell.append(deleteBtn)
  employeeItem.append(deleteCell)

  employeeList.appendChild(employeeItem);
}