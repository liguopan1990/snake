/**
 * Created with JetBrains WebStorm.
 * User: lkf5583
 * Date: 17-8-19
 * Time: 上午11:23
 * To change this template use File | Settings | File Templates.
 */

;(function($){
    var sSnakeLength = 6;
    var x = 100,y=100;
    aUint.push(new headuint(x,y,0,0));
    for(var i=1;i<sSnakeLength;i++)
    {
        aUint.push(new uint(x+40*i,y,i));
    }
    drawSnake(aUint);
    var mySnake = new snake();
    function flashMap()
    {
        cxt.clearRect(0,0,600,600);
        drawSnake(aUint);
        drawFood(food);
        checkSnake(mySnake,food);
    }
    function mySnakeRun()
    {
        mySnake.run();
    }
    document.onkeydown = function(e){
        switch(e.keyCode)
        {
            case 119:case 87:mySnake.turnUp();break;
            case 100:case 68:mySnake.turnRight();break;
            case 115:case 83:mySnake.turnDown();break;
            case 97:case 65:mySnake.turnLeft();break;
            default:break;
        }
        flashMap();
    }
    window.setInterval(mySnakeRun,500);
    window.setInterval(flashMap,50);
}())
