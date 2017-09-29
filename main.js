function Canvas(w,h) {
    this.canvas = document.createElement("canvas");
    this.canvas.classList = "canvas";
    this.canvas.width=w;
    this.canvas.height=h;
    this.ctx=this.canvas.getContext("2d");
    this.clear=function(){
      this.ctx.clearRect(0,0,this.canvas.width,this.canvas.height);
    };

    document.body.appendChild(this.canvas);
}

var canvas=new Canvas(600,600);
var menu=new Canvas(200,600);

var ctx=canvas.ctx;
var angle=0;

var p =  Player;


engine();