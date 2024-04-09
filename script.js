const welcomeIds = document.querySelectorAll('#welcome');
welcomeIds.forEach(button => {
    button.addEventListener("click", function(){
        console.log("clicked");
        const audio = document.getElementById('audio');
        if (audio) {
            audio.play();
        }
    });
});

function copyTxt() {
    
    var codeElement = document.getElementById("copyText");
    var text = codeElement.textContent || codeElement.innerText;
    console.log(text)
  
    navigator.clipboard.writeText(text)
    .then(() => {
      // Alert the user that the text has been copied (you can also use other feedback mechanisms)
      alert("Text has been copied to clipboard: " + text);
    })
    .catch(err => {
      console.error('Failed to copy: ', err);
      // Handle errors if any
    });
  
  }