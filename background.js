// background.js

// Listen for form submission events on the Wix form page
chrome.webNavigation.onCompleted.addListener(function(details) {
  if (details.url.includes("10amazingcasinos.com/fb-10")) {
    chrome.scripting.executeScript({
      target: {tabId: details.tabId},
      func: captureFormData
    });
  }
});

function captureFormData() {
  const email = document.querySelector('input[type="email"]').value;
  const phone = document.querySelector('input[type="tel"]').value;
  const firstName = document.querySelector('input[name="firstName"]').value;

  // Store the captured data in Chrome's local storage
  chrome.storage.local.set({email: email, phone: phone, firstName: firstName}, function() {
    console.log('Data stored successfully');
  });

  // Redirect the user to the third-party registration page
  window.location.href = "https://www.yeticasino.com/en/register";
}
