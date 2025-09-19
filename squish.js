function Squish(){
    var squish = new Audio('squish/squish.mp3');    //gets squish
    var rev_squish = new Audio('squish/rev_squish.mp3') //gets reverse squish

    if (Math.random() <= 0.8){ //4/5 chance that the audio is forwards
        squish.play() //play the original audio

    }else{                  //~1/10 that it's reverse :)
        rev_squish.play()    //play the reversed audio

    }
}