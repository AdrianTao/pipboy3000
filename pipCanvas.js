function PipCanvas(){
	this.canvas = null;
	this.ctx = null;
	this.bg = "";//背景url
	this.proportion = 0.5625;//背景宽高比
	this.dWdith = null;//  显示器 宽
	this.dHeight = null;//       高
	this.dTop = null;//          y坐标
	this.dLeft = null;//         x坐标
	this.pip = null;
	this.pip2 = null;
}
PipCanvas.prototype = {
	//初始化
	init:function(){
		this.canvas = document.getElementsByTagName('canvas')[0];
		this.canvas.width = 1280;
		this.canvas.height = 720;
		//显示器宽度高度以及坐标
		this.dWdith = 614.4;
		this.dHeight = 480;
		this.dTop = 65;
		this.dLeft = this.canvas.width * 0.31;

		this.pip = document.createElement("img");
		this.pip.style.position = "absolute";
		this.pip.style.left = "500px";
		this.pip.style.top = "150px";
		this.pip.style.zIndex = 100;
		this.pip.src = "images/hello1.gif";
		this.pip2 = new Image();
		this.pip2.src = "images/hello2.gif";

		this.ctx = this.canvas.getContext('2d');
		this.bg = "images/pipboy3000.png";
	},
	//开机动画
	helloWorld:function(callback){
		this.ctx.save();
		var that = this;
		var raf;
		var text = {
			text1 :[
				"01010011010010101010100110010101010001101010101011",
				"01010011010010101001010011010010010100110101010010",
				"01010011011010011010100110001010100101010100101010"
				],
			x: 470,
			y: 500,
			start:500,
			end:520,
			line:20,
			font:"20px serif",
			color:"rgba(30,255,140,0.7)",
			draw:function(){
				that.ctx.font = this.font;
				that.ctx.fillStyle = this.color;
				for(var i=0 ; i<this.line ; i++){
					if(this.y+i*20 < this.end){
						that.ctx.fillText(this.text1[Math.floor(Math.random() * 3 + 0)],this.x,this.y+i*20);
					}else{
						break;
					}
				}
			}
		}
		function draw(){
			that.ctx.clearRect(that.dLeft,that.dTop-50, that.dWdith, that.dHeight);
			that.display();
			text.draw();
			if(text.y > that.dTop){
				text.y += -20;
			}else if(text.y <= that.dTop){
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
		var shadow = this.ctx.createRadialGradient(this.dLeft+this.dWdith/2,this.dTop+this.dHeight/2,0,this.dLeft+this.dWdith/2,this.dTop+this.dHeight/2,this.dHeight*0.75);
		shadow.addColorStop(0,"rgba(0,0,0,0.2)");
		shadow.addColorStop(0.3,"rgba(0,0,0,0.2)");
		shadow.addColorStop(0.5,"rgba(0,0,0,0.2)");
		shadow.addColorStop(0.6,"rgba(0,0,0,0.3)");
		shadow.addColorStop(0.7,"rgba(0,0,0,0.5)");
		shadow.addColorStop(0.8,"rgba(0,0,0,0.7)");
		shadow.addColorStop(0.9,"rgba(0,0,0,0.8)");
		shadow.addColorStop(1,"rgba(0,0,0,1)");
		this.ctx.fillStyle = shadow;
		this.ctx.fillRect(this.dLeft,this.dTop,this.dWdith,this.dHeight);

		var shadowBottom = this.ctx.createLinearGradient(0,this.dTop+this.dHeight-100,0,this.dTop+this.dHeight);
		shadowBottom.addColorStop(0,"rgba(0,0,0,0.1)");
		shadowBottom.addColorStop(0.3,"rgba(0,0,0,0.3)");
		shadowBottom.addColorStop(0.4,"rgba(0,0,0,0.5)");
		shadowBottom.addColorStop(1,"rgba(0,0,0,0.6)");
		this.ctx.fillStyle = shadowBottom;
		this.ctx.fillRect(this.dLeft,this.dTop+this.dHeight-100,this.dLeft+this.dWdith,this.dTop+this.dWdith);

		var shadowTop = this.ctx.createLinearGradient(0,this.dTop,0,this.dTop+100);
		shadowTop.addColorStop(1,"rgba(0,0,0,0.1)");
		shadowTop.addColorStop(0.4,"rgba(0,0,0,0.3)");
		shadowTop.addColorStop(0.3,"rgba(0,0,0,0.5)");
		shadowTop.addColorStop(0,"rgba(0,0,0,0.6)");
		this.ctx.fillStyle = shadowTop;
		this.ctx.fillRect(this.dLeft,this.dTop,this.dLeft+this.dWdith,this.dTop+100);

		this.ctx.restore();
	},
	//背景色
	displayBg:function(){
		this.ctx.save();
		this.ctx.fillStyle = "rgb(1,34,17)";
		this.ctx.fillRect(this.dLeft,this.dTop,this.dWdith,this.dHeight);
		this.ctx.restore();
	},
	//背景条纹
	displayLine:function(){
		this.ctx.save();
		this.ctx.strokeStyle = "rgba(3,45,14,0.5)";
		this.ctx.lineWidth = 3;
		for(var i=0 ; i<this.dHeight ; i+=8){
			this.ctx.beginPath();
			this.ctx.moveTo(this.dLeft,i+this.dTop);
			this.ctx.lineTo(this.dLeft+this.dWdith,i+this.dTop);
			this.ctx.stroke();
		}
		this.ctx.restore();
	},
	//界面框架
	displayGrid:function(){
		var grid = document.getElementById("grid");
		this.ctx.drawImage(grid,this.dLeft,this.dTop,this.dWdith,this.dHeight);
	}
}