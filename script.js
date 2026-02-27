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
            // technically this is scene 1 and the one in the HTML by default is scene 0 but like idk man this was easier to make
            console.log("scene is " + sceneNumber);
            caption.textContent = "As the temperature gets colder and colder, it eventually starts snowing. Uh oh... gotta look around to find some warmth!";
            image.src = "./images/forest2.avif";
            sceneNumber++;
            break;
        case 2:
            console.log("scene is " + sceneNumber);
            caption.textContent = "As the weather worsens, you suddenly find a random rural road! Let's hope some rando comes by and saves you from the freezing cold!";
            image.src = "./images/forest3.avif";
            sceneNumber = 'final';
            break;
        case 'final':
            console.log("final scene");
            caption.textContent = "";
            endOfPath.classList.remove('hidden');
            image.classList.add('hidden');
            endOfPath.textContent = "A car came by the road and picked you up before you froze! Lucky you.";
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

