document.querySelector(".toss").addEventListener("click", function(e) {
        var randomNumber1 = Math.floor(Math.random()*6) + 1;
        var randomImage1 = `images/dice${randomNumber1}.png`
        var randomNumber2 = Math.floor(Math.random()*6) + 1;
        var randomImage2 = `images/dice${randomNumber2}.png`
        document.querySelector(".img1").setAttribute("src", randomImage1);
        document.querySelector(".img2").setAttribute("src", randomImage2);
    
        var myText = document.querySelector("h1");
        if (randomNumber1 > randomNumber2) {
            myText.innerHTML = "✔Player 1 wins"
        } else if (randomNumber2 > randomNumber1) {
            myText.innerHTML = "Player 2 wins✔"
        } else{
            myText.innerHTML = "Draw!"
        }
});
