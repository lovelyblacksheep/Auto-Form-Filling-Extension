// contentScript.js

// Function to fill in the email, phone number, and first name on the form
function autoFillForm() {
  // Retrieve the stored data from Chrome's local storage
  chrome.storage.local.get(['email', 'phone', 'firstName'], function(data) {
    if (data.email) {
      const emailField = document.querySelector('input[type="email"]');
      if (emailField) emailField.value = data.email;
    }

    if (data.phone) {
      const phoneField = document.querySelector('input[type="tel"]');
      if (phoneField) phoneField.value = data.phone;
    }

    if (data.firstName) {
      const firstNameField = document.querySelector('input[name="firstName"]');
      if (firstNameField) firstNameField.value = data.firstName;
    }
  });
}

// Check if the current URL matches the third-party form URL
if (window.location.href.includes("yeticasino.com/en/register")) {
  // Wait until the form is visible before attempting to auto-fill
  window.addEventListener('load', function () {
    autoFillForm();
  });

  // For handling second page form filling
  // You may need to add observers or event listeners for navigation if the form spans multiple pages
}
