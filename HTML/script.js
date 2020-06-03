document.addEventListener('keydown', function (event) {
    if (event.keyCode == 70) {
        document.getElementById("water").style.height = "100vh";
        document.getElementById("styleSVG").style.filter = "opacity(0.6)";
    }
    else if (event.keyCode == 82) {
        document.getElementById("water").style.height = "0";
        document.getElementById("styleSVG").style.filter = "opacity(1)";
    }
});

document.addEventListener('keydown', function (event) {
    if (event.keyCode == 74) {
        document.querySelector("#amerikaanse_vis .cls-6").style.cssText = "fill: white; transition: ease 1s;";
        document.querySelector("#lichaam .cls-5").style.cssText = "fill: white; transition: ease 1s;";
        document.querySelector("#oog circle").style.cssText = "fill: #d33541; transition: ease .5s;";
        document.querySelector("#amerikaanse_vis #oog").style.cssText = "fill: #d33541; transition ease .5s;";
    }
    else if (event.keyCode == 85) {
        document.querySelector("#amerikaanse_vis .cls-6").style.fill = "";
        document.querySelector("#lichaam .cls-5").style.fill = "";
        document.querySelector("#oog circle").style.fill = "";
        document.querySelector("#amerikaanse_vis #oog").style.fill = "";
    }
});

function filterFunction() {
    document.getElementById("body").classList.toggle("filter");
}

function waterFunction() {
    document.getElementById("water").classList.toggle("water");
    document.getElementById("styleSVG").classList.toggle("styleSVG");
}

function sharkFunction() {
    document.querySelector("#amerikaanse_vis .cls-6").classList.toggle("style1");
    document.querySelector("#lichaam .cls-5").classList.toggle("style2");
    document.querySelector("#oog circle").classList.toggle("style3");
    document.querySelector("#amerikaanse_vis #oog").classList.toggle("style4");
}