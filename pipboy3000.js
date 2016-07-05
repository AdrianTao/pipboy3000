function PipBoy(){
	this.box = null;//容器
	this.header = null;//
	this.main = null;//主要内容显示区域
	this.nav = null;//虚拟按键 由toggle控制
	this.toggle = null;//下方三个实体按键stats items data
	this.data = [];
}
PipBoy.prototype = {
	//初始化
	init:function(){
		this.box = document.getElementById('display');
		ajax({
			type:"get",
			url:"myInfo.json",
			async:true,
			data:null,
			success: function(response){
				this.data = JSON.parse(response,function(key,value){
					if(key === 'STATS') return value;
				});
			}
		})
		console.log(this.data);
		this.header = document.createElement('header');
		this.header.innerHTML = "<h1 class='header-title'>STATS</h1><ul class='header-info'><li>LVL 20</li><li>HP 500/500</li><li>AP 230/300</li><li>XP 1230/2000</li></ul>";
		this.main = document.createElement('main');
		this.nav = document.createElement('nav');

	},
	//主页排版(小列大图)
	//列表排版(列图文)
}
addLoadEvent(function(){
	var pipBoy = new PipBoy();
	pipBoy.init();
});