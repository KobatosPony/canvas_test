var canvas = document.getElementById('canvas'),
    context = canvas.getContext('2d');

function drawText() {
    context.save();
    context.shadowColor = 'rgba(100, 100, 150, 0.8)';
    context.shadowOffsetX = 5;
    context.shadowOffsetY = 5;
    context.shadowBlur = 10;

    context.fillStyle = 'cornflowerblue';
    context.fillText('HTML5', 20, 250);
    context.strokeStyle = 'yellow';
    context.strokeText('HTML5', 20, 250);
    context.restore();
}

function setClippingRegion(radius) {
    context.beginPath();
    context.arc(canvas.width/2, canvas.height/2, radius, Math.PI*2, false);
    context.clip();
}

function fillCanvas(color) {
    context.fillStyle = color;
    context.fillRect(0, 0, canvas.width, canvas.height);
}

function endAnimation(loop) {
    clearInterval(loop);

    setTimeout(function (e) {
        context.clearRect(0, 0, canvas.width, canvas.height);
        drawText();
    }, 1000);
}

function drawAnimationFrame(radius) {
    setClippingRegion(radius);
    fillCanvas('lightgray');
    drawText();
}

function animate() {
    var radius = canvas.width/2,
        loop;

    loop = window.setInterval(function () {
        radius -= canvas.width/100;

        fillCanvas('charcoal');

        if (radius > 0){
            context.save();
            drawAnimationFrame(radius);
            context.restore();
        }
        else {
            endAnimation(loop);
        }
    }, 16)
}

// event handlers

canvas.onmousedown = function (ev) {
    animate();
};

// 初始化
context.lineWidth = 0.5;
context.font = '128pt Comoc-sans';
drawText();
