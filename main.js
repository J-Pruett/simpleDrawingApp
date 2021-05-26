const main = function() {
    console.log("We have lift off");

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
    for (let i = 0; i < 9000; i++) {
        const pixel = document.createElement("div");
        pixel.style.width = "10px";
        pixel.style.height = "10px";
        pixel.style.backgroundColor = "black";
        pixel.style.display = "inline-block";
        body.appendChild(pixel);
        
        pixel.addEventListener("mouseover", changeColor);
        pixel.addEventListener("mousedown", e => e.preventDefault());
    }
}

window.addEventListener("load", main);
