// declare all HTML nodes we need
const image = document.getElementById("image");
const caption = document.getElementById("caption");
const advanceButton = document.getElementById("advance");
const endOfPath = document.getElementById("endOfPath");

// declare in-script objects we might need
let sceneNumber = 1;

function advanceScene() {
    switch (sceneNumber) {
        case 1:
            console.log("scene is " + sceneNumber);
            caption.textContent = "I am a different caption text for scene 1";
            image.src = "./images/forest1.avif";
            sceneNumber++;
            break;
        case 2:
            console.log("scene is " + sceneNumber);
            caption.textContent = "I am also a different caption, but this time for scene 2";
            image.src = "./images/forest2.avif";
            sceneNumber++;
            break;
        case 3:
            console.log("scene is " + sceneNumber);
            caption.textContent = "I am the final non-secret caption";
            image.src = "./images/forest3.avif";
            sceneNumber = 'final';
            break;
        case 'final':
            console.log("final scene");
            caption.textContent = "";
            endOfPath.classList.remove('hidden');
            image.classList.add('hidden');
            endOfPath.textContent = "Hello and welcome to a new video here on the Amazen Youtube Channel.";
            advanceButton.disabled = true;
            break;
        default:
            console.log("scene is not in approved scenes");
            caption.textContent = "invalid scenario";
            image.src = "./images/placeholderFish.png"
            break;
    }
    
}

// not putting this in an anonymous function breaks the switch case. JS works in weird ways...
advanceButton.addEventListener("click", function () {
    advanceScene();
});