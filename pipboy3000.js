function PipBoy(){
	this.box = null;//容器
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