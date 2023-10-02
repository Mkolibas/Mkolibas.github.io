document.getElementById("nameMoodForm").addEventListener("submit", function (e) {
    e.preventDefault();
    
    // Get the values from the form
    var name = document.getElementById("name").value;
    var mood = document.getElementById("mood").value;

    // Display the data in a pop-up
    var message = "Name: " + name + "\nMood: " + mood;
    alert(message);
});