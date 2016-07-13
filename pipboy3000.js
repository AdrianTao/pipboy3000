function PipBoy(){
	this.box = null;//容器
	this.header = null;//
	this.main = null;//主要内容显示区域
	this.nav = null;//虚拟按键 由toggle控制
	this.toggle = null;//下方三个实体按键stats items data
	this.data = [];
	this.myjson = null;
	this.stats = null;
	this.music = null;
	this.dataBtn = null;
}
PipBoy.prototype = {
	//初始化
	init:function(){
		this.box = document.getElementById('display');
		this.header = document.getElementsByClassName("header-title")[0];
		this.main = document.getElementsByTagName('main')[0];
		this.nav = document.getElementsByTagName('nav')[0];

		this.toggleAction();
		this.peopleHover();
		this.stats.onclick();
		this.box.style.display = "block";
	},
	//主页人物动画
	peopleHover:function(){
		var people = document.getElementsByClassName("main-people")[0].getElementsByTagName("div");
		var timer = null;
		for(var i=0 ; i<people.length ; i++){
			people[i].onmouseover = function(){
				var opa = 100;
				var speed = 2;
				var that = this;
				timer = setInterval(function(){
					if(opa >= 100 || opa <= 0){
						speed = -speed;
					}
					opa += speed;
					that.style.opacity = opa/100;
				},20);
			}
			people[i].onmouseout = function(){
				clearInterval(timer);
				this.style.opacity = 1;
			}
		}
	},
	//主页两个页面切换
	pageBtn:function(){
		var home = document.getElementById("home");
		var btn = home.getElementsByClassName("main-page")[0].getElementsByTagName("li");
		btn[0].onclick = function(){
			this.className = "on";
			btn[1].className = "";
			home.getElementsByClassName("main-detailed")[0].style.display = "none";
			home.getElementsByClassName("main-people")[0].style.display = "block";
		}
		btn[1].onclick = function(){
			this.className = "on";
			btn[0].className = "";
			home.getElementsByClassName("main-detailed")[0].style.display = "block";
			home.getElementsByClassName("main-people")[0].style.display = "none";
		}
		btn[0].onclick();
	},
	//鼠标滑过列表
	listMouse:function(obj){
		var listBox = document.getElementById("list");
		var article = document.createElement("article");//右侧内容
		article.className = "main-content";
		var figure = document.createElement("figure");//图片
		figure.className = "main-picture";
		var section = document.createElement("section");
		section.className = "main-text";

		var listArray = listBox.getElementsByTagName("li");
		var that = this;
		for(var i=0 ; i<listArray.length ; i++){
			listArray[i].index = i;
			listArray[i].onmouseover = function(){
				for(var j=0 ; j<listArray.length ; j++){
					listArray[j].className = "";
				}
				listArray[this.index].className = "hover";
				if(obj[this.index].url == ""){
					figure.innerHTML = "<a href='JavaScript:;'><img src='" + obj[this.index].img + "'></a>"
				}else{
					figure.innerHTML = "<a href='" + obj[this.index].url + "' target='_blank'><img title='点击图片查看demo' src='" + obj[this.index].img + "'></a>";
				}
				section.innerHTML = "<p>" + obj[this.index].text + "</p>";
			}
			listArray[i].onmouseout = function(){
				listArray[this.index].className = "";
			}
		}
		article.appendChild(figure);
		article.appendChild(section);
		listBox.appendChild(article);

		listArray[0].onmouseover();
		listArray[0].onmouseout();
	},
	//生成列表排版(列图文)
	list:function(obj){
		document.getElementById("home").style.display = "none";
		document.getElementById("list").style.display = "block";
		var listBox = document.getElementById("list");
		listBox.innerHTML = "";
		var aside = document.createElement("aside");
		var ul = "";
		for(var i=0 ; i<obj.length ; i++){
			if(i==0){
				ul += "<ul class='main-file'><li>" + obj[i].title + "</li>";
			}else{
				ul += "<li>" + obj[i].title + "</li>";
			}
			if(i == 9){
				ul += "</ul>";
			}
		}
		aside.innerHTML = ul;
		listBox.appendChild(aside);
		this.listMouse(obj);
	},
	//shake
	shake:function(){
		var pip = document.getElementById("pipboy");
		var box = document.getElementById("display");
		var pipLeft = window.innerWidth>1197? 350 + (window.innerWidth-1197)/2 : 350;
		var pipTop = 65;
		var boxLeft = 350;
		var boxTop = 77.04;
		var num = 50;
		var speed = 2;
		var i=0;
		var that = this;
		function tw(){
			pip.style.left = pipLeft - speed + "px";
			pip.style.top = pipTop + speed + "px";
			box.style.left = boxLeft - speed + "px";
			box.style.top = boxTop + speed + "px";
			i++;
			speed = -speed;
			if(i<num){
				var timer = setTimeout(tw,1);
			}else{
				pip.style.top = pipTop + "px";
				pip.style.left = pipLeft + "px";
				box.style.top = boxTop + "px";
				box.style.left = boxLeft + "px";
			}
		}
		tw();
	},
	//屏幕中 五个导航点击事件
	navAction:function(){
		var btn = this.nav.getElementsByTagName("li");
		var obj = this.data[this.toggle];
		var that = this;
		for(var i=0 ; i<btn.length ; i++){
			btn[i].index = i;
			btn[i].onclick = function(){
				for(var i=0 ; i<btn.length ; i++){
					btn[i].className = "";
				}
				btn[this.index].className = "on";
				if(that.toggle == "STATS" && this.index == 0){
					document.getElementById("list").style.display = "none";
					document.getElementById("home").style.display = "block";
				}else{
					that.list(obj[this.index].list);
				}
				that.shake();
			}
		}
		btn[0].onclick();
	},
	//下方三按键的点击事件
	toggleAction:function(){
		this.stats = document.getElementsByClassName('stats')[0];
		this.items = document.getElementsByClassName('items')[0];
		this.dataBtn = document.getElementsByClassName('data')[0];
		var that = this;
		this.stats.onclick = function(){
			document.getElementById("list").style.display = "none";
			document.getElementById("home").style.display = "block";
			var obj = that.data.STATS;
			that.header.innerHTML = "STATS";
			var ul = "";
			for(var i=0 ; i<obj.length ; i++){
				if(i==0){
					ul += "<ul><li class='on'>" + obj[i].title + "</li>";
				}else{
					ul += "<li>" + obj[i].title + "</li>";
				}
				if(i==obj.length-1){
					ul += "</ul>";
				}
			}
			that.nav.innerHTML = ul;
			that.toggle = "STATS";//标明当前在第1个toggle
			that.navAction();
			that.pageBtn();
		}
		this.items.onclick = function(){
			document.getElementById("list").style.display = "block";
			document.getElementById("home").style.display = "none";
			var obj = that.data.ITEMS;
			that.header.innerHTML = "ITEMS";
			var ul = "";
			for(var i=0 ; i<obj.length ; i++){
				if(i==0){
					ul += "<ul><li class='on'>" + obj[i].title + "</li>";
				}else{
					ul += "<li>" + obj[i].title + "</li>";
				}
				if(i==obj.length-1){
					ul += "</ul>";
				}
			}
			that.nav.innerHTML = ul;
			that.toggle = "ITEMS";//标明当前在第2个toggle
			that.navAction();
		}
		this.dataBtn.onclick = function(){
			var window = document.createElement("div");
			window.className = "prompt";
			window.innerHTML = "啊！这个按钮我还没想到要做什么。。";
			that.box.appendChild(window);
			setTimeout(function(){
				that.box.removeChild(window);
			},3000)
		}
	}
}