const welcomeId = document.querySelectorAll('#welcome');
console.log(welcomeId);
welcomeId.addEventListener("click",function(){
    console.log("clicked");
    document.getElementById('audio').play();
});