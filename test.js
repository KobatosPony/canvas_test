/**
 * Created by Administrator on 2018/3/14.
 */
var canvas = document.getElementById('canvas'),
    context = canvas.getContext('2d'),
    FONT_HEIGHT = 15,
    MARGIN = 35,
    HAND_TRUNCATION = canvas.width/25,
    HOUR_HAND_TRUNCATION = canvas.width/10,
    NUMBER_SPACING = 20,
    RADIUS = canvas.width/2 - MARGIN,
    HAND_RADIUS = RADIUS + NUMBER_SPACING;

// Function
function draw_circle(){
    context.beginPath();
    context.arc(canvas.width/2, canvas.height/2, RADIUS, 0, Math.PI*2, true)
    context.stroke();
}

function draw_numerals(){
    var numerals = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
        angle = 0,
        numeralWidth = 0;

    numerals.forEach(function(numeral){
        angle = Math.PI/6 * (numeral-3);
        numeralWidth = context.measureText(numeral).width;
        context.fillText(numeral,
            canvas.width/2 + Math.cos(angle)*(HAND_RADIUS)-numeralWidth/2,
            canvas.height/2 + Math.sin(angle)*(HAND_RADIUS)+FONT_HEIGHT/3)
    });
}

function draw_center(){
    context.beginPath();
    context.arc(canvas.width/2, canvas.height/2, 5, 0, Math.PI*2, true);
    context.fill();
}

function draw_hand(loc, isHour){
    var angle = (Math.PI*2) * (loc/60) - Math.PI/ 2,
        handRadius = isHour ? RADIUS - HAND_TRUNCATION - HOUR_HAND_TRUNCATION:RADIUS-HAND_TRUNCATION;
    context.moveTo(canvas.width/2, canvas.height/2);
    context.lineTo(canvas.width/2 + Math.cos(angle) * handRadius, canvas.height/2 + Math.sin(angle)*handRadius);
    context.stroke();
}

function draw_hands(){
    var date = new Date,
        hour = date.getHours();

    hour = hour > 12 ? hour - 12 : hour;

    draw_hand(hour*5 + (date.getMinutes()/60)*5, true, 0.5);
    draw_hand(date.getMinutes(), false, 0.5);
    draw_hand(date.getSeconds(), false, 0.2);
}

function drawClock(){
    context.clearRect(0, 0, canvas.width, canvas.height);
    draw_circle();
    draw_center();
    draw_hands();
    draw_numerals();
}

// 初始化
context.font = FONT_HEIGHT + 'px Arial';
loop = setInterval(drawClock, 1000);





