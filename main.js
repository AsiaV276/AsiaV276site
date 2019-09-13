// Your code here!
document.getElementById("img-alexa").addEventListener("click", showDetails);

function showDetails() {
    var alexaDetails = "Developed a work breakdown structure using GanttProject to approximate deliverable due dates for an outsourced technical team in India to complete 100 % of the deliverables for phase 1. Managed the cost - effective use of Amazon Lex and AWS Lambda to create bots that recognize natural language and respond to common requests for a conversational user interface. Researched and initiated an integration of Amazon Connect and DynamoDB to connect the caller to the Lex bot and log conversation data. Consulted with the customer and technical team to develop interface, security, and database requirements. ";
    document.getElementById("proj-text").textContent = alexaDetails;
    document.getElementById("proj-text").style.fontSize = "1.5em";
}
function showItemTitle() {
    document.getElementById("proj-text").textContent = "Alexa Voice User Interface Project";
    document.getElementById("proj-text").className = "portfolio-item-titles";
}