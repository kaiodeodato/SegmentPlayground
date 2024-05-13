document.addEventListener("DOMContentLoaded", function() {
    var form = document.querySelector("form");

    form.addEventListener("submit", function(e) {
        trackSendMessage(e);
    });
});

function trackNavLinks(link){
    analytics.track("Navbar Click at: "+ link, {
        Name: 'Link at Navbar',
        Link: link
    })
}

function trackSendMessage(e) {
    e.preventDefault();
    
    console.log("Form Sent!");

    var form = e.target;

    var name = form.querySelector("#name").value;
    var email = form.querySelector("#email").value;
    var subject = form.querySelector("#subject").value;
    var comment = form.querySelector("#comment").value;

    // console.log("Name:", name);
    // console.log("Email:", email);
    // console.log("Subject:", subject);
    // console.log("Comment:", comment);

    analytics.track("Form Sent", {
        name: name,
        email: email,
        subject: subject,
        comment: comment
    })
}




function sendFormData() {
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var subject = document.getElementById("subject").value;
    var message = document.getElementById("comment").value;

    var formData = {
        "name": name,
        "email": email,
        "subject": subject,
        "message": message
    };

    fetch('https://api.segmentapis.com/functions/webhook?n=zqade9ng9bfhtoulh4fzd57plzqf6nka3&s=UJYL_6j4&t=1715638237&w=gqXK9gN76UEez4nMFmXcYh', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
    })
    .then(response => {
        if (response.ok) {
            alert("Formulário enviado com sucesso!");
        } else {
            alert("Erro ao enviar formulário. Por favor, tente novamente.");
        }
    })
    .catch(error => {
        alert("Erro ao enviar formulário. Por favor, tente novamente.");
        console.error('Erro:', error);
    });
}