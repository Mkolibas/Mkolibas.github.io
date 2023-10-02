// Time Function
function displayTime() {
    const now = new Date();
    const dayOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"][now.getDay()];
    const monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    const month = monthNames[now.getMonth()];
    const date = now.getDate();
    const year = now.getFullYear();
    const hours = now.getHours();
    const minutes = now.getMinutes();

    const timeDisplay = document.getElementById("timeDisplay");
    timeDisplay.textContent = `Today is ${hours}:${minutes < 10 ? '0' : ''}${minutes}${hours < 12 ? 'am' : 'pm'} on ${dayOfWeek}, ${date} ${month}, ${year}`;
}
// Used to handle the data submitted in the form
function handleSubmit(event) {
    event.preventDefault();
    const name = document.getElementById("name").value;
    const mood = document.getElementById("mood").value;
    const favoriteNumberInput = document.getElementById("favoriteNumber");
    let favoriteNumber = parseInt(favoriteNumberInput.value);

    // Check for negative or decimal
    if (isNaN(favoriteNumber) || favoriteNumber < 0) {
        // Use Math.abs to convert negative numbers to positive using absolute value
        favoriteNumber = Math.abs(favoriteNumber);
    }

    // Simple Rounding
    favoriteNumber = Math.round(favoriteNumber);

    // Switch Statement used to determine Polygon based on the number input
    let polygonName = "";
    switch (favoriteNumber) {
        case 0:
            polygonName = "Point";
            break;
        case 1:
            polygonName = "Monogon";
            break;
        case 2:
            polygonName = "Digon";
            break;
        case 3:
            polygonName = "Triangle";
            break;
        case 4:
            polygonName = "Quadrilateral";
            break;
        case 5:
            polygonName = "Pentagon";
            break;
        case 6:
            polygonName = "Hexagon";
            break;
        case 7:
            polygonName = "Heptagon";
            break;
        case 8:
            polygonName = "Octagon";
            break;
        case 9:
            polygonName = "Nonagon";
            break;
        case 10:
            polygonName = "Decagon";
            break;
        default:
            polygonName = "Polygon with more than 10 sides";
            break;
    }

    //Greeting 
    const greeting = document.getElementById("greeting");
    greeting.innerHTML = `The Your Company Name welcomes you, ${name}!<br>We're glad you are doing ${mood}!<br>Your favorite number corresponds to a "${polygonName}".`;

    // Display the polygon
    alert(`Your favorite number corresponds to a "${polygonName}".`);
}

// Add an event listener to the form submission
const userForm = document.getElementById("userForm");
userForm.addEventListener("submit", handleSubmit);

// Used to display the current time
displayTime();
