const form = document.querySelector('#search');
const searchQuery = document.querySelector('#searchId');
const resultsDiv = document.querySelector('#results');

// add event listener to search input field
searchQuery.addEventListener('input', () => {
    // trigger search function with current input value
    handleSearch(searchQuery.value);
});

function handleSearch(query) {
    const url = `https://api.fda.gov/drug/label.json?search=openfda.brand_name:${query}&limit=10`;
    fetch(url)
        .then(response => response.json())
        .then(data => {
            if (!data.results) {
                resultsDiv.innerHTML = '';
                return;
            }
            const results = data.results;
            const resultsHTML = results.map(result => {
                const openfda = result.openfda;
                const name = openfda.brand_name;
                const link = `med.html?query=${encodeURIComponent(name)}`;
                return `<button onclick="goto('${name}');" style="background-color: white; border: 1px outset #FFFAF9;
                        border-radius: 10%;""><img src="assets/pill.png" alt="pill" style="float: left;">${name}</button>`;
            }).join('<br>');
            resultsDiv.innerHTML = resultsHTML;
        })
        .catch(error => console.error(error));
}

