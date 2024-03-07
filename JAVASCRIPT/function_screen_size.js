function changeResolutionState()
{
    const screenWidth = window.screen.width;
    const screenHeight = window.screen.height;

    if (screenWidth <= 700 && !(screenWidth > 1366))
    {
        document.getElementById("stylesheet").href = "../CSS/front-page-screen-hd.css";
    }
    else if (screenWidth <= 900 && !(screenWidth > 1920))
    {
        document.getElementById('stylesheet').href = "../CSS/front-page-screen-fhd.css";
    }
}

window.onload = changeResolutionState();