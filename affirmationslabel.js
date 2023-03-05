    
function randomAff() {
    const fs = require('fs');
    const content = fs.readFileSync('factsAndAff.txt', 'utf-8').split('\n');
    const randomIndex = Math.floor(Math.random() * content.length);

    const label = document.getElementById('nameoflabel'); // Get the label element by ID and set its text content to the random line
    label.textContent = content[randomIndex];
}
    //change the "nameoflabel" to ur label element ID

