function PipBoy(){
	this.box = null;//容器
	this.header = null;//
	this.main = null;//主要内容显示区域
	this.nav = null;//虚拟按键 由toggle控制
	this.toggle = null;//下方三个实体按键stats items data
	this.data = [];
	this.myjson = null;
}
PipBoy.prototype = {
	//初始化
	init:function(){
		this.box = document.getElementById('display');
		this.data = JSON.parse(this.myjson);
		this.header = document.getElementsByTagName('header')[0];
		this.main = document.getElementsByTagName('main')[0];
		this.nav = document.getElementsByTagName('nav')[0];

		this.mouseAction();
	},
	//生成列表排版(列图文)
	list:function(){
		document.getElementById("home").style.display = "none";
	},
	mouseAction:function(){
		var stats = document.getElementsByClassName('stats')[0];
		var items = document.getElementsByClassName('items')[0];
		var data = document.getElementsByClassName('data')[0];

		var that = this;
		stats.onclick = function(){
			document.getElementById("list").style.display = "none";
			document.getElementById("home").style.display = "block";
		}
	}
}
addLoadEvent(function(){
	var pipBoy = new PipBoy();
	pipBoy.myjson = JSON.stringify({
	"STATS":[
		{
			"title":"状态",
			"page":[
				{"title":"状态","img":""},
				{"title":"说明","img":"","text":"该页面于2016年7月制作"}
			]
		},
		{
			"title":"属性",
			"list":[
				{"title":"姓名","url":"","text":"陶俊","img":""},
				{"title":"性别","url":"","text":"男性","img":""},
				{"title":"民族","url":"","text":"汉族","img":""},
				{"title":"出生日期","url":"","text":"1994年1月14日","img":""},
				{"title":"身高/体重","url":"","text":"165/66","img":""},
				{"title":"籍贯","url":"","text":"浙江温州","img":""},
				{"title":"学校/专业","url":"","text":"温州职业技术学院-数控专业-专科","img":""},
				{"title":"求职意向","url":"","text":"web前端开发/实习","img":""},
				{"title":"目前状况","url":"","text":"正在找工作中","img":""}
			]
		},
		{
			"title":"技能",
			"list":[
				{"title":"JavaScript","url":"","text":"熟练使用js","img":""},
				{"title":"HTML","url":"","text":"熟练掌握html,了解html5新特性。","img":""},
				{"title":"CSS","url":"","text":"熟练掌握css,了解css3新特性。","img":""},
				{"title":"数据结构","url":"","text":"了解基本数据结构,曾经使用C语言实现过","img":""},
				{"title":"C语言","url":"","text":"基本了解c","img":""},
				{"title":"Ajax","url":"","text":"懂得使用ajax传递/获取信息","img":""},
				{"title":"json","url":"","text":"了解json格式","img":""}
			]
		},
		{
			"title":"照片",
			"list":[
				{"title":"picture-1","url":"","text":"拍摄于:忘了","img":""},
				{"title":"picture-2","url":"","text":"拍摄于:2015-9","img":""}
			]
		},
		{
			"title":"联系",
			"list":[
				{"title":"手机","url":"","text":"13738367048","img":""},
				{"title":"邮箱","url":"","text":"taojun1994@gmail.com","img":""},
				{"title":"github","url":"https://github.com/AdrianTao","text":"https://github.com/AdrianTao","img":""}
			]
		}
	],
	"ITEMS":[
		{
			"title":"拖动效果",
			"list":[
				{"title":"可拖动并改变大小的窗体","url":"drag/01/index.html","text":"可拖动并改变大小的窗体","img":""},
				{"title":"滑动验证","url":"drag/02/index.html", "text":"滑动验证","img":""}
			]
		},
		{
			"title":"图片轮换",
			"list":[
				{"title":"仿淘宝首页图片轮换","url":"slide/01/index5.html", "text":"仿淘宝首页图片轮换","img":""},
				{"title":"多个图片轮换","url":"slide/02/index.html", "text":"多个图片轮换","img":""},
				{"title":"仿亚马逊首页图片轮换","url":"slide/03/index.html", "text":"仿亚马逊首页图片轮换","img":""}
			]
		},
		{
			"title":"移动端",
			"list":[
				{"title":"移动端效果展示","url":"mobile/index.html","text":"移动端效果展示","img":""}
			]
		},
		{
			"title":"应用游戏",
			"list":[
				{"title":"web计算器","url":"calculator/index.html", "text":"web计算器","img":""},
				{"title":"贪吃蛇","url":"snake/index.html","text":"贪吃蛇小游戏","img":""},
				{"title":"俄罗斯方块","url":"Tetris/index.html","text":"经典的俄罗斯方块游戏","img":""},
				{"title":"2048","url":"2048/index.html","text":"前几年非常火热的2048","img":""}
			]
		},
		{
			"title":"其他",
			"list":[
				{"title":"页码效果","url":"other/page/index2.html","text":"常见于贴吧等论坛","img":""},
				{"title":"简易评分","url":"other/1/index.html", "text":"简易评分","img":""}
			]
		}
	],
	"DATA":[
		
	]
});
	pipBoy.init();
});