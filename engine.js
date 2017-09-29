var engine=function(){
    canvas.clear();
    ctx.save();
    ctx.translate(60,60);
    ctx.rotate(angle*Math.PI/180);
    ctx.lineWidth=3;
    canvas.ctx.fillRect(-10,-10,20,20);
    canvas.ctx.fillRect(-32,-10,20,20);
    canvas.ctx.fillRect(12,-10,20,20);
    canvas.ctx.fillRect(-32,12,20,20);
    canvas.ctx.fillRect(12,12,20,20);
    canvas.ctx.fillRect(-10,-32,20,20);

    ctx.restore();
    angle+=90;



    setTimeout(engine,1000/2);
};