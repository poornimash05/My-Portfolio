document.getElementById('contactButton').addEventListener('click', function(event) {
    event.preventDefault(); // Prevent the default anchor click behavior
    var contactInfo = document.getElementById('contactInfo');
    if (contactInfo.style.display === 'none' || contactInfo.style.display === '') {
        contactInfo.style.display = 'block'; // Show the contact info
    } else {
        contactInfo.style.display = 'none'; // Hide the contact info
    }
});