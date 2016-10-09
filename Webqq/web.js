
window.onload = function(){
	var topNav  = document.getElementById('topNav');
	var as = topNav.getElementsByTagName('a');
	/*-----------------------切换背景图-------------------------------*/
	var skin = document.getElementById('skin');//换皮肤样板
	var closed  = document.getElementById('closed');//关闭按钮
	var skin_content = document.getElementById('skin_content');
	var imgo = skin_content.getElementsByTagName('img');//获取样板中所有图片
	var Wbg = document.getElementById('Wbg');
	var bgimg = Wbg.getElementsByTagName('img')[0];//桌面背景图
	var title = document.getElementById('title');
	as[0].onclick = function(){
		skin.style.display = 'block';
	}
	closed.onclick = function(){
		skin.style.display = 'none';
	}
	for(var i=0;i<imgo.length;i++){
		imgo[i].onclick = function(){
			bgimg.src = this.src
		}
	}
	dows(skin);//拖拽皮肤框
/*----------------------登陆框-----------------------------*/
	var loading = document.getElementById('loading');
	var login_top = document.getElementById('login_top');
	var off = login_top.getElementsByTagName('span')[0]//关闭按钮
	//注册获取元素
	var land = document.getElementById('land');
	var land_top = document.getElementById('land_top');
	var off1 = land_top.getElementsByTagName('span')[0];//关闭按钮
	var Ww,Wh;//可视区域大小

	dows(loading);//拖拽登陆窗口
	dows(land);//拖拽注册窗口
	//登陆窗口显示和关闭
	as[1].onclick = function(){
		dlc(loading, 400, true)
		loading.style.display = 'block';
	}
	off.onclick = function(){
		dlc(loading)
		setTimeout(function(){
			loading.style.display = 'none';
		},100)
	}
	//注册窗口显示和关闭
	as[2].onclick = function(){
		dlc(land, 450, true)
		land.style.display = 'block';
	}
	//关闭按钮
	off1.onclick = function(){
		dlc(land)
		setTimeout(function(){
			land.style.display = 'none';
		},100)
	}
	//注册登陆窗口显示封装
	function dlc(obj, height, result){
		if(result){
			obj.style.display = 'block';
			Ww = document.documentElement.clientWidth;
			Wh = document.documentElement.clientHeight;
			//弹出窗口居中显示
			var Zl = Math.floor((Ww-obj.offsetWidth)/2);
			var Zt = Math.floor((Wh-height)/2)
			obj.style.left  = Zl+'px';
			MT(obj,{
				'top':{
					target:Zt,
					duration: 1000,
					fx: 'bounceOut'
				},
				'height':{
					target:height,
					duration: 30,
					fx: 'linear'
				}
			})
		}else{
			MT(obj,{
				'top':{
					targe:0,
					duration: 500,
					fx: 'linear'
				},
				'height':{
					target:0,
					duration: 1000,
					fx: 'linear'
				}
			})
		}
	}
/*  -------------- 左侧导航模拟--   -------------------------*/
	var Menu = document.getElementById('Menu_a');
	var Menu_img = Menu.getElementsByTagName('img');
	Menu.onmouseover = function(){
		document.onmouseover = function(ev){
			var ev = ev||event;
			for(var i=0;i<Menu_img.length;i++){
				var x = Menu_img[0].offsetLeft+Menu_img[0].offsetWidth/2;
				var y = Menu_img[i].offsetTop+Menu_img[i].offsetHeight/2+Menu_a.offsetTop;
				var a = x - ev.clientX;
				var b = y - ev.clientY;
				var dis = Math.sqrt(a*a+b*b);//平方根；
				var scale = 0.9 - dis/300;//变化幅度
				if(scale < 0.5){
					scale = 0.5
				}
				Menu_img[i].style.width = scale*70+'px';
				Menu_img[i].style.height = scale*70+'px';
			}
		};
		return false;
	}
	/*---------------------桌面图标--------------------------------*/
	var web_icon = document.getElementById('web_icon');//桌面图标
	var icon = document.getElementById('icon');//桌面图标第一层icon
	var liqq = icon.getElementsByTagName('li');
	var Aul = web_icon.getElementsByTagName('ul');//获取web_icon下所有的ul 每一组
	var Tmenu = document.getElementById('Tmenu');//选项卡焦点
	var Tli = Tmenu.getElementsByTagName('li');//获取焦点下li
	var wwidth = document.documentElement.clientWidth
	var  num = 0;
//	console.log(liqq)
//切换桌面图标一组ul；
	for(var i=0;i<Aul.length;i++){
 		Aul[i].style.left = i * wwidth + 'px';
 	}	
	for(var i=0;i<Tli.length;i++){//选项卡式桌面焦点切换
		Tli[i].index = i;
	 	Tli[i].onclick = function(){
			for(var i=0;i<Tli.length;i++){
				Tli[i].className = '';
			}
			this.className = 'active';
			var self = this;
			MT( icon,{
				'left':{
					target: -self.index * wwidth,
					duration: 300,
					fx: 'linear'
				}
			});
			num = this.index;
		};
	}
//	var open_icon = document.getElementById('open_icon')
//	/*----------图标右键-------------------*/
//	for(var i=0;i<liqq.length;i++){
//		liqq[i].oncontextmenu = function(ev){
//			ev = ev||event;
//			var disx = ev.clientX;
//			var disy = ev.clienty;
//			open_right_icon.style.left = disx+'px' ;
//			open_right_icon.style.top = disy+'px';
//			open_icon.style.display = 'block';
//			dblclick.style.display = 'none';
//			return false;
//		}
//	}
	//桌面图标滚轮事件
	var btn = true;
	if(document.addEventListener){
		document.addEventListener('DOMMouseScroll',show,false);
	}
	document.onmousewheel=gunmove;
	function gunmove(ev){
		var ev = ev || window.event;
		if(ev.detail)
		{
			//firefox
			btn=ev.detail>0? true:false;
		}
		else
		{
			//ie和chrome
			btn=ev.wheelDelta<0? true:false;
		}
		if(btn){//下
			num--
			if(num<0){
				num = Tli.length-1;
			}
		}else{
			num++
			if(num>Tli.length){
				num = 0;
			}
		}
		for(var i=0;i<Tli.length;i++){//选项卡式桌面焦点切换
	 		Tli[i].className = '';
	 		if(i<num){
	 			MT( icon,{
 					'left':{
 						target: Tli[i] * wwidth,
						duration: 300,
						fx: 'linear'
 					}
 				})
	 		}else{
	 			MT( icon,{
 					'left':{
 						target: Tli[i] * wwidth,
						duration: 300,
						fx: 'linear'
 					}
 				})
	 		}
 		}
		Tli[num].className = 'active';
		MT( icon,{
			'left':{
				target: Tli[num] * wwidth,
				duration: 300,
				fx: 'linear'
			}
		});
	}
	/*--------------------------图标定位-----------------------------*/
	var num1 = 160; //设置4个一列
	var num2 = 117; //每个图标的坐标基数
	var onOff = true; //默认是纵向菜单  判断排列方式
	//var popOnff = true; //用来控制弹出窗口事件的触发
	var zyw = true; //用于控制图标的自由排列中运动位置
	var menuOnff = true; //用于区分文件夹右键和系统右键
	var arrRemove = []; //用于保存删除的文件夹的那个元素
	var open_right = document.getElementById('open_right');//文件右键显示打开删除
	var bli = open_right.getElementsByTagName('li')
	var open_fist = open_right.children
	//桌面（ul）中图标的排列
	for(var i=0;i<Aul.length;i++){
		show(Aul[i],onOff);//图标位置生成函数调用
		click(Aul[i]); //多次传参，便于获取每个ul下面的li
	}
	function show(Parent, onOff){
		var arr = [];//保存桌面图标坐标
		var lis = Parent.getElementsByTagName('li');
		
		function change(onOff){
			if(onOff){
				var line = Math.floor(document.documentElement.clientHeight/num1);
				//如果计算后的结果小于1就显示一排，否则按照计算的列数来排列图标
				line = line<1?1:line;
				for(var i=0;i<lis.length;i++){
					MT(lis[i],{
						'left':{
							target: num2 * Math.floor(i / line),
							duration: 300,
							fx: 'easeIn'
						},
						'top':{
							target: num2 * (i % line),
							duration: 300,
							fx: 'easeIn'
						}
					})
					arr.push([num2*Math.floor(i/line),num2*(i%line)])
				}
			}else{
				//横向排列
				var row = Math.floor(document.documentElement.clientWidth / num1);
				//如果计算后的结果小于1就显示一排，否则按照计算的列数来排列图标
				row = row<1?1:row;
				
				for(var i=0;i<lis.length;i++){
					MT(lis[i],{
						'left':{
							target: num2 * Math.floor(i / row),
							duration: 300,
							fx: 'easeIn'
						},
						'top':{
							target: num2 * (i % row),
							duration: 300,
							fx: 'easeIn'
						}
					})
					arr.push([num2*(i%row),num2*Math.floor(i/row)])
				}
				
			}
		}
		change(onOff);
		/*-----------------------桌面图标拖拽效果----------------------------------*/
		Adrag();
		function Adrag(){
			for(var i=0;i<lis.length;i++){
				lis[i].index = i;
				lis[i].onmousedown = function(ev){
					ev = ev||event;
					var left,top;
					if(!zyw){ //如果图标已经自由排列，那么就获取当前图标的位置
						left = this.offsetLeft;
						top = this.offsetTop;
					}else{ //如果图标没有自由排列，那么就从数组中找到对应的位置
						left = arr[this.index][0];
						top = arr[this.index][1];
					}
					var disx = ev.clientX - left;
					var disy = ev.clientY - top;
					var self = this;
					document.onmousemove = function(ev){
						//和谁交换谁加边框
						for(var i=0;i<lis.length;i++){
							lis[i].style.border = ''
						}
						var nearli = near(self);
						if(nearli){
							nearli.style.border = '1px solid red'
						}
						x = ev.clientX-disx;
						y = ev.clientY-disy;
						//将值赋给元素
						self.style.left = x +'px';
						self.style.top = y +'px';
						self.style.zIndex = 1;
					};
					document.onmouseup = function(){
						document.onmouseup = document.onmousemove = null;
						var nearli = near(self);
//						alert(nearli)
						var Index //用于交换索引的位置
						for(var i=0;i<lis.length;i++){
							lis[i].style.border = ''
						}
						if(nearli){
							//需要交换的元素坐标位置
							var mleft = arr[nearli.index][0];
							var mtop = arr[nearli.index][1];
							MT(self,{
								'left':{
									target: mleft,
									duration: 400,
									fx: 'linear'
								},
								'top':{
									target: mtop,
									duration: 400,
									fx: 'linear'
								}
							});
							MT(nearli,{
								'left':{
									target: left,
									duration: 400,
									fx: 'linear'
								},
								'top':{
									target: top,
									duration: 400,
									fx: 'linear'
								}
							});
							//位置交换
							Index = self.index;
							self.index = nearli.index;
							nearli.index =Index;
						}else{if(zyw){
									MT(self,{
									'left':{
										target: left,
										duration: 400,
										fx: 'linear'
									},
									'top':{
										target: top,
										duration: 400,
										fx: 'linear'
									}
								});
							}
						
						}
						document.onmouseup = document.onmousemove = null;
						self.style.zIndex = 0;
					};
					return false;
				};
			}
		}
		//最近的
		function near(obj){
			var value = 9999;
			var index = -1;
			for(var i=0;i<lis.length;i++){
				if(pz(obj,lis[i])&&lis[i]!=obj){
					var c = jl(obj,lis[i]);
					if(c<value){
						value = c;
						index = i;
					}
				}
			}
			if(index!=-1){
				return lis[index];//返回他的位置
			}else{
				return false;
			}
		}
		//求直角三角形的斜边；
		function jl(obj1,obj2){
			var a = obj1.offsetLeft - obj2.offsetLeft;
			var b = obj1.offsetTop - obj2.offsetTop;
			return Math.sqrt(a*a + b*b);
		}
		//检测碰撞
		function pz(obj1,obj2){
			var L1 = obj1.offsetLeft;
			var R1 = obj1.offsetLeft + obj1.offsetWidth;
			var T1 = obj1.offsetTop;
			var B1 = obj1.offsetTop + obj1.offsetHeight;
			
			var L2 = obj2.offsetLeft;
			var R2 = obj2.offsetLeft + obj2.offsetWidth;
			var T2 = obj2.offsetTop;
			var B2 = obj2.offsetTop + obj2.offsetHeight;
			
			if( R1<L2 || L1>R2 || B1<T2 || T1>B2 ){
				return false;
			}
			else{
				return true;
			}
		}
	}
	//窗口发生变化时候，改变图标排列位置
	bin(window,'resize',function(){
		if(onOff){
			for(var i=0;i<Aul.length;i++){
				show(Aul[i],onOff) //图标位置生成函数调用
			}
		}else{
			for (i = 0; i < Aul.length; i++) {
				show(Aul[i]); //图标位置生成函数调用
			}
		}
	})
	var right_dbl = document.getElementById('right_dbl');//系统右键
	var pli = right_dbl.getElementsByTagName('li');
/*---------------------文件右键操作----------------------------*/
	function click(obj){
		var lis = obj.getElementsByTagName('li');//获取ul下的所有li
		var aInput = obj.getElementsByTagName('input'); //获取每个ul下面的li
		for(var i=0;i<lis.length;i++){
			lis[i].oncontextmenu= function(ev){
				var self = this;
				ev = ev||event;
				var disx = ev.clientX;
				var disy = ev.clientY;
				
				open_right.style.left = disx + 'px';
				open_right.style.top = disy-100 + 'px';
				open_right.style.display = 'block';//文件右键
				right_dbl.style.display = 'none';//系统右键
				ev.cancelBubble = true;
				//打开应用
				open_fist[0].onclick = function(){
					
				};
				//删除
				open_fist[1].onclick = function(){
					obj.removeChild(self);
					for(var i=0;i<lis.length;i++){
					show(Aul[i],onOff);//图标位置生成函数调用	
					}
				};
				//重命名
				open_fist[2].onclick = function(){
					aInput[self.index].focus();//设置焦点
					aInput[self.index].select();//默认选中
					document.onkeydown = function(ev){
						ev = ev||event;
						if(ev.keyCode == 13){
							aInput[self.index].blur();//失去焦点
						}
					};
					//失去焦点时候保存value值
					aInput[self.index].onblur = function(){
						
					};
				};
				return false; //阻止浏览器右键的默认行为
			}
			
		}
	}
	
	
	
	
	
	
/*--------------------系统右键显示------------------------*/

	var right_dbl = document.getElementById('right_dbl');//系统右键
	var pli = right_dbl.getElementsByTagName('li');
	
	var changeimg = right_dbl.children[5];//右键切换背景图
	changeimg.onclick = function(){
		skin.style.display = 'block';
	};
	//自定义右键
	document.onclick = function(){
		right_dbl.style.display = 'none';//系统右键
		open_right.style.display = 'none';//文件右键
	};
	document.oncontextmenu = function(ev){
		ev = ev||event;
		var disx = ev.clientX;
		var disy = ev.clientY;

		dblclick.style.left = disx + 'px';
		dblclick.style.top = disy + 'px';
		
		open_right.style.display = 'none';
		right_dbl.style.display = 'block';

		return false;//阻止默认行为
		
	};
	//给右键下拉列表加class样式；
	dbshow(bli);//文件右键下拉列表
	dbshow(pli);//系统右键下拉列表
	function dbshow(obj){
		for(var i=0;i<obj.length;i++){
			//给li加移入事件
			obj[i].onmouseover = function(){
				this.children[0].className = 'active';
				if(this.children[0].children[0]){
					this.children[0].children[0].className = 'show';
					this.children[1].style.display = 'block';
				}
			}
			//给Li加移出事件
			obj[i].onmouseout = function(){
				this.children[0].className = '';
				if(this.children[0].children[0]){
				this.children[0].children[0].className = '';
				this.children[1].style.display = 'none';
				}
				
			}
		}
	}
/*--右键切换大小------------------------------------------------------------*/
	var lis = web_icon.getElementsByTagName('li');//获取桌面所有li
	var rul = right_dbl.getElementsByTagName('ul')[0];//系统右键子ul查看
	var rli = rul.getElementsByTagName('li');
	var num3 = 0;
	//----------切小图-------
	rli[0].onclick = function(){
		num1 = 133; //每个图标所占的真实位置  
		num2 = 107; //每个图标的坐标基数
		num3 = 1;
		for (var i = 0; i < lis.length; i++) {
			css(lis[i], '80px', '80px', '5px', '5px');
		}
		for (i = 0; i < Aul.length; i++) {
			show(Aul[i],onOff) //图标位置生成函数调用
		}
		open_right.style.display = 'none'; //隐藏右键菜单
	}
	
	//----------切中等图-------
	rli[1].onclick = function(){
		num1 = 165; //每个图标所占的真实位置  
		num2 = 117; //每个图标的坐标基数
		num3 = 2;
		for (var i = 0; i < lis.length; i++) {
			css(lis[i], '90px', '90px', '0px', '5px');
		}
		for (i = 0; i < Aul.length; i++) {
			show(Aul[i],onOff) //图标位置生成函数调用
		}
		open_right.style.display = 'none'; //隐藏右键菜单
	}
	//----------切大图-------
	rli[2].onclick = function(){
		num1 = 230; //每个图标所占的真实位置  
		num2 = 127; //每个图标的坐标基数
		num3 = 3;
		for (var i = 0; i < lis.length; i++) {
			css(lis[i], '100px', '100px', '0px', '15px');
		}
		for (i = 0; i < Aul.length; i++) {
			show(Aul[i],onOff) //图标位置生成函数调用
		}
		open_right.style.display = 'none'; //隐藏右键菜单
	}
	//图标样式切换函数封装
	function css(obj, s1, s2, s3, s4) {

		obj.style.width = s1;
		obj.style.height = s2;
		obj.style.paddingBottom = s3;
		obj.style.paddingTop = s4;

	}
	//排列图标
	var pul = right_dbl.getElementsByTagName('ul')[1];
	var pli = pul.getElementsByTagName('li');
	//纵向排列
	pli[1].onclick = function(){
		onOff = false;
		zyw = true; //允许图标拖拽运动到原来位置
		for (i = 0; i < Aul.length; i++) {
			show(Aul[i]) //图标位置生成函数调用
		}
	};
	//横向排列
	pli[0].onclick = function(){
		onOff = true;
		zyw = true; //允许图标拖拽运动到原来位置
		for (i = 0; i < Aul.length; i++) {
			show(Aul[i],onOff) //图标位置生成函数调用
		}
	};
	//自由排列
	pli[2].onclick = function(){
		zyw = false; //允许图标拖拽运动到原来位置
		
	};
	/*--------右键新建功能-------------------*/
	var creat_li = right_dbl.children[4];
	
	
	creat_li.onclick = function(){
		createLi(true,num); //右键创建文件夹
	}
	function createLi(iscreat,createIndex){
		if(iscreat){
			var li = document.createElement('li')
			li.innerHTML = '<a href="javascript:;"><img src="image/icon/27.png" alt="作品"/><i><input placeholder="新建文件夹" type="text" value="新建文件夹"/></i></a>';
			Aul[createIndex].appendChild(li);
		}
		if (li) {
			switch (num3) {
			case 1:
				css(li, '70px', '70px', '10px', '5px');
				break;
			case 2:
				css(li, '90px', '90px', '0px', '5px');
				break;
			case 3:
				css(li, '110px', '110px', '0px', '15px');
				break;
			default:
				css(li, '90px', '90px', '0px', '5px');
			}
		}
		for (var i = 0; i < Aul.length; i++){
			
			click(Aul[i]);//点击调用
			show(Aul[i],onOff); //图标位置生成函数调用
		}
		
	}
	/*---------------------时钟---------------------------*/
		var bg = document.getElementById('bg')
		
		var wrap = document.getElementById('wrap');
		var lists = document.getElementById('lists');
		var h = document.getElementById('hour');
		var minu = document.getElementById('min');
		var sec = document.getElementById('sec');
		var str = "";
		for(var i = 0;i<60;i++){
			str += '<li style= transform:rotate('+i*6+'deg)><span></span></li>';
		}
		lists.innerHTML = str;
//		var spans = document.getElementsByTagName('span');
//		console.log(spans.length)
//		for(var i = 0;i<60;i++){
//			if(i%5 == 0){
//				//console.log(lis[i])
//				spans[i].innerHTML = i/5;
//			}
//		}
		time();
		setInterval(function(){
			time();
		},1000)
		function time(){
			//获取本机时间
			var date = new Date();
			//获取秒数
			var second = date.getSeconds();
			//获取分钟
			var min = date.getMinutes()+second/60;
			//获取小时
			var hour =date.getHours()+min/60;
			//秒数的针数
			sec.style.transform = 'rotate('+second*6+'deg)';
			//分钟的针数
			minu.style.transform = 'rotate('+min*6+'deg)';
			//小时的时针
			h.style.transform = 'rotate('+hour*30+'deg)';
		}

	
	dows(bg);
	
	
	function dows(obj){
	obj.onmousedown=function(ev){
		if (obj.aaa == 2)
		{
			return;
		}
		
		var ev=ev||event;
		var iLeft=ev.clientX-obj.offsetLeft;
		var iTop=ev.clientY-obj.offsetTop;
			
		if(obj.setCapture)
		{
			obj.setCapture();
		}
		document.onmousemove=function(ev){
			var ev=ev||event;
			var L=ev.clientX-iLeft;
			var T=ev.clientY-iTop;
			var maxl = document.documentElement.clientWidth-obj.offsetWidth;
			var maxt = document.documentElement.clientHeight-obj.offsetHeight;
			if(T<0)
			{
				T=0;
			}
			if(T>maxt)
			{
				T = maxt;
			}
			if(L<0)
			{
				L=0;
			}
			if(L>maxl)
			{
				L=maxl;
			}
			obj.style.left=L+'px';
			obj.style.top=T+'px';
			}
			document.onmouseup=function(){
				document.onmousemove=null;
				document.onmouseup=null;
				if(obj.releaseCapture)
				{
					obj.releaseCapture();
				}
			}
	
			return false;
		}
	}

	//绑定事件函数封装
	function bin(obj,eventType,fn){
		if(obj.addEventListener){
			obj.addEventListener(eventType,function(){
				fn.call(this);
			},false)
		}else{
			obj.attachEvent('on'+eventType,function(){
				fn.call(this);
			})
		}
	}
	
	
	
}