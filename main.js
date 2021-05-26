var pixelHW = 10;
var numberOfPixels;

const main = function() {
    console.log("We have lift off");

    getPixelCount();

    setUpDrawingPad();
}

function getPixelCount() {
    const width = window.innerWidth;
    const height = window.innerHeight;
    const pixelsPerRow = width / pixelHW;
    const rowsOfPixels = height / pixelHW;
    numberOfPixels = rowsOfPixels * pixelsPerRow;
}

function setUpDrawingPad() {
    const body = document.querySelector("body");

    function changeColor(e) {
        if (e.buttons == 1) {
            this.style.backgroundColor = "red";
            if (e.altKey == true) {
                this.style.backgroundColor = "purple";
            }
            if(e.ctrlKey == true) {
                this.style.backgroundColor = "blue";
            }
            if(e.shiftKey == true){
                this.style.backgroundColor = "yellow";
            }
        }
    }
    for (let i = 0; i < numberOfPixels; i++) {
        const pixel = document.createElement("div");
        pixel.style.width = pixelHW+"px";
        pixel.style.height = pixelHW+"px";
        pixel.style.backgroundColor = "black";
        pixel.style.display = "inline-block";
        body.appendChild(pixel);
        
        pixel.addEventListener("mouseover", changeColor);
        pixel.addEventListener("mousedown", e => e.preventDefault());
    }
}

window.addEventListener("load", main);
