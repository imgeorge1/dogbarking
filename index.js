

document.querySelector("button").addEventListener("click", function(){

var bark = new Audio("bark.mp3");
bark.play()



var activeButton = document.querySelectorAll("img")[1];

activeButton.classList.add("pressed");
setTimeout(function() {
    activeButton.classList.remove("pressed"); 
}, 150);



vibrateText()

})



function vibrateText(){
    var text = document.querySelector("p")


    text.classList.add("change")
    setTimeout(function() {
        text.classList.remove("change"); 
    }, 150);
    


}