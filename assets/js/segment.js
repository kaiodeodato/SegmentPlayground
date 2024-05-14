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




