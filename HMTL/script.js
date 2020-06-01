document.addEventListener('keydown', function (event) {
    if (event.keyCode == 70) {
        console.log("test")
        document.getElementById("water").style.height = "100vh";
    }
    else if (event.keyCode == 82) {
        document.getElementById("water").style.height = "0";
    }
});