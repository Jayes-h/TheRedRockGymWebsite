// Get the modal
var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementById("joinNowBtn");
var btn2 = document.getElementById("bookaclass");
var btn3 = document.getElementById("normalmembership");
var btn4 = document.getElementById("studentmembership");
var btn5 = document.getElementById("couplemembership");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal
btn.onclick = function() {
    modal.style.display = "block";
}

btn2.onclick = function() {
    modal.style.display = "block";
}

btn3.onclick = function() {
    modal.style.display = "block";
}

btn4.onclick = function() {
    modal.style.display = "block";
}

btn5.onclick = function() {
    modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
    modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}
