// JavaScript for Hamburger Menu
const menuIcon = document.getElementById('menu-icon');
const navLinks = document.getElementById('nav-links');

menuIcon.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});




document.getElementById('messageForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent default form submission

    // Get form values
    const name = document.getElementById('name').value;
    const subject = document.getElementById('subject').value;
    const text = document.getElementById('text').value;

    // Create JSON object
    const messageData = {
        "to": "zfath423@gmail.com",
        "name": name,
        "subject": subject,
        "text": text
    };

    // Send the data to API using fetch
    fetch('https://lumoshive-academy-email-api.vercel.app/send-email', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'x-api-key': 'RJS1-202415'
        },
        body: JSON.stringify(messageData),
    })
    .then(response => response.json())
    .then(data => {
        alert('Pesan Anda telah dikirim!');
        console.log('Success:', data);
    })
    .catch((error) => {
        alert('Error sending message!');
        console.error('Error:', error);
    });
});

// Show or hide the button based on scroll position
window.onscroll = function() { scrollFunction() };

function scrollFunction() {
    const button = document.getElementById("backToTop");
    if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
        button.style.display = "block";
    } else {
        button.style.display = "none";
    }
}

// Scroll to top when the button is clicked
function scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
}