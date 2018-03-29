var canvas = document.getElementById('canvas'),
    context = canvas.getContext('2d');

// 绘制网格函数
function drawGrid(context, color, stepx, stepy) {
    context.strokeStyle = color;
    context.lineWidth = 0.5;

    for(var i = stepx + 0.5;i < context.canvas.width;i += stepx){
        context.beginPath();
        context.moveTo(i, 0);
        context.lineTo(i, context.canvas.height);
        context.stroke();
    }

    for(var j = stepy + 0.5;j < context.canvas.height;j += stepy) {
        context.beginPath();
        context.moveTo(0, j);
        context.lineTo(context.canvas.width, j);
        context.stroke();
    }
}

// 生成两个圆形路径，添加阴影并描边
function drawTwoArcs() {
    context.beginPath();
    context.arc(300, 190, 150, 0, 2*Math.PI, false);
    context.arc(300, 190, 100, 0, 2*Math.PI, true);

    context.fill();
    context.shadowColor = undefined;
    context.shadowOffsetX = 0;
    context.shadowOffsetY = 0;
    context.stroke();
}

function draw() {
    context.clearRect(0, 0, context.canvas.width, context.canvas.height);
    // 绘制网格
    drawGrid(context, 'lightgray', 20, 20);
    context.save();

    // 设定阴影数值
    context.shadowColor = 'rgba(0, 0, 0, 0.8)';
    context.shadowOffsetX = 12;
    context.shadowOffsetY = 12;
    context.shadowBlur = 15;

    drawTwoArcs();
    context.restore();
}

context.fillStyle = 'rgba(100, 140, 234, 0.5)';
context.strokeStyle = context.fillStyle;
draw();

// 绘制两条线段
context.lineWidth = 1;
context.strokeStyle = 'rgba(0, 0, 0, 1)';
context.beginPath();
context.moveTo(700, 10);
context.lineTo(950, 10);
context.stroke();

context.save();

context.beginPath();
context.moveTo(700.5, 50.5);
context.lineTo(950.5, 50.5);
context.stroke();


