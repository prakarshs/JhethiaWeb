const welcomeIds = document.querySelectorAll('#welcome');
console.log(welcomeId);
welcomeIds.forEach(button => {
    button.addEventListener("click", function(){
        console.log("clicked");
        const audio = document.getElementById('audio');
        if (audio) {
            audio.play();
        }
    });
});