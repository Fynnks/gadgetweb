function newsletterfunction() {
    var userInput = document.getElementById("newsletterInput").value;

    document.getElementById("result").innerHTML = "Danke " + userInput + ", du hast dich erfolgreich angemeldet!";
}

function loginfunction() {
    var userInput = document.getElementById("mailInput").value;
    var userPassword = document.getElementById("passwordInput").value;

    const mailInput = localStorage.getItem("regmail");
    const passwordInput = localStorage.getItem("regpassword");
    
    if (userInput === mailInput && userPassword === passwordInput) {
        location.href = 
            "file:///Users/fynnkleinschmidt/Desktop/Webprogrammierung%20/gadgetweb/index.html";
            localStorage.setItem("loggedIn", true);
    } else {
        document.getElementById("loginError").innerHTML = mailInput + passwordInput;
    }
}

function logoutfunction() {
    localStorage.setItem("loggedIn", false);
}
function registerfunction() {
    var regname = document.getElementById("nameInput").value;
    var regmail = document.getElementById("mailInput").value;
    var regpassword = document.getElementById("passwordInput").value;
    var regpasswordbest = document.getElementById("passwordbest").value;
    document.getElementById("result").innerHTML = "Danke du hast dich erfolgreich registriert!";

    if(
        regname !== "" && 
        regmail !== "" &&
        regpassword !== "" &&
        regpasswordbest !== ""
     ) {
        if (regpassword === regpasswordbest) {
            localStorage.setItem("regname", regname);
            localStorage.setItem("regmail", regmail);
            localStorage.setItem("regpassword", regpassword);
            localStorage.setItem("regpasswordbest", regpasswordbest);
            document.getElementById("registerError").innerHTML = "Deine E-Mail oder dein Passwort sind gespeichert";
        } else {
            document.getElementById("registerError").innerHTML = "Alles ist ausgefüllt" +
            regpassword +
            " " +
            regpasswordbest +
            "aber Passwörter nicht gleich"
        }
    } else {
        document.getElementById("registerError").innerHTML = "Deine E-Mail oder dein Passwort sind falsch"
    }
}

function useLogin() {
    var loggedIn = localStorage.getItem("loggedIn");

    if (loggedIn === "true") {
        location.href = "file:///Users/fynnkleinschmidt/Desktop/Webprogrammierung%20/gadgetweb/index2.html"
    } else {
        location.href = "file:///Users/fynnkleinschmidt/Desktop/Webprogrammierung%20/gadgetweb/indexlogin.html"
    }
}