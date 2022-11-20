const uiContainer = document.querySelector(".container");
const resetBtn = document.querySelector(".reset");
const purpleButton = document.querySelector(".purple")
const redButton = document.querySelector(".red")
let squareDiv;
for(let i = 0;i<256;i++){
   squareDiv =  document.createElement("div");
   squareDiv.className = "divs"
    uiContainer.appendChild(squareDiv);
   

}

const allDivs = document.querySelectorAll(".divs");
for(elemtent of allDivs){
    elemtent.addEventListener("mouseover",e=>changeColor(e));
}


function changeColor(e){

    e.target.style.backgroundColor = "purple";
}
resetBtn.addEventListener("click",()=>{

    for(element of allDivs){
        element.style.backgroundColor = "white";
    }
})
