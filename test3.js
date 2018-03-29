var canvas = document.getElementById('canvas'),
    context = canvas.getContext('2d'),
    repeatRadio = document.getElementById('repeatRadio'),
    noRepeatRadio = document.getElementById('noRepeatRadio'),
    repeatXRadio = document.getElementById('repeatXRadio'),
    repeatYRadio = document.getElementById('repeatYRadio'),
    image = new Image();

function fillCanvasWithPattern(repeatString) {
    var pattern = context.createPattern(image, repeatString);
    context.clearRect(0, 0, canvas.width, canvas.height);
    context.fillStyle = pattern;
    context.fillRect(0, 0, canvas.width, canvas.height);
    context.fill();
}

repeatRadio.onclick = function (ev) {
    fillCanvasWithPattern('repeat');
};

repeatXRadio.onclick = function (ev) {
    fillCanvasWithPattern('repeat-x');
};

repeatYRadio.onclick = function (ev) {
    fillCanvasWithPattern('repeat-y');
};

noRepeatRadio.onclick = function (ev) {
    fillCanvasWithPattern('no-repeat');
};

// 初始化
image.src = 'head.jpg';
image.onload = function (ev) {
    fillCanvasWithPattern('repeat');
};



