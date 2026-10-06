document.getElementById("registrationForm").addEventListener("submit", function(event) {

    event.preventDefault();

    let name = document.getElementById("name").value;

    let newTab = window.open("", "_blank");

    newTab.document.write(
        "<h1>Your application is received</h1>" +
        "<h2>Welcome, " + name + "</h2>"
    );

});