
var c = document.getElementById("c");

var ctx = c.getContext("2d");

var w = window.innerWidth;
var h = window.innerHeight;
c.width = w;
c.height = h;
ctx.fillStyle="#FFF";
var snowNumber = 600;
var snowContainer = [];

for(var i=0;i<snowNumber;i++)
    {
        
        var s =
        {
            x:Math.random()*w,
            y:Math.random()*h,
            r:Math.random()*2+1,
            d:Math.random()*2+1
        }
        
        snowContainer.push(s);
    }


function drawSnow()
{
        ctx.clearRect(0,0,w,h)
        ctx.beginPath();
    
    for(i=0;i<snowContainer.length;i++)
        {
            var s = snowContainer[i]
            ctx.moveTo(s.x,s.y);
            ctx.arc(s.x,s.y,s.r,0,2*Math.PI);
        }
    ctx.fill();
    moveSnow();
}
function moveSnow ()
{
    for(var i=0;i<snowContainer.length;i++)
        {
            var s = snowContainer[i];
            s.y +=1;
            s.x +=1;
            
            if(s.y > h | s.x > w)
                {
                    snowContainer[i] =
                        {
                        x:Math.random()*w,
                        y:Math.random()*h,
                        r:Math.random()*2+1,
                        d:Math.random()*2+1
                    }
                }
                
        }
}

setInterval(drawSnow,20);
