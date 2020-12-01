
var slider = document.getElementById("myRange");
var output = document.getElementById("slidervalue"); 
output.innerHTML = "June/July";
// goLink.setAttribute('href', "junejuly.html");  
slider.oninput = function() {
    if (slider.value < 20) {
        output.innerHTML = "March/April"
        document.getElementById("mar").style.opacity = 1; 
        goLink.setAttribute('href', "marchapril.html"); 
    } else if (slider.value >= 20 && slider.value < 40) {
        output.innerHTML = "May"
        goLink.setAttribute('href', "may.html");
    } else if (slider.value >= 40 && slider.value < 60) {
        output.innerHTML = "June/July"
        goLink.setAttribute('href', "junejuly.html");
    } else if (slider.value >= 60 && slider.value < 80) {
        output.innerHTML = "August"
        goLink.setAttribute('href', "aug.html");
    } else if (slider.value >= 80 && slider.value < 100) {
        output.innerHTML = "September"
        goLink.setAttribute('href', "sept.html");
    } else {
        output.innerHTML = "October/November"
        goLink.setAttribute('href', "octnov.html");
    }
    // output.innerHTML = slider.value; 
}
var goLink = document.getElementById("go"); 
output.onclick = function() {
    if (slider.value < 20) {
        goLink.setAttribute('href', "marchapril.html"); 
    } else if (slider.value >= 20 && slider.value < 40) {
        goLink.setAttribute('href', "may.html");
    } else if (slider.value >= 40 && slider.value < 60) {
        goLink.setAttribute('href', "junejuly.html");
    } else if (slider.value >= 60 && slider.value < 80) {
        goLink.setAttribute('href', "aug.html");
    } else if (slider.value >= 80 && slider.value < 100) {
        goLink.setAttribute('href', "sept.html");
    } else {
        goLink.setAttribute('href', "octnov.html");
    }
}

