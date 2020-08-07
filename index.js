const options = ["charCode", "code", "detail", "key", "keyCode", "which"];

window.onkeydown = (e) => {
    document.querySelector('#output').innerText = "";
    for (const option of options) {
        document.querySelector('#output').innerHTML += option + ": " + e[option] + "<br>";
    }
}
