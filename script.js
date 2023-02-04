





function randomHex(){
    let hex="#";
    for(let i=0;i<6;i++){
        hex+= Math.floor((Math.random()*16)).toString(16)
    }
    return hex;

    
}

const cube = document.getElementById("box");
const text = document.getElementById("text");
const changeColorButton = document.getElementById("colorbtn");
changeColorButton.addEventListener("click", function() {
  cube.style.backgroundColor = randomHex();
  text.innerText = randomHex();
});




