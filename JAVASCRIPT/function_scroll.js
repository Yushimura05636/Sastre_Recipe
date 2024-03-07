var animationCount = -1;

//default scroll

var recipeElement = document.getElementById('front-professional-page-title');
if (recipeElement) {
    var offsetTop = recipeElement.getBoundingClientRect().top;
    window.scrollTo({
        top: window.scrollY + offsetTop,
        behavior: 'smooth'
    });
}

window.addEventListener('scroll', function() {
    // Get the current scroll position
    const scrollPosition = window.scrollY || window.pageYOffset;
    
    // Check if the scroll position is greater than 500px
    if(animationCount < 0)
    {
        if (scrollPosition > 300) {

            animationCount = 1;
    
            //page 1
            this.document.getElementById('page-1').style.transform = 'translateX(-100%)';

            //page 2
            this.document.getElementById('page-2').style.transform = 'translateX(100%)';

            //page 3
            this.document.getElementById('page-3').style.transform = 'translateX(-100%)';

             //page 4
             this.document.getElementById('page-4').style.transform = 'translateX(100%)';

             //page 5
            this.document.getElementById('page-5').style.transform = 'translateX(-100%)';
            
            //page 6
            this.document.getElementById('page-6').style.transform = 'translateX(100%)';
            
        }
    }
    else if(animationCount > 0)
    {
        if (scrollPosition < 300) {

            animationCount = -1;
    
            //page 1
            this.document.getElementById('page-1').style.transform = 'translateX(100%)';

            //page 2
            this.document.getElementById('page-2').style.transform = 'translateX(-100%)';

            //page 3
            this.document.getElementById('page-3').style.transform = 'translateX(100%)';

            //page 4
            this.document.getElementById('page-4').style.transform = 'translateX(-100%)';

             //page 5
             this.document.getElementById('page-5').style.transform = 'translateX(100%)';

             //page 6
            this.document.getElementById('page-6').style.transform = 'translateX(-100%)';
            
        }
    }
});

function scrollUp()
{
    window.scrollTo({
        top: document.body.scrollTop,
        behavior: 'smooth' // Optional: smooth scrolling effect
    });
}