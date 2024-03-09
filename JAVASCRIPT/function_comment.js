function addComment() {
    var comment = document.getElementById("commentInput").value;
    var paragraph = document.createElement("p");
    paragraph.innerHTML = `<div class='comment-section-post' style='color:blue;'><img src='../RES/icon_chef.png' width='50px' />&nbsp;<span class='user-name'>Pepeshi User:</span>&nbsp;${comment}</div>`;
    var container = document.getElementById("commentContainer");
    container.appendChild(paragraph);

    //empty
    document.getElementById("commentInput").value = '';
}

var predefinedComments = [
    "This is a delicious recipe!",
    "I love this recipe!",
    "Yum! Can't wait to try this out!",
    "Looks amazing! Thanks for sharing.",
    "Delicious and easy to make!",
    "So good! I want to make more!",
    "What in the heaven creation is this?!"
];

var predefinedUsers = [
    "Mable",
    "Karl Sui",
    "Bloodseeker2",
    "Genshin Lover",
    "FoodEater2K"
];


function getRandomIndex() {
    return Math.floor(Math.random() * predefinedComments.length);
}


function preDefinedComment() {
    for(let i = 0; i < predefinedComments.length; i++)
    {
        var randomIndex = getRandomIndex();
        var comment = predefinedComments[randomIndex];
        var user = predefinedUsers[randomIndex];
        var paragraph = document.createElement("p");
        paragraph.innerHTML = `<div class='comment-section-post' style='color: green;'><img src='../RES/icon_chef.png' width='50px' />&nbsp;<span class='user-name' style='color: black;'>${user}:</span>&nbsp;${comment}</div>`;
        var container = document.getElementById("commentContainer");
        container.appendChild(paragraph);
    }
}

preDefinedComment();
