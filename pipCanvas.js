function PipCanvas(){
	this.canvas = null;
	this.ctx = null;
	this.pip = null;
	this.pip2 = null;
}
PipCanvas.prototype = {
	//初始化
	init:function(id){
		this.canvas = document.getElementById(id);
		this.canvas.width = 614.4;
		this.canvas.height = 480;
		this.canvas.style.left = 350 + (window.innerWidth - 1197) / 2 + "px";
		if(window.innerWidth < 1197){
			this.canvas.style.left = "350px";
		}

		//载入图片
		this.pip = document.createElement("img");
		this.pip.style.position = "absolute";
		this.pip.style.left = "500px";
		this.pip.style.top = "150px";
		this.pip.style.zIndex = 100;
		this.pip.src = "images/hello1.gif";
		this.pip2 = new Image();
		this.pip2.src = "images/hello2.gif";

		this.ctx = this.canvas.getContext('2d');
	},
	//开机动画
	helloWorld:function(callback){
		this.ctx.save();
		var that = this;
		var raf;
		var text = {
			text1 :[
				"010100110100101010101001100101010100011010101010001101010101011",
				"010100110100101010010100110100100101000001101010101110101010010",
				"010100110110100110101001100010101001000110101010101010100101010"
				],
			x: that.canvas.width * 0.12,
			y: that.canvas.height,
			end:that.canvas.height+20,
			line:60,
			font:"20px serif",
			color:"rgba(30,255,140,0.7)",
			draw:function(){
				that.ctx.font = this.font;
				that.ctx.fillStyle = this.color;
				for(var i=0 ; i<this.line ; i++){
					if(this.y+i*20 < this.end){
						that.ctx.fillText(this.text1[Math.floor(Math.random() * 3 + 0)],this.x,this.y+i*20,that.canvas.width*0.88-this.x);
					}else{
						break;
					}
				}
			}
		}
		//数字略过屏幕
		function draw(){
			that.ctx.clearRect(0,-50, that.canvas.width, that.canvas.height);
			that.display();
			text.draw();
			if(text.y > 0){
				text.y += -20;
			}else if(text.y <= 0){
				text.line--;
			}
			if(text.line == 0){
				clearTimeout(draw);
				loadImg();
				that.displayGrid();
			}else{
				setTimeout(draw,30);
			}
		}
		raf = setTimeout(draw,30);
		this.ctx.restore();
		//载入图片
		function loadImg(){
			document.getElementsByClassName("bg")[0].appendChild(that.pip);
			setTimeout(function(){
				that.pip.src = that.pip2.src;
				that.pip.style.left = "520px";
				setTimeout(function(){
					document.getElementsByClassName("bg")[0].removeChild(that.pip);
					callback();
				},1300);
			},2000);
		}
	},
	display:function(){
		this.displayBg();//显示背景
		this.displayLine();//显示线条
		this.displayShadow();//阴影
	},
	displayShadow:function(){
		this.ctx.save();
		var shadow = this.ctx.createRadialGradient(this.canvas.width/2,this.canvas.height/2,0,this.canvas.width/2,this.canvas.height/2,this.canvas.height *0.75);
		shadow.addColorStop(0,"rgba(0,0,0,0.2)");
		shadow.addColorStop(0.3,"rgba(0,0,0,0.2)");
		shadow.addColorStop(0.5,"rgba(0,0,0,0.2)");
		shadow.addColorStop(0.6,"rgba(0,0,0,0.3)");
		shadow.addColorStop(0.7,"rgba(0,0,0,0.5)");
		shadow.addColorStop(0.8,"rgba(0,0,0,0.7)");
		shadow.addColorStop(0.9,"rgba(0,0,0,0.8)");
		shadow.addColorStop(1,"rgba(0,0,0,1)");
		this.ctx.fillStyle = shadow;
		this.ctx.fillRect(0,0,this.canvas.width,this.canvas.height);

		var shadowBottom = this.ctx.createLinearGradient(0,this.canvas.height-100,0,this.canvas.height);
		shadowBottom.addColorStop(0,"rgba(0,0,0,0.1)");
		shadowBottom.addColorStop(0.3,"rgba(0,0,0,0.3)");
		shadowBottom.addColorStop(0.4,"rgba(0,0,0,0.5)");
		shadowBottom.addColorStop(1,"rgba(0,0,0,0.6)");
		this.ctx.fillStyle = shadowBottom;
		this.ctx.fillRect(0,this.canvas.height-100,this.canvas.width,this.canvas.height);

		var shadowTop = this.ctx.createLinearGradient(0,0,0,100);
		shadowTop.addColorStop(1,"rgba(0,0,0,0.1)");
		shadowTop.addColorStop(0.4,"rgba(0,0,0,0.3)");
		shadowTop.addColorStop(0.3,"rgba(0,0,0,0.5)");
		shadowTop.addColorStop(0,"rgba(0,0,0,0.6)");
		this.ctx.fillStyle = shadowTop;
		this.ctx.fillRect(0,0,this.canvas.width,100);

		this.ctx.restore();
	},
	//背景色
	displayBg:function(){
		this.ctx.save();
		this.ctx.fillStyle = "rgb(1,34,17)";
		this.ctx.fillRect(0,0,this.canvas.width,this.canvas.height);
		this.ctx.restore();
	},
	//背景条纹
	displayLine:function(){
		this.ctx.save();
		this.ctx.strokeStyle = "rgba(3,45,14,0.5)";
		this.ctx.lineWidth = 3;
		for(var i=0 ; i<this.canvas.height ; i+=8){
			this.ctx.beginPath();
			this.ctx.moveTo(0,i);
			this.ctx.lineTo(this.canvas.width,i);
			this.ctx.stroke();
		}
		this.ctx.restore();
	},
	//界面框架
	displayGrid:function(){
		var grid = document.getElementById("grid");
		this.ctx.drawImage(grid,0,0,this.canvas.width,this.canvas.height);
	}
}