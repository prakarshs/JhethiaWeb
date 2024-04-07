const welcomeId = document.querySelectorAll('#welcome');
console.log(welcomeId);
welcomeId.forEach(button => {
    button.addEventListener("click", function(){
        console.log("clicked");
        const audio = document.getElementById('audio');
        if (audio) {
            audio.play();
        }
    });
});