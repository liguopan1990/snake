/**
 * Created with JetBrains WebStorm.
 * User: lkf5583
 * Date: 17-8-19
 * Time: 上午11:23
 * To change this template use File | Settings | File Templates.
 */
var c = document.getElementById('myCanvas');
var cxt = c.getContext('2d');
var WIDTH = 40;    //蛇的宽度
var aUint = new Array;
var food = new food();
function uint(x,y,text){
    this.x = x;
    this.y = y;
    this.text = text;
}

function headuint(x,y,text,direct){
    this.uint = uint;
    this.uint(x,y,text);
    this.direct  = direct;
    this.width = WIDTH;
    this.runUp = function(){
        this.y -= this.width;
    };
    this.runRight = function(){
        this.x += this.width;
    };
    this.runDown = function(){
        this.y += this.width;
    };
    this.runLeft = function(){
        this.x -= this.width;
    }
}
function snake(){
    this.isLive = true;
    this.tailX = null;
    this.tailY = null;
    this.run = function(){
        if(this.isLive)
        {
            if(0 != aUint.length)
            {
                this.tailX = aUint[aUint.length-1].x;
                this.tailY = aUint[aUint.length-1].y;
            }
            for(var i=aUint.length-1;i>0;i--)
            {
                aUint[i].x = aUint[i-1].x;
                aUint[i].y = aUint[i-1].y;
            }
            if(0 != aUint.length)
            {
                switch(aUint[0].direct)
                {
                    case 0:aUint[0].runUp();break;
                    case 1:aUint[0].runRight();break;
                    case 2:aUint[0].runDown();break;
                    case 3:aUint[0].runLeft();break;
                }
            }
        }
    };
    this.turnUp = function(){
        if((0 != aUint.length)&&(2 != aUint[0].direct))
        {
            aUint[0].direct = 0;
        }
    };
    this.turnRight = function(){
        if((0 != aUint.length)&&(3 != aUint[0].direct))
        {
            aUint[0].direct = 1;
        }
    };
    this.turnDown = function(){
        if((0 != aUint.length)&&(0 != aUint[0].direct))
        {
            aUint[0].direct = 2;
        }
    };
    this.turnLeft = function(){
        if((0 != aUint.length)&&(1 != aUint[0].direct))
        {
            aUint[0].direct = 3;
        }
    }
}
function food(){                           //Math.round(Math.random()*1000);
    this.x = 400
    this.y = 200;
    this.width = 20;
}
function drawSnake(aUint)
{
    for(var i=0;i<aUint.length;i++)
    {
        cxt.beginPath();
        cxt.fillText(aUint[i].text,aUint[i].x+20,aUint[i].y+20)
        cxt.moveTo(aUint[i].x,aUint[i].y);
        cxt.lineTo(aUint[i].x,aUint[i].y+40);
        cxt.lineTo(aUint[i].x+40,aUint[i].y+40);
        cxt.lineTo(aUint[i].x+40,aUint[i].y);
        cxt.lineTo(aUint[i].x,aUint[i].y);
        cxt.stroke();
        cxt.closePath();
    }
}
function drawFood(food)
{
    cxt.beginPath();
    cxt.moveTo(food.x,food.y);
    cxt.lineTo(food.x,food.y+food.width);
    cxt.lineTo(food.x+food.width,food.y+food.width);
    cxt.lineTo(food.x+food.width,food.y);
    cxt.lineTo(food.x,food.y);
    cxt.stroke();
    cxt.closePath();
}
function checkSnake(snake,food)
{
    var flag = true;
    if(aUint[0].x<0||aUint[0].x>540||aUint[0].y<0||aUint[0].y>540)
    {
        snake.isLive = false;
        alert("胜败乃兵家常事，请英雄按F5刷新重新来过！")
    }
    if(food.x>aUint[0].x-food.width&&food.x<aUint[0].x+WIDTH&&food.y>aUint[0].y-food.width&&food.y<aUint[0].y+WIDTH)
    {
        aUint.push(new uint(snake.tailX,snake.tailY,aUint.length));
        food.x = Math.round(Math.random()*500);
        food.y = Math.round(Math.random()*500);
    }
}
