var ColorAdd = document.querySelectorAll(".drum").length;

for (var i = 0; i < ColorAdd; i++) {
    document.querySelectorAll(".drum")[i].addEventListener("click", function () {

        var buttonInnerHtml = this.innerHTML;

        KeyboardSound(buttonInnerHtml);
        ButtonAnimation(buttonInnerHtml);
    });
}

document.addEventListener("keydown", function(event) {
    KeyboardSound(event.key);
    ButtonAnimation(event.key);
});

function KeyboardSound(key) {
    
    switch (key) {
            case "w": 
                var Crash = new Audio("sounds/crash.mp3");
                Crash.play();
                break;
            
            case "a": 
                var KickBass = new Audio("sounds/kick-bass.mp3");
                KickBass.play();
                break;

            case "s":
                var Snare = new Audio("sounds/snare.mp3");
                Snare.play();
                break;

            case "d":
                var tom1 = new Audio("sounds/tom-1.mp3");
                tom1.play();
                break;

            case "j":
                var tom2 = new Audio("sounds/tom-2.mp3");
                tom2.play();
                break;
            
            case "k":
                var tom3 = new Audio("sounds/tom-3.mp3");
                tom3.play();
                break;
            
            case "l":
                var tom4 = new Audio("sounds/tom-4.mp3");
                tom4.play();
                break;

            default:
                console.log(key);
                break;
        }
}

function ButtonAnimation(currentkey) {

    var activeButton = document.querySelector("." + currentkey);

    activeButton.classList.add("pressed");

    setTimeout(function () {
        activeButton.classList.remove("pressed");
    }, 100);
}