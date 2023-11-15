let persons = [];
let salaries = [];

function addSalary() {
  const person = document.getElementById("personInput").value.trim();
  const salary = document.getElementById("salaryInput").value.trim();

  if (person === '' || isNaN(Number(salary))) {
    alert("Please enter valid name and numeric salary.");
    return;
  }

  persons.push(person);
  salaries.push(Number(salary));

  document.getElementById("personInput").value = ''; // Clear input fields
  document.getElementById("salaryInput").value = '';

  moveCursorToNameField();
}

function displayResults() {
  const avgSalary = calculateAverage(salaries);
  const maxSalary = Math.max(...salaries);

  const resultsDiv = document.getElementById("results");
  resultsDiv.innerHTML = `
    <h2>Results</h2>
    <p>Average Salary: ${avgSalary}</p>
    <p>Highest Salary: ${maxSalary}</p>
  `;
}

function displaySalary() {
  const tableBody = document.getElementById("table_body");
  tableBody.innerHTML = '';

  for (let i = 0; i < persons.length; i++) {
    const row = `<tr><td>${persons[i]}</td><td>${salaries[i]}</td></tr>`;
    tableBody.insertAdjacentHTML('beforeend', row);
  }
}

function calculateAverage(arr) {
  const total = arr.reduce((acc, curr) => acc + curr, 0);
  return (total / arr.length).toFixed(2);
}

function moveCursorToNameField() {
  document.getElementById("personInput").focus();
}

// Set cursor to name field on page load
moveCursorToNameField();
