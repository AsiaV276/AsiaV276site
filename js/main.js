// Your code here!
document.getElementById("img-alexa").addEventListener("click", showDetails);

function showDetails() {
    var alexaDetails = "These are the project details!";
    document.getElementById("proj-text").textContent = alexaDetails;
}

function changeOpacity() {
    document.getElementsByClassName("portfolio-item").style.opacity = "0.75";
}
