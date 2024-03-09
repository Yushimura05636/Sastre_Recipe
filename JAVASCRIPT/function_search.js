//function heavy
const searchBox = document.getElementById('searchBox');
const suggestions = document.getElementById('suggestions');
var clickedItem = "";
var suggestionText = "";

// Sample suggestion data
const suggestionData = [
    'Recipe', 'Professional', 'Personality', 'Adobo', 'Spaghetti', 'Pizza', 'Cake', 'Omelette', 'Sushi', 'Bulalo', 'Mac&Cheese', 'Macaroni Salad', 'Lumpia'
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
        const hideElementContent = document.getElementById('front-page-main');
        const hideElementContentReview = document.getElementById('review-content');
        let suggestionsHTML = '';
        for (let index = 0; index < suggestionsArray.length; index++) {
            
            const item = suggestionsArray[index];
            let suggestionItemHTML = '';

            // check when the first result show will have image
            suggestionItemHTML = `<div class="suggestion-item" onclick="showClickedItem(this, ${index})">${item}</div>`;

            suggestionsHTML += suggestionItemHTML;
        }

        for(let i = 0; i < suggestionsArray.length; i++) {
            if(i < 0)
            {
                var Image_Line = '<div>'; //not working
                break;
            }
        }

        if(hideElementContent)
        {
            if(suggestionsArray.length > 5)
            {
                hideElementContent.style.margin = "14% 0px";
            }
            else
            {
                hideElementContent.style.margin = "1% 0px";
            }
        }

        if(hideElementContentReview)
        {
            if(suggestionsArray.length > 5)
            {
                hideElementContentReview.style.margin = "30% 0px";
            }
            else
            {
                hideElementContentReview.style.margin = "1% 0px";
            }
        }

        suggestions.innerHTML = suggestionsHTML;
        suggestionText = suggestionsHTML;
        suggestions.style.display = 'block';
    } else {
        const hideElementContent = document.getElementById('front-page-main');
        const hideElementContentReview = document.getElementById('review-content');

        if(hideElementContent)
        {
            hideElementContent.style.margin = "1% 0px";
        }

        if(hideElementContentReview)
        {
            hideElementContentReview.style.margin = "1% 0px";
        }
        
        suggestions.innerHTML = '';
        suggestions.style.display = 'none';
    }
}

function showResult()
{
    alert(1);
}

function showClickedItem(item, index) {
    clickedItem = item.textContent;
    searchChoice(clickedItem);
}


function searchChoice(item)
{
    console.log(item == "Pizza");
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
            window.location.href ="../HTML/bio.html";
            break;
        case "Adobo":
            window.location.href ="../HTML/adobo.html";
            break;
        case "Spaghetti":
            window.location.href ="../HTML/spaghetti.html";
            break;
        case "Pizza":
            window.location.href ="../HTML/pizza.html";
            break;
        case "Cake":
            window.location.href ="../HTML/cake.html";
            break
        case "Omelette":
            window.location.href ="../HTML/omelette.html";
            break;
        case "Lumpia":
            window.location.href ="../HTML/lumpia.html";
            break;
        case "Bulalo":
            window.location.href ="../HTML/bulalo.html";
            break;
        case "Mac&Cheese":
            window.location.href ="../HTML/mac&cheese.html";
            break;
        case "Macaroni Salad":
            window.location.href ="../HTML/macaroni_salad.html";
            break;
        case "Sushi":
            window.location.href ="../HTML/sushi.html";
            break;
        case "Contact":
            window.location.href ="../HTML/contact.html";
            break;
        default:
            index = -1;
    }
}