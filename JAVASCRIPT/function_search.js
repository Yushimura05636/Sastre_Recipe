//function heavy
const searchBox = document.getElementById('searchBox');
const suggestions = document.getElementById('suggestions');
var clickedItem = "";
var suggestionText = "";

// Sample suggestion data
const suggestionData = [
    'Recipe', 'Professional', 'Personality', 'Adobo', 'Spaghetti', 'Pizza', 'Cake', 'Omelette', 'Sushi', 'Lumpia'
];

// Event listener for input in search box
searchBox.addEventListener('input', function() {
    const inputText = searchBox.value.toLowerCase();
    const filteredSuggestions = inputText.length === 0 ? [] : suggestionData.filter(item => item.toLowerCase().includes(inputText));
    displaySuggestions(filteredSuggestions);
});

// Function to display suggestions
function displaySuggestions(suggestionsArray) {
    if (suggestionsArray.length > 0) {
        const suggestionsHTML = suggestionsArray.map((item, index) => ` <div class="suggestion-item" onclick="showClickedItem(this, ${index})">${item}</div>`).join('');
        suggestions.innerHTML = suggestionsHTML;
        suggestionText = suggestionsHTML;
        suggestions.style.display = 'block';
    } else {
        suggestions.innerHTML = '';
        suggestions.style.display = 'none';
    }
}

function showClickedItem(item, index) {
    clickedItem = item.textContent;
    searchChoice(clickedItem);
}


function searchChoice(item)
{
    switch(item)
    {
        case "Recipe":
            var recipeElement = document.getElementById('front-recipe-page-title');
            if (recipeElement) {
                var offsetTop = recipeElement.getBoundingClientRect().top;
                window.scrollTo({
                    top: window.scrollY + offsetTop,
                    behavior: 'smooth'
                });
            }
            break;
        case "Professional":
            window.location.href ="#Professional";
            var recipeElement = document.getElementById('front-professional-page-title');
            if (recipeElement) {
                var offsetTop = recipeElement.getBoundingClientRect().top;
                window.scrollTo({
                    top: window.scrollY + offsetTop,
                    behavior: 'smooth'
                });
            }
            break;
        case "Personality":
            window.location.href ="#Personality";
            break;
        case "Adobo":
            window.location.href ="#Adobo";
            break;
        case "Spaghetti":
            window.location.href ="#Spaghetti";
            break;
        case "Piza":
            window.location.href ="#Pizza";
            window.scrollTo({
                top: document.getElementById('page-1').offsetParent,
                behavior: 'smooth' // Optional: smooth scrolling effect
            });
            break;
        case "Cake":
            window.location.href ="#Cake";
            break
        case "Omelette":
            window.location.href ="#Omelette";
            break;
        case "Lumpia":
            window.location.href ="#Lumpia";
            break;
        default:
            index = -1;
    }
}