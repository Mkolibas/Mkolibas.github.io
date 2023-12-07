document.addEventListener("DOMContentLoaded", function () {
    const form = document.querySelector('.contact-form form');

    form.addEventListener('submit', function (event) {
        event.preventDefault(); // Prevent the default form submission

        // Validate the form fields (you can add more complex validation if needed)
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const subject = document.getElementById('subject').value;
        const message = document.getElementById('message').value;

        if (name.trim() === '' || email.trim() === '' || subject.trim() === '' || message.trim() === '') {
            alert('Please fill in all fields.'); // Display an alert if any field is empty
        } else {
            // If all fields are filled, show a confirmation message and reset the form
            alert('Request submitted. Thank you!');
            form.reset();
        }
    });
});