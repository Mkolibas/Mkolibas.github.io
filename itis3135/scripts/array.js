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

function addRandomEmployee() {
    const randomNames = ["Alice", "Bob", "Charlie", "David", "Emma", "Frank", "Grace", "Henry"];
    const randomSalaries = Math.floor(Math.random() * 50000) + 30000; // Random salary between $30,000 and $80,000

    const randomName = randomNames[Math.floor(Math.random() * randomNames.length)];

    persons.push(randomName);
    salaries.push(randomSalaries);

    displaySalary();
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
