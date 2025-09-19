function bone_zone(){
    var audio = new Audio('megan.mp3');
    audio.volume = 0.4;
    audio.play();
    audio.addEventListener('ended', redirect, false);

}

function redirect(){
    
    location.href = "https://jcw87.github.io/c2-sans-fight/";
}
