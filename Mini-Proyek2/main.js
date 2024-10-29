// JavaScript for Hamburger Menu
const menuIcon = document.getElementById('menu-icon');
const navLinks = document.getElementById('nav-links');

function showAlert() {
    Swal.fire('Terima Kasih', 'Pesan Anda telah terkirim', 'success');
}

function showAlertError() {
    Swal.fire('Maaf', 'Pesan Anda tidak terkirim', 'error');
}



menuIcon.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});



document.getElementById('messageForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Mencegah form submit secara default

    // Mengambil tombol dan mengganti teks menjadi "Loading..."
    const sendButton = document.querySelector('.btn-send');
    sendButton.textContent = 'Loading...';
    sendButton.disabled = true; // Nonaktifkan tombol sementara

    // Ambil nilai form
    const name = document.getElementById('name').value;
    const subject = document.getElementById('subject').value;
    const text = document.getElementById('text').value;

    // Buat objek JSON
    const messageData = {
        "to": "zfath423@gmail.com",
        "name": name,
        "subject": subject,
        "text": text
    };

    // Mengirim data ke API menggunakan fetch
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
        showAlert(); // Tampilkan alert sukses
        console.log('Success:', data);
    })
    .catch((error) => {
        showAlertError(); // Tampilkan alert error
        console.error('Error:', error);
    })
    .finally(() => {
        // Kembalikan teks tombol ke "Send Message" setelah selesai
        sendButton.textContent = 'Send Message';
        sendButton.disabled = false; // Aktifkan kembali tombol
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