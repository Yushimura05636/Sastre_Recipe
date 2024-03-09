function changeResolutionState()
{
    // const var of width
    const screenWidth = window.screen.width;

    // const var of height
    const screenHeight = window.screen.height;


    var stylesheet_stylesheet, stylesheet_dialog, stylesheet_comment, stylesheet_food;  

    // check if the screen is hdtv
    if (screenWidth == 1280)
    {
        // change the href of the css to fhd but 4:3 resolution
        stylesheet_stylesheet = document.getElementById('stylesheet');
        stylesheet_dialog = document.getElementById('stylesheet-dialog');
        stylesheet_comment = document.getElementById('stylesheet-comment');
        stylesheet_food = document.getElementById('stylesheet-food');
        
        if(stylesheet_stylesheet)
        {
            stylesheet_stylesheet.href = "../CSS/front-page-screen-fhd.css";
        }

        if(stylesheet_dialog)
        {
            stylesheet_dialog.href = "../CSS/front-page-dialog-box.css";
        }

        if(stylesheet_comment)
        {
            stylesheet_comment.href = "../CSS/food_comment_section.css";
        }

        if(stylesheet_food)
        {
            stylesheet_food.href = "../CSS/food_design.css";
        }

    }

    //check if the screen is fhd but 16:9 resolution
    else if (screenWidth == 1920)
    {
        // change the href of the css to fhd
        stylesheet_stylesheet = document.getElementById('stylesheet');
        stylesheet_dialog = document.getElementById('stylesheet-dialog');
        stylesheet_comment = document.getElementById('stylesheet-comment');
        stylesheet_food = document.getElementById('stylesheet-food');
        
        if(stylesheet_stylesheet)
        {
            stylesheet_stylesheet.href = "../CSS/front-page-screen-fhd-16-9.css";
        }

        if(stylesheet_dialog)
        {
            stylesheet_dialog.href = "../CSS/front-page-dialog-box-16-9.css";
        }

        if(stylesheet_comment)
        {
            stylesheet_comment.href = "../CSS/food_comment_section-16-9.css";
        }

        if(stylesheet_food)
        {
            stylesheet_food.href = "../CSS/food_design-16-9.css";
        }
    }
}

// change the screen resolution
// this place weill call the method even if not call in the html
window.oncanplay = changeResolutionState();


//note
//It will not work for now as it is too much to do when changing another css