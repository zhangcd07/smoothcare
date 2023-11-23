document.addEventListener('DOMContentLoaded', function() {
    var form = document.getElementById('contactForm');
    var phoneInput = document.getElementById('phone');

    // Auto-format phone number
    phoneInput.addEventListener('input', function(e) {
        var x = e.target.value.replace(/\D/g, '').match(/(\d{0,3})(\d{0,3})(\d{0,4})/);
        e.target.value = !x[2] ? x[1] : '(' + x[1] + ') ' + x[2] + (x[3] ? '-' + x[3] : '');
    });

    form.addEventListener('submit', function(e) {
        e.preventDefault(); // Prevent the default form submission

        // Basic validation for phone number and email
        var phone = phoneInput.value;
        var email = document.getElementById('email').value;

        if (!phone.match(/^\(\d{3}\) \d{3}-\d{4}$/)) {
            alert('Please enter a valid phone number in the format (xxx) xxx-xxxx.');
            return;
        }

        if (!email.match(/^\S+@\S+\.\S+$/)) {
            alert('Please enter a valid email address.');
            return;
        }

        // Add more validation as needed

        alert('Form submitted successfully! We will be in contact within a business day.');
        // Here you can add code to actually submit the form to your server
    });
});
window.addEventListener('load', function() {
    var dropdowns = document.querySelectorAll(".dropdown");

    dropdowns.forEach(function(dropdown) {
        var dropbtn = dropdown.querySelector(".dropbtn");

        dropbtn.addEventListener("click", function() {
            var content = this.nextElementSibling;
            if (content.style.display === "block") {
                content.style.display = "none";
            } else {
                content.style.display = "block";
            }
        });
    });
});

window.onload = function() {
    // Check if the initial language detection has already been done
    var langDetectionDone = localStorage.getItem('langDetectionDone');
    if (!langDetectionDone) {
        var userLang = navigator.language || navigator.userLanguage; 
        if (userLang.includes("zh")) {
            window.location.href = "index_cn.html";
        } else {
            window.location.href = "index.html";
        }
        localStorage.setItem('langDetectionDone', 'true');
    }
}

function setLanguagePreference(lang) {
    localStorage.setItem('preferredLang', lang);
    localStorage.setItem('langDetectionDone', 'false'); // Reset this so detection runs again if needed
}




/*
document.addEventListener('DOMContentLoaded', function() {
    var dropdowns = document.getElementsByClassName("dropbtn");
    
    for (var i = 0; i < dropdowns.length; i++) {
        dropdowns[i].addEventListener("click", function() {
            var content = this.nextElementSibling;
            if (content.style.display === "block") {
                content.style.display = "none";
            } else {
                content.style.display = "block";
            }
        });
    }
});
*/
