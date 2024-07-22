(function () {
    emailjs.init("b_cVl6wnSOgBdZHA9"); // Replace with your actual EmailJS Public Key
  })();

  document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the form from submitting the default way

    const form = event.target;
    const name = form.querySelector('#name').value;
    const email = form.querySelector('#email').value;
    const subject = form.querySelector('#subject').value;
    const message = form.querySelector('#message').value;

    // Prepare the parameters for EmailJS
    const params = {
        from_name: name,           // From Name
        from_email: email,         // From Email
        reply_to: email,           // Reply-To Email
        subject: subject,          // Subject
        message: message,
        to_email: email     
    };

    // Replace with your actual Service ID and Template ID
    const serviceID = "service_2nr50d2";
    const templateID = "template_evsxgoc";

    // Send the email using EmailJS
    emailjs.send(serviceID, templateID, params)
    .then(function(response) {
      console.log('Email sent successfully:', response);
      alert('Your message was sent successfully!');
      form.reset(); // Reset the form fields
    }, function(error) {
      console.error('Error sending email:', error);
      alert('Failed to send message. Please try again.');
    });
  });