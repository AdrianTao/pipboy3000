function PipBoy(){
	this.box = null;//容器
	this.width = null;
	this.height = null;
}
PipBoy.prototype = {
	//初始化
	init:function(){
		this.box = document.getElementById('display');

	}
}
addLoadEvent(function(){
	var pipBoy = new PipBoy();
});