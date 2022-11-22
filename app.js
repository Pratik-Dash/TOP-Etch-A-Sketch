const uiContainer = document.querySelector(".container");
const gridSizeSlider = document.querySelector(".divsizeslider");
uiContainer.addEventListener("load",generateBoard(16))
function generateBoard(size){
    
    uiContainer.style.gridTemplateColumns = `repeat(${size},1fr)`;
    uiContainer.style.gridTemplateRows = `repeat(${size},1fr)`;
    let totalNumberOfSquares = size * size;

    for(let i = 0;i<totalNumberOfSquares;i++){
        let squareDiv = document.createElement("div");
        squareDiv.style.border = "1px solid black";
        uiContainer.insertAdjacentElement("beforeend",squareDiv);
    }
}


gridSizeSlider.addEventListener("change",(e)=>{
    
    uiContainer.innerHTML = "";
    generateBoard(e.target.value);
})




