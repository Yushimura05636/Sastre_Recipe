professionalAnimation = function professionalAnimation(animationCount, scrollPosition, positionProfessionalAnimation)
{
    if(scrollPosition > 0)
    {
        if(scrollPosition >= positionProfessionalAnimation)
        {
            
            this.document.getElementById('page-11-1').style.transform = 'translateX(-100%)';
            this.document.getElementById('page-11-2').style.transform = 'translateX(100%)'; 
        }
    }
    else
    {
        if(scrollPosition <= positionProfessionalAnimation)
        {
            
            this.document.getElementById('page-11-1').style.transform = 'translateX(100%)';
            this.document.getElementById('page-11-2').style.transform = 'translateX(-100%)';
        }

        alert(-1);
    }
}

professionalAnimation = function professionalAnimation(event)
{
    alert(1);
}