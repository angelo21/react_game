var shape = document.querySelector("#shape");



var start = new Date().getTime();

function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++ ) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

function makeShapeAppear(){
    var container = document.querySelector("#container");
    var top = Math.random() * container.offsetHeight;
    console.log(top);
    var left = Math.random() * container.offsetWidth;
    console.log(left);
    var width = Math.random() * 200  + 50;
    
    if (Math.random() > 0.5) {
        shape.style.borderRadius = "50%";
    } else {
        shape.style.borderRadius = "0";
    }
    
    shape.style.backgroundColor = getRandomColor();
    shape.style.width = width + "px";
    shape.style.height = width + "px";
    shape.style.top = top + "px";
    shape.style.left = left + "px";
    shape.style.display = "block";
    start = new Date().getTime();
    
}

function appearAfterDelay() {
    setTimeout(makeShapeAppear, Math.random() * 2000);
}


appearAfterDelay();



shape.addEventListener("click", function(){
    
    shape.style.display = "none";
    
    var end = new Date().getTime();
    
    var timeTaken = (end - start) / 1000;
    
    document.querySelector("#timeTaken").innerHTML = timeTaken + "s";
    
   appearAfterDelay();
});