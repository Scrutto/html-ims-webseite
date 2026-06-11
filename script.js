document.getElementById('ContactForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const name = document.getElementById('formName').value;
    const email = document.getElementById('formEmail').value;
    const subject = document.getElementById('formSubject').value;
    const message = document.getElementById('formMessage').value;

    const emailTo = "ims-t@gbssg.ch";
    const emailSubject = encodeURIComponent(subject || "Kontaktformular Nachricht");
    
    const emailBody = encodeURIComponent(
      "Name: " + name + "\n" +
      "Kontakt: " + email + "\n\n" +
      "Nachricht:\n" + message
    );

    window.location.href = "mailto:" + emailTo + "?subject=" + emailSubject + "&body=" + emailBody;

    document.getElementById('ContactForm').style.display = 'none';
    document.getElementById('successState').style.display = 'block';
});