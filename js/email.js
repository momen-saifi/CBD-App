(function () {
    emailjs.init("b_cVl6wnSOgBdZHA9"); 
  })();

  document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault(); 

    const form = event.target;
    const name = form.querySelector('#name').value.trim();
    const email = form.querySelector('#email').value.trim();
    const subject = form.querySelector('#subject').value.trim();
    const message = form.querySelector('#message').value.trim();

   
    if (!name || !email || !subject || !message) {
        showToast('error', 'Please fill out all required fields.');
        return; 
    }

    // parameters for EmailJS
    const params = {
        from_name: name,           // From Name
        from_email: email,         // From Email
        reply_to: email,           // Reply-To Email
        subject: subject,          // Subject
        message: message           // Message
        
    };

    
    const serviceID = "service_2nr50d2";
    const templateID = "template_evsxgoc";

    emailjs.send(serviceID, templateID, params)
    .then(function(response) {
        console.log('Email sent successfully:', response);
        // Show success modal
        var successModal = new bootstrap.Modal(document.getElementById('successModal'));
        successModal.show();
        form.reset(); // Reset the form fields
        
        // Automatically close the modal after 10 seconds
        setTimeout(function() {
            successModal.hide();
        }, 10000); // 10000 milliseconds = 10 seconds
    }, function(error) {
        console.error('Error sending email:', error);
        // Show error modal with the error message
        var errorMessage = error.text || 'Failed to send request. Please try again.';
        document.getElementById('errorMessage').innerText = errorMessage;
        var errorModal = new bootstrap.Modal(document.getElementById('errorModal'));
        errorModal.show();
        
        // Automatically close the modal after 10 seconds
        setTimeout(function() {
            errorModal.hide();
        }, 10000); // 10000 milliseconds = 10 seconds
    });
});

//     // Send the email using EmailJS
//     emailjs.send(serviceID, templateID, params)
//     .then(function(response) {
//         console.log('Email sent successfully:', response);
//         showToast('success', 'Your message was sent successfully!');
//         form.reset(); // Reset the form fields
//     }, function(error) {
//         console.error('Error sending email:', error);
//         showToast('error', 'Failed to send message. Please try again.');
//     });
// });

// Function to show toast messages
function showToast(type, message) {
    const toastElement = document.getElementById(type + 'Toast');
    const toastBody = toastElement.querySelector('.toast-body');
    toastBody.textContent = message; // Set custom message

    const toast = new bootstrap.Toast(toastElement);
    toast.show();

    setTimeout(() => {
        toast.hide();
    }, 5000);
}


  function submitModalForm() {
    document.getElementById('validationMessage').innerText = '';

    // Get form values
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const company = document.getElementById('company').value.trim();
    const phone = document.getElementById('phone').value.trim();
    const message = document.getElementById('message').value.trim(); 
    

    if (!name || !email || !company || !phone) {
        document.getElementById('validationMessage').innerText = 'Please fill out all required fields.';
        return;
    }

    // parameters for EmailJS
    const params = {
        from_name: name,           // From Name
        from_email: email,         // From Email
        company: company,          // Company Name
        phone: phone,              // Phone Number
        message: message           // Message
    };

   
    const serviceID = "service_2nr50d2";
    const templateID = "template_jk8c2sy";

    emailjs.send(serviceID, templateID, params)
    .then(function(response) {
        console.log('Email sent successfully:', response);

        var successModal = new bootstrap.Modal(document.getElementById('successModal'));
        successModal.show();

        setTimeout(() => {
            successModal.hide();
        }, 10000); // 1000 milliseconds = 1 seconds

        document.getElementById('modalForm').reset();
        var originalModal = bootstrap.Modal.getInstance(document.getElementById('exampleModalCenter'));
        originalModal.hide();
    }, function(error) {
        console.error('Error sending email:', error);
        alert('Failed to send request. Please try again.');
    });
}