function changeResolutionState()
{
    // const var of width
    const screenWidth = window.screen.width;

    // const var of height
    const screenHeight = window.screen.height;

    // check if the screen is hdtv
    if (screenWidth == 1366)
    {
        // change the href of the css to hd
        document.getElementById('stylesheet').href = "../CSS/front-page-screen-fhd.css";
    }

    //check if the screen is fhd
    else if (screenWidth == 1920)
    {
        // change the href of the css to fhd
        document.getElementById('stylesheet').href = "../CSS/front-page-screen-fhd.css";
    }
}

// change the screen resolution
// this place weill call the method even if not call in the html
window.oncanplay = changeResolutionState();


//note
//It will not work for now as it is too much to do when changing another css