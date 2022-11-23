const uiContainer = document.querySelector(".container");
const gridSizeSlider = document.querySelector(".divsizeslider");
const resetButton = document.querySelector(".reset");
const colorPicker = document.querySelector(".colorPicker");
const rainbow = document.querySelector(".rainbow");
const drawMessage = document.querySelector(".drawMessage");
const eraseBtn = document.querySelector(".erase");
let globalColor = "defaultColor";
uiContainer.addEventListener("load", generateBoard(16))
let pointerDown = false;
function generateBoard(size) {

    uiContainer.style.gridTemplateColumns = `repeat(${size},1fr)`;
    uiContainer.style.gridTemplateRows = `repeat(${size},1fr)`;
    let totalNumberOfSquares = size * size;

    for (let i = 0; i < totalNumberOfSquares; i++) {
        let squareDiv = document.createElement("div");
        squareDiv.addEventListener("pointerdown",()=>{

            pointerDown = true
        })
           
        squareDiv.addEventListener("pointermove",()=>{

            if(pointerDown){

                if (globalColor === "color") {
                    let colorPicked = colorPicker.value;
                    squareDiv.style.backgroundColor = colorPicked;
                }
                else if (globalColor === "defaultColor") {
                    squareDiv.style.backgroundColor = "#3d4143";
                }
                else if (globalColor === "Erase") {
                    squareDiv.style.backgroundColor = "";
                }
                else {
    
                    let r = Math.random() * 256;
                    let g = Math.random() * 256;
                    let b = Math.random() * 256;
                    squareDiv.style.backgroundColor = `rgb(${r},${g},${b})`;
    
                }
            }
        })
        
        squareDiv.addEventListener("pointerup",()=>{

            pointerDown = false;
        })
        uiContainer.insertAdjacentElement("beforeend", squareDiv);
    }
}



gridSizeSlider.addEventListener("change", (e) => {

    uiContainer.innerHTML = "";
    generateBoard(e.target.value);
})

resetButton.addEventListener("click", () => {

    uiContainer.innerHTML = "";
    generateBoard(16);
    gridSizeSlider.value = 16;
    globalColor = "defaultColor"
    colorPicker.value = "#3d4143"
    pointerClicked = "false";
    rainbow.className = "button"
    eraseBtn.className = "button"
    colorPicker.className  = "button";
});
colorPicker.addEventListener("click", () => {

    globalColor = "color";
    colorPicker.className  = "active";
    rainbow.className = "button"
    eraseBtn.className = "button"
})
rainbow.addEventListener("click", () => {

    globalColor = "rainbow";
    rainbow.className = "active"
    colorPicker.className  = "button";
    eraseBtn.className = "button"
})
eraseBtn.addEventListener("click", () => {

    globalColor = "Erase";
    eraseBtn.className = "active"
    rainbow.className = "button"
    colorPicker.className  = "button";
})









