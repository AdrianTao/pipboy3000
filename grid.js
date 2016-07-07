function grid(){
	var canvas = document.getElementById('grid');
		var ctx = canvas.getContext('2d');
		ctx.save();
		ctx.beginPath();
		//ctx.strokeStyle = "#339966";
		ctx.strokeStyle = "rgb(30,255,140)";
		ctx.lineWidth = 3;
		//ctx.lineCap = "round";
		ctx.moveTo(50,50);//1
		ctx.lineTo(84,47);
		ctx.moveTo(170,40);//2
		ctx.lineTo(271,36);
		ctx.moveTo(285,35);//3
		ctx.lineTo(396,34);
		ctx.moveTo(410,34);//4
		ctx.lineTo(521,37);
		ctx.moveTo(530,37);//5
		ctx.lineTo(595,38);
		ctx.lineTo(646,42);
		//
		ctx.moveTo(45,463);//1
		ctx.lineTo(80,465);
		ctx.moveTo(150,467);//2
		ctx.lineTo(200,468);
		ctx.moveTo(275,470);//3
		ctx.lineTo(310,471);
		ctx.moveTo(385,472);//4
		ctx.lineTo(425,472);
		ctx.moveTo(510,470);//5
		ctx.lineTo(550,469);
		ctx.moveTo(630,467);//6
		ctx.lineTo(658,466.5);
	ctx.stroke();

	ctx.beginPath();
	var lineColor = ctx.createLinearGradient(0,49,0,105);
	lineColor.addColorStop(0,"rgba(30,255,140,1)");
	lineColor.addColorStop(1,"rgba(30,255,140,0)");
	ctx.strokeStyle = lineColor;
	ctx.moveTo(50,49);//1
	ctx.lineTo(45,105);
	ctx.moveTo(645,41);//5
	ctx.lineTo(655,105);
	var lineColor2 = ctx.createLinearGradient(0,38,0,78);
	lineColor2.addColorStop(0,"rgba(30,255,140,1)");
	lineColor2.addColorStop(1,"rgba(30,255,140,0)");
	ctx.strokeStyle = lineColor2;
	ctx.moveTo(270,36);//2
	ctx.lineTo(270,78);
	ctx.moveTo(395,34);//3
	ctx.lineTo(395,76);
	ctx.moveTo(520,37);//4
	ctx.lineTo(522,79);
	ctx.stroke();

	ctx.beginPath();
	var lineColor3 = ctx.createLinearGradient(0,463,0,410);
	lineColor3.addColorStop(0,"rgba(30,255,140,1)");
	lineColor3.addColorStop(1,"rgba(30,255,140,0)");
	ctx.strokeStyle = lineColor3;
	ctx.moveTo(45,464);//d1
	ctx.lineTo(42,410);
	ctx.moveTo(658,467);//d2
	ctx.lineTo(660,410);
	ctx.stroke();
	ctx.restore();
}
