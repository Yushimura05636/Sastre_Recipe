function link(CHOICE)
{
    switch(CHOICE)
    {
        case 1:
            link_recipe();
            break;
        case 2:
            link_professional();
            break;
        case 3:
            link_personality();
            break;
        default:
            CHOICE = 0;
    }
}

function link_recipe()
{
    var recipeElement = document.getElementById('front-recipe-page-title');
    if (recipeElement) {
        var offsetTop = recipeElement.getBoundingClientRect().top;
        window.scrollTo({
            top: window.scrollY + offsetTop,
            behavior: 'smooth'
        });
    }
}

function link_professional()
{
    window.scrollTo({
        top: 500,
        behavior: 'smooth' // Optional: smooth scrolling effect
    });
}

function link_personality()
{
    window.scrollTo({
        top: 500,
        behavior: 'smooth' // Optional: smooth scrolling effect
    });
}