function emailForm() {
    let x = document.getElementById("email").value;
    let textLength = parseInt(x.length);
    let text;
    if (textLength > 15) {
        text = "Your email is too large";
    } else {
        text = "Your email is okay"
    }
    document.getElementById("demo").innerHTML = text;
}