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

// Call displayTime() initially to set the time
displayTime();

// Set an interval to call displayTime() every second (1000 milliseconds)
setInterval(displayTime, 1000);

// Used to handle the data submitted in the form
function handleSubmit(event) {
    event.preventDefault();
    const name = document.getElementById("name").value;
    const mood = document.getElementById("mood").value;
    const favoriteNumberInput = document.getElementById("favoriteNumber");
    let favoriteNumber = parseInt(favoriteNumberInput.value);

    // Check if the input is a negative number or a decimal
    if (isNaN(favoriteNumber) || favoriteNumber < 0) {
        // Convert negative numbers to positive (absolute value)
        favoriteNumber = Math.abs(favoriteNumber);
    }

    // Round decimal numbers to the nearest integer
    favoriteNumber = Math.round(favoriteNumber);

    // Determine the name of the polygon based on the number of sides
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

    // Display the information in a popup
    const message = `Kolib Enterprises welcomes you, ${name}!\nWe're glad you are doing ${mood}!\nYour favorite number corresponds to a "${polygonName}".`;
    alert(message);
}

function kangarooJumpBoost() {
    const input = document.getElementById("jumpInput").value;
    const result = input * 10;
    document.getElementById("jumpResult").textContent = `Result: ${result}`;
}

const kangarooCodeSnippets = [
    //Area to hold code snippets can add more later for randomization
    "Kangaroo.hop(5);",
    "Kangaroo.eat('grass');",
];

//function used to generate code for kangarooCodeSnippets
function generateCode() {
    const randomIndex = Math.floor(Math.random() * kangarooCodeSnippets.length);
    const code = kangarooCodeSnippets[randomIndex];
    document.getElementById("codeSnippet").textContent = `Generated Code: ${code}`;
}

//knock knock joke
function tellJoke() {
    const joke = "Knock knock.\nWho's there?\nKangaroo.\nKangaroo who?\nKangaroo-all over the place!";
    document.getElementById("jokeResponse").textContent = joke;
}

function convertToAUD() {
    // Prompt the user for a USD amount
    const usdAmount = parseFloat(prompt("Enter the amount in USD:"));

    // Check for usable number
    if (!isNaN(usdAmount)) {
        // Defining the exchange rate - not going to be current or anything since that seems pretty hard to do but may be simple like the clock
        const exchangeRate = 1.35; // I believe this is the current exchange rate as of 10/1/2023

        // Calculate AUD
        const audAmount = usdAmount * exchangeRate;

        // Display the result 
        alert(`Equivalent amount in AUD: ${audAmount.toFixed(2)} AUD`);
    } else {
        // If user imputs an invalid number
        alert("Please enter a valid number for the USD amount.");
    }
}

//Starting Count
let hopCount = 0;

function hophop() {
    hopCount++; // Increment the count
    const hop = `${hopCount} Hop(s) this time!`; //Display Count in the sentence
    document.getElementById("hopResponse").textContent = hop;
}

// Add an event listener to the form submission
const userForm = document.getElementById("userForm");
userForm.addEventListener("submit", handleSubmit);
