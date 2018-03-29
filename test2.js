//var canvas = document.getElementById("canvas"),
//    context = canvas.getContext('2d');
//
//context.lineJoin = 'round';
//context.lineWidth = '20';
//
//context.font = '24px Helvetica';
//// 绘制文字
//context.fillText('Click anywhere to erase', 175, 200);
//
//// 设置描边样式
//context.strokeStyle = 'goldenrod';
//
//// 设置填充样式
//context.fillStyle = 'rgba(0,0,255,0.5)';
//
//context.strokeRect(75, 100, 200, 200);
//context.fillRect(325, 100, 200, 200);
//
//context.canvas.onmousedown = function(e){
//    context.clearRect(0, 0, canvas.width, canvas.height);
//};


var canvas = document.getElementById('canvas'),
    context = canvas.getContext('2d'),
    gradient = context.createLinearGradient(0, 0, 0, 0);

gradient.addColorStop(0, 'blue');
gradient.addColorStop(0.25, 'white');
gradient.addColorStop(0.5, 'purple');
gradient.addColorStop(0.75, 'red');
gradient.addColorStop(1, 'yellow');

context.fillStyle = gradient;
context.rect(0, 0, canvas.width, canvas.height);
context.fill();




