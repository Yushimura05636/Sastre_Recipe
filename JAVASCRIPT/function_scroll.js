var animationCount = -1;

//default scroll
//this will call the 

function frontPageTitleAnimationCall()
{
    var recipeElement = document.getElementById('front-professional-page-title');
    
    if (recipeElement) {
        // get the y value of the front-professional-page-title id
        var offsetTop = recipeElement.getBoundingClientRect().top;
        
        // scroll to front-professional-page-title
        // make the top -> y value of offsetTop const
        window.scrollTo({
            top: window.scrollY + offsetTop,
            behavior: 'smooth'
        });
    }
}

// behavior if to scroll down in the front page
window.addEventListener('scroll', function() {
    var recipeElement = document.getElementById('front-recipe-page-title');
    var professionalElement = document.getElementById('front-professional-page-title');
    var positionRecipeAnimationStatus = 0;
    var positionProfessionalAnimationStatus = 0;
    
    if (recipeElement) {
        var offsetTop = recipeElement.getBoundingClientRect().top;
        positionRecipeAnimationStatus = offsetTop + window.scrollY;
    }
    if (professionalElement)
    {
        var offsetTop = professionalElement.getBoundingClientRect().top;
        positionProfessionalAnimationStatus = offsetTop + window.scrollY;
    }

    // get the current scroll position
    const scrollPosition = window.scrollY || window.pageYOffset;
    
    scrollAnimation(scrollPosition, positionRecipeAnimationStatus, positionProfessionalAnimationStatus);
});

function scrollAnimation(scrollPosition, positionRecipeAnimation, positionProfessionalAnimation)
{

    animationCount = -1;

    if(scrollPosition >= positionRecipeAnimation)
    {
    
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

        //page 7
        this.document.getElementById('page-7').style.transform = 'translateX(-100%)';

        //page 8
        this.document.getElementById('page-8').style.transform = 'translateX(100%)';

        //page 9
        this.document.getElementById('page-9').style.transform = 'translateX(-100%)';
        
        //page 10
        this.document.getElementById('page-10').style.transform = 'translateX(100%)';
    }
    else if(scrollPosition <= positionRecipeAnimation)
    {
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

        //page 7
        this.document.getElementById('page-7').style.transform = 'translateX(100%)';

        //page 8
        this.document.getElementById('page-8').style.transform = 'translateX(-100%)';

        //page 9
        this.document.getElementById('page-9').style.transform = 'translateX(100%)';
        
        //page 10
        this.document.getElementById('page-10').style.transform = 'translateX(-100%)';
    }

    if(animationCount < 0)
    {
        if(scrollPosition >= positionProfessionalAnimation)
        {

            console.log(scrollPosition);


            this.document.getElementById('page-11-1').style.transform = 'translateX(-100%)';
            this.document.getElementById('page-11-2').style.transform = 'translateX(100%)';

            const animation = this.document.getElementById('page-11-3');

            animationDelay(animation);

            animationCount = 1;
        }
        if(scrollPosition == 0)
        {
            if(scrollPosition < positionProfessionalAnimation)
            {
                this.document.getElementById('page-11-1').style.transform = 'translateX(0%)';
                this.document.getElementById('page-11-2').style.transform = 'translateX(-0%)';
                this.document.getElementById('page-11-3').style.display = 'none';

                animationCount = -1;
            }
        }
    }
}

function scrollUp()
{
    if(document.body.scrollHeight)
    {
        window.scrollTo({
            top: document.body.scrollTop,
            behavior: 'smooth' // Optional: smooth scrolling effect
        });
    }
}

//run to delay an animation
async function animationDelay(animation) {
    wait(2000).then(() => 
    {
        //animation 1
        animation.style.display = 'block';
    }).then(() => 
    {
        console.log('After another second');
    });
}

function wait(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

// this will call the frontPageTitleAnimationCall method
window.oncanplay = frontPageTitleAnimationCall();

// this will call the scrollup function and send to the top of the page
window.oncanplay = scrollUp();