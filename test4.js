var canvas = document.getElementById('canvas'),
    context = canvas.getContext('2d');



var SHADOW_COLOR = 'rgba(0, 0, 0, 0.7)';

context.shadowColor = SHADOW_COLOR;
context.shadowOffsetX = 4;
context.shadowOffsetY = 4;
context.shadowBlur = 5;

var color = context.fillStyle = 'red';

context.strokeRect(100, 100, 200, 200);
