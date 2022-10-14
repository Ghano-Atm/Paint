

var canvas=document.getElementById("mycanvas");
var ctx=canvas.getContext("2d");
canvas.height=window.innerHeight-200;
canvas.width=window.innerWidth-50;
    


document.getElementById("mycanvas").onmouseenter=function paint(params) {
 

    let mousedown=false


    document.getElementById("mycanvas").onmousedown=function down(params) {
    
        mousedown=true
        var color=document.getElementById("mycolor").value
        ctx.strokeStyle=color;
        var size=document.getElementById("myrange").value
        ctx.lineWidth=size
  

    }


    document.getElementById("mycanvas").onmouseup=function up(params) {
    
        mousedown=false
        ctx.beginPath()

    }


    document.getElementById("mycanvas").onmousemove=function move(e) {
    
        
    if (mousedown==true) {

      
        var debut=e.offsetX
        var fin=e.offsetY;
        ctx.lineTo(debut,fin);
        ctx.stroke()

    }

    }

}

