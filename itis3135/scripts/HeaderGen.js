// HeaderGen.js

// Get the current URL (page)
var currentURL = window.location.href;

// Function to load the header from Header.html
function loadHeader() {
  var headerContainer = document.getElementById('header-container');

  // Create an XMLHttpRequest object
  var xhr = new XMLHttpRequest();

  xhr.onreadystatechange = function () {
    if (xhr.readyState === 4 && xhr.status === 200) {
      // Insert the header HTML into the container
      headerContainer.innerHTML = xhr.responseText;

      // Get all the navigation links in the header
      var navLinks = headerContainer.querySelectorAll('nav a');

      // Loop through the links and check if their href matches the current URL
      navLinks.forEach(function (link) {
        if (link.getAttribute('href') === currentURL) {
          // Hide the link if it matches the current URL
          link.style.display = 'none';
        }
      });
    }
  };

  // Request the Header.html file
  xhr.open('GET', 'Header.html', true);
  xhr.send();
}

// Call the loadHeader function when the page loads
window.addEventListener('DOMContentLoaded', loadHeader);
