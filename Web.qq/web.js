
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
	var pf_box = document.getElementById('pf_box')//背景选择
	var sq  = document.getElementById('sq')//收起
	
	as[0].onclick = function(ev){
		MT(pf_box,{
			'height': {
				target: 246,
				duration: 500,
				fx: 'linear'
			},
			'opacity':{
				target:100,
				duration:500,
				fx:'linear'
			}
		});
		ev.cancelBubble = true; //阻止事件冒泡 防止在菜单未打开之前触发document的点击事件	
	};
	//收起更换皮肤
	sq.onclick = function(){
		MT(pf_box,{
			'height': {
				target: 0,
				duration: 500,
				fx: 'linear'
			},
			'opacity':{
				target:0,
				duration:500,
				fx:'linear'
			}
		});
	};
	//更换不同风格皮肤
	var zt = document.getElementById('zt');
	var azt = zt.getElementsByTagName('a');
	var bg_yl = document.getElementById('bg_yl');//预览图片背景图
	var bg_con = document.getElementById('bg_con');//
	var tul = bg_con.getElementsByTagName('ul');
	for(var i=0;i<azt.length;i++){
		azt[i].index = i;
		azt[i].onclick = function(){
			for(var i=0;i<azt.length;i++){
				azt[i].className = '';
				tul[i].className = '';
			}
			this.className = 'active'; //添加当前的
			tul[this.index].className = 'onOff';
		};
	}
	for(var i=0;i<tul.length;i++){
		src(tul[i]);
	}
	//更换src
	function src(obj){
		var imgs = obj.getElementsByTagName('img');
		for(var i=0;i<imgs.length;i++){
			
			imgs[i].onclick = function(){
				var str = this.src.match(/\/(\w+\.(?:png|jpg|gif|bmp))$/i)[1]//判断图片格式
				bgimg.src = 'image/bgs/' + str + '';
			};
			imgs[i].onmouseover = function(){
				bg_yl.style.background = 'url('+this.src+')';
			};
		}
	}
//关闭窗口
	closed.onclick = function(){
		skin.style.display = 'none';
	};
	for(var i=0;i<imgo.length;i++){
		imgo[i].onclick = function(){
			bgimg.src = this.src
		};
	}
	dows(skin);//拖拽皮肤框
/*----------------------登陆框-----------------------------*/
	var loading = document.getElementById('loading');
	var login_top = document.getElementById('login_top');
	var off = login_top.getElementsByTagName('span')[0]//关闭按钮
	var za = loading.getElementsByTagName('a')[0];//登陆上注册按钮
	//注册获取元素
	var land = document.getElementById('land');
	var land_top = document.getElementById('land_top');
	var off1 = land_top.getElementsByTagName('span')[0];//关闭按钮
	var Ww,Wh;//可视区域大小
	//登录窗口的注册按钮
	za.onclick = function(){
		dlc(land, 450, true);
		land.style.display = 'block';
		loading.style.display = 'none';
	}
	//登陆窗口显示和关闭
	as[1].onclick = function(){
		dlc(loading, 400, true);
		loading.style.display = 'block';
		land.style.display = 'none';
	};
	off.onclick = function(){
		dlc(loading);
		setTimeout(function(){
			loading.style.display = 'none';
		},100);
	};
	//注册窗口显示和关闭
	as[2].onclick = function(){
		dlc(land, 450, true);
		username.value = ''; //初始化
		password.value = ''; //初始化
		Ypassword.value = ''; //初始化
		man.checked = 'checked'; //初始化
		land.style.display = 'block';
		loading.style.display = 'none';
		status(Ypassword, aSpan[6], '请再次输入密码', true); //初始化
	};
	//关闭按钮
	off1.onclick = function(){
		dlc(land);
		setTimeout(function(){
			land.style.display = 'none';
		},100);
	};
	
	 /*-------------------------注册验证---------------------------------------*/
	var land = document.getElementById('land');
	var username = document.getElementById('username');
	var password = document.getElementById('password');
	var aSpan = land.getElementsByTagName('span');
	var submit = document.getElementById('submit');
	var man = document.getElementById('man');
	var woman = document.getElementById('woman');
	var regPhone = /^1[3|4|5|8][0-9]\d{8}$/; //匹配手机号
	var Ppassword = /^[A-Za-z0-9]{6,12}$/; //匹配密码
	var valU, valP, valPY, valR =man.value,//手机号、密码、冲输密码 、性别
		imgSrc = 'man'; //默认选中男;
		//验证用户名用手机号
		username.onfocus = function() {//象获得焦点时
			setInterval(function() {
				valU = username.value;
			}, 10)
		};
	
		username.onblur = function() {//失去焦点
			if (valU == '') return;
			if (valU.match(regPhone)) {//找到匹配值
				status(username, aSpan[2], '', true);//验证完的状态显示；
	
			} else {
				status(username, aSpan[2], '*请输入正确的手机号', false);
			}
		}
		//密码 必须是字母和数字组合
		password.onfocus = function(){
			setInterval(function(){
				valP = password.value;
			},10)
		}
		password.onblur = function(){
			if(valP =='')return;
			if(valP.match(Ppassword)){
				status(password,aSpan[4], '', true)
			}else{
				status(password,aSpan[4], '*格式错误', false)
			}
		}
		//确认密码验证
		Ypassword.onfocus = function(){
			setInterval(function(){
				valPY = Ypassword.value;
			},10)
		}
		Ypassword.onblur = function(){
			if(valPY =='')return;
			if(valPY!= undefined && valP != undefined && valPY == valP){
				status(Ypassword,aSpan[6], '', true)
			}else{
				status(Ypassword,aSpan[6], '*和密码不一致', false)
			}
		}
		//性别信息更改
		man.onclick = function(){
			valR = man.value ;
			imgSrc = 'man';
		}
		woman.onclick = function(){
			valR = woman.value ;
			imgSrc = 'man';
		}
		
		//点击注册
		var zhuce = document.getElementById('zhuce');
		zhuce.onclick = function(){
			if(valU!= undefined&& valPY!= undefined && valP != undefined ){//所有不为空
				if(valU.match(regPhone) && valP.match(Ppassword)&&valPY == valP ){//所有都符合正则匹配
					var json = JSON.parse(localStorage.getItem(valU))//字符串解析成一个 JSON 对象/获取属性名；
					if(json && json.username == valU){//用户名
						return alert('账号已被注册')
					}
					var json1 ={
						'username': valU,
						'password': valP,
						'sex': valR,
						'name': imgSrc
					}
					localStorage.setItem(valU,JSON.stringify(json1));//存储属性名、属性值
					alert('注册成功')
				}
			}else{
				alert('请注册')
			}
		};
	//判断验证对错的状态显示
	function status(obj1, obj2, str, result) {
		if (result) {
			obj1.style.border = '1px solid #c7c7c7';
			obj2.innerHTML = str;
			obj2.style.color = '#f38200';
		} else {
			obj1.style.border = '2px solid red';
			obj2.innerHTML = str;
			obj2.style.color = 'red';

		}
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
				'opacity': {
					target: 100,
					duration: 1000,
					fx: 'bounceOut'
				},
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
			});
		}else{
			MT(obj,{
				'opacity': {
					target: 0,
					duration: 1000,
					fx: 'bounceOut'
				},
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
			});
		}
	};
	/*----------登陆验证---------------------*/
	var user = document.getElementById('user');
	var pas = document.getElementById('pas');
	var log = document.getElementById('log')
	var remember = document.getElementById('remember'); //记住密码
	var loading = document.getElementById('loading'); //登陆成功时的状态
	var denglu = document.getElementById('denglu')//登陆按钮
	var v_user, v_pas, key;//名字、密码
	var qq = document.getElementById('qq')
	user.onclick = function() {
		setInterval(function() {
			v_user = user.value;
		}, 10)
	}
	pas.onclick = function() {
		setInterval(function() {
			v_pas = pas.value;
		}, 10)
	}
	//登陆按钮
	denglu.onclick = function(){
		if(v_user&&v_pas){
			if(v_user==undefined&&v_pas== undefined){
				alert('请输入账号')
			}
			var json = JSON.parse(localStorage.getItem(v_user));
			if(!json){
				alert('用户不存在')
			}else if(json && v_user == json.username && v_pas !== json.password){
					alert('您输入密码或用户名错误');
				}else if(json && v_user ==json.username && v_pas == json.password){
					alert('登陆成功');
					qq.style.display = 'block';
					dlc(loading,350)
				}
			
		}
	}
	var jiantou = document.getElementById('jiantou');
	var aing = yonghu.getElementsByTagName('li')[0];
	jiantou.onmouseover = function(){
		yonghu.style.display ='block';
	}
	jiantou.onmouseout = function(){
		setTimeout(function(){
			yonghu.style.display ='none';
		},800)
	}
	aing.onmouseover = function(){
		yonghu.style.display ='block';
	}
	aing.onclick = function(){
		confirm('确定要退出?')
		qq.style.display = 'none';
	}
	//登陆窗口拖拽
	login_top.onmousedown = function(ev) {
		drag(ev,loading);
	}
	//注册窗口拖拽
	land_top.onmousedown = function(ev) {
		drag(ev,land);
	}
	function drag(ev, obj) {
		var disX = ev.clientX - obj.offsetLeft;
		var disY = ev.clientY - obj.offsetTop;
		document.onmousemove = function(ev) {
			ev = ev || event;
			var x = ev.clientX - disX;
			var y = ev.clientY - disY;
			var maxL = document.documentElement.clientWidth - obj.offsetWidth;
			var maxT = document.documentElement.clientHeight - obj.offsetHeight;
			//限定x,y值得范围
			if (x < 0) {
				x = 0;
			}
			if (x > maxL) {
				x = maxL;
			}
			if (y < 0) {
				y = 0;
			}
			if (y > maxT) {
				y = maxT;
			}
			obj.style.left = (x) + 'px';
			obj.style.top = (y) + 'px';
		}
		document.onmouseup = function() {
			document.onmousemove = document.onmouseup = null;
		};
		return false;
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
					scale = 0.5;
				}
				Menu_img[i].style.width = scale*70+'px';
				Menu_img[i].style.height = scale*70+'px';
			}
		};
		return false;
	};
	caozuo(Menu,0,true);
	/*---------------------桌面图标--------------------------------*/
	var web_icon = document.getElementById('web_icon');//桌面图标
	var icon = document.getElementById('icon');//桌面图标第一层icon
	var liqq = icon.getElementsByTagName('li');
	var Aul = web_icon.getElementsByTagName('ul');//获取web_icon下所有的ul 每一组
	var Tmenu = document.getElementById('Tmenu');//选项卡焦点
	var Tli = Tmenu.getElementsByTagName('li');//获取焦点下li
	var wwidth = document.documentElement.clientWidth;
	var  num = 0;

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
	/*--------------------------图标定位-----------------------------*/
	var num1 = 160; //设置4个一列
	var num2 = 117; //每个图标的坐标基数
	var onOff = true; //默认是纵向菜单  判断排列方式
	var popOnff = true; //用来控制弹出窗口事件的触发
	var zyw = true; //用于控制图标的自由排列中运动位置
	var menuOnff = true; //用于区分文件夹右键和系统右键
	var arrRemove = []; //用于保存删除的文件夹的那个元素
	var open_right = document.getElementById('open_right');//文件右键显示打开删除
	var bli = open_right.getElementsByTagName('li');
	var open_fist = open_right.children;
	
	//桌面（ul）中图标的排列
	for(var i=0;i<Aul.length;i++){
		show(Aul[i],onOff);//图标位置生成函数调用
		click(Aul[i]); //多次传参，便于获取每个ul下面的li
		caozuo(Aul[i],i);//图标操作
	}
	function show(Parent, onOff){
		var arr = [];//保存桌面图标坐标;
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
					});
					arr.push([num2*Math.floor(i/line),num2*(i%line)]);
				}
			}else{
				//横向排列
				var row = Math.floor(document.documentElement.clientWidth / num1);
				//如果计算后的结果小于1就显示一排，否则按照计算的列数来排列图标
				row = row<1?1:row;
				
				for(var i=0;i<lis.length;i++){
					MT(lis[i],{
						'left': {
							target: num2 * (i % row),
							duration: 300,
							fx: 'easeIn'
						},
						'top': {
							target: num2 * Math.floor(i / row),
							duration: 300,
							fx: 'easeIn'
						}
					});
					arr.push([num2*(i%row),num2*Math.floor(i/row)]);
				}
				
			}
		};
		change(onOff);
		/*-----------------------桌面图标拖拽效果----------------------------------*/
		Adrag();
		function Adrag(){
			for(var i=0;i<lis.length;i++){
				lis[i].index = i;
				lis[i].onmousedown = function(ev){
					ev = ev||event;
					popOnff = true; //按下时可以触发弹出窗口事件
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
						popOnff = false; //如果拖动就阻止打开窗口
						for(var i=0;i<lis.length;i++){
							lis[i].style.border = '';
						}
						var nearli = near(self);
						if(nearli){
							nearli.style.border = '1px solid red';
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
							lis[i].style.border = '';
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
		};
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
		};
	};
	
	
	//窗口发生变化时候，改变图标排列位置
	bin(window,'resize',function(){
		if(onOff){
			for(var i=0;i<Aul.length;i++){
				show(Aul[i],onOff); //图标位置生成函数调用
			}
		}else{
			for (i = 0; i < Aul.length; i++) {
				show(Aul[i]); //图标位置生成函数调用
			}
		}
	});

//	/*-------------桌面图标操作-------------------*/

	function caozuo(obj,Uindex,isLeft){
		var url;
		if (isLeft) {
			url = [
				['https://web.qq.com/module/appmarket/appmarket.html', 'https://www.weiyun.com/index.html', 'https://mail.qq.com/cgi-bin/login', 'https://www.qq.com/', 'https://mail.qq.com/cgi-bin/loginpage', 'httpss://dev.t.qq.com/']
			];
		} else {
			var inp = obj.getElementsByTagName('input'); //获取li下面的input标签

		 url = [
				['https://pan.baidu.com/', 'https://map.qq.com/', 'https://www.kuaipan.cn/', 'https://qqreader.qq.com/', 'https://reader.qq.com/cgi-bin/loginpage', 'https://zhrq1008.github.io/Webqq/jianjie/index.html'],
				['https://douban.fm/partner/qq_plus', 'https://webqq.qidian.com', 'https://www.kuaidi100.com/ad/head_ad.html', 'https://www.dooland.com/', 'https://www.le.com/', 'https://www.mangocity.com/?utm_source=bdppzq&utm_medium=cpc=0020005'],
				['https://qqreader.qq.com/', 'https://v.qq.com/', 'https://www.le.com/'],
				['https://www.pengyou.com/?http%3A%2F%2Fhome.pengyou.com%2Findex.php%3Fmod%3Dhome', 'https://www.3366.com/', 'https://web.3366.com/ddz/'],
				['https://baobei.qq.com/', 'https://www.zhenai.com/901004_924817.html?planid=7620358&groupid=133239289&ctvid=6239592922&kwid=19421816347&domain=&keyword=开心交友网&kwmatch=e&plan=enc_0e0c1d3dbbdbf57a0dfd8bf59335&group=enc_d656f58fdc1d3dbbdb8776&network=1', '']
			]
		}
		var lis = obj.getElementsByTagName('li');
		for(var i=0;i<lis.length;i++){
			lis[i].index = i;
			lis[i].onclick = function(){
				if(popOnff){
					win_open();
					if(isLeft){
						popUp(this,url[Uindex][this.index], isLeft); //弹窗
					} else {
	//						console.log(this, this.index, inp[this.index], url[Uindex][this.index])
							popUp(this,url[Uindex][this.index]); //弹窗
					}
				}
				
			};
		}
	}
	
	
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
	};
	/*--------------------弹出窗口操作---------------------------------*/	
	var win_mask = document.getElementById('win_mask'); //弹出窗口
	var w_h2 = win_mask.getElementsByTagName('h2')[0]; //弹出窗口h2
	var con_cover = document.getElementById('con_cover'); //iframe遮罩层
	var iframe = win_mask.getElementsByTagName('iframe')[0] //获取iframe
	var ctrl_btn = win_mask.getElementsByTagName('a');
	var min_menu_bg = document.getElementById('min_menu_bg') //弹窗最小化后图标
//	var h2 = min_menu_bg.getElementsByTagName('h2')[0];

	//弹出窗口设置默认值
		var json = {
			W: 800,
			H: 500,
			O: 100,
			L: 0,
			T: 0
		};
//弹出窗口出现的位置
	function win_open(){
		win_mask.className = 'show';
		win_mask.style.width = json.W + 'px'; //恢复默认left值
		win_mask.style.height = json.H + 'px'; //恢复默认高度
		win_mask.style.opacity = json.O; //恢复默认透明度
		win_mask.style.filter = 'apha(opacity:' + json.O + ')'; //恢复默认透明度

		clientW = document.documentElement.clientWidth;
		clientH = document.documentElement.clientHeight;
		//弹出窗口出现在桌面的中央位置
		var _left = Math.floor((clientW - win_mask.offsetWidth) / 2);
		var _top = Math.floor((clientH - win_mask.offsetHeight) / 2);
		json.L = _left;
		json.T = _top;

		win_mask.style.left = json.L + 'px';
		win_mask.style.top = json.T + 'px';

	};
	
	function popUp(_this,src, isLeft) {
			//切换弹出窗口标题
			if (isLeft) {
				//w_h2.innerHTML = val;
				//添加桌面图标对应内容
				iframe.src = src;
				//折叠任务栏标题
				//valT = val;
			} else {
				//w_h2.innerHTML = val.value;
				//添加桌面图标对应内容
				iframe.src = src;
				//折叠任务栏标题
				//valT = val.value;
			}
			for (i = 0; i < ctrl_btn.length; i++) {
				//最小化按钮
				ctrl_btn[0].onclick = function() {
					MT(win_mask, {
						'height': {
							target: 0,
							duration: 500,
							fx: 'linear'
						},
						'top': {
							target: 500,
							duration: 500,
							fx: 'linear'
						},
						'opacity': {
							target: 0,
							duration: 500,
							fx: 'linear'
						}
					}, function() {
						win_mask.className = 'hidden'; //隐藏弹出窗口
						ctrl_btn[1].className = 'magnify'; //显示默认最大化按钮样式
						if (ctrl_btn[1].onOff) { //如果中间按钮的状态为true，那么就恢复left值设置为0
							win_mask.style.left = 0 + 'px'; //恢复默认left值

						} else {
							win_mask.style.left = json.L + 'px'; //恢复默认left值

						}
					});

//					setTimeout(function() { //延迟显示折叠任务菜单
//						fold_menu(valT, _this); //折叠任务菜单	
//				
						//}, 300)
				};
				ctrl_btn[1].onclick = function() {
					this.onOff = !this.onOff;
					magnify(this.onOff, this);
				};
				ctrl_btn[2].onclick = function() {
					iframe.src = '';
					//关闭按钮
					MT(win_mask, {
						'height': {
							target: 0,
							duration: 500,
							fx: 'linear'
						},
						'opacity': {
							target: 0,
							duration: 500,
							fx: 'linear'
						}
					}, function() {
						win_mask.className = 'hidden'; //隐藏弹出窗口
						win_mask.style.cssText = 'width:' + json.W + 'px';
						'height:' + json.H + 'px';
						'top:' + json.T + 'px';
						'left:' + json.L + 'px';
						'opacity:' + json.O;
						fliter: 'apha(opacity:' + json.O + ')';
						ctrl_btn[1].className = 'magnify'; //显示默认最大化按钮样式
					});
				};

				
			}
			/*---------最大化封装--------------------*/
			function magnify(onOff, _this) {
				if (onOff) {
					//切换最大化按钮
					_this.className = 'bg';
					MT(win_mask, {
						'width': {
							target: clientW,
							duration: 600,
							fx: 'linear'
						},
						'height': {
							target: clientH,
							duration: 600,
							fx: 'linear'
						},
						'left': {
							target: 0,
							duration: 600,
							fx: 'linear'
						},
						'top': {
							target: 0,
							duration: 600,
							fx: 'linear'
						},
						'opacity': {
							target: 100,
							duration: 600,
							fx: 'linear'
						}
					})
				} else {
					_this.className = 'magnify';
					MT(win_mask, {
						'width': {
							target: json.W,
							duration: 600,
							fx: 'linear'
						},
						'height': {
							target: json.H,
							duration: 600,
							fx: 'linear'
						},
						'left': {
							target: json.L,
							duration: 600,
							fx: 'linear'
						},
						'top': {
							target: json.T,
							duration: 600,
							fx: 'linear'
						},
						'opacity': {
							target: json.O,
							duration: 600,
							fx: 'linear'
						}
					});
				}
			}	
	};

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
			};
			//给Li加移出事件
			obj[i].onmouseout = function(){
				this.children[0].className = '';
				if(this.children[0].children[0]){
				this.children[0].children[0].className = '';
				this.children[1].style.display = 'none';
				}
				
			};
		}
	}
/*----------------------右键切换大小-------------------------------------------*/
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
			show(Aul[i],onOff); //图标位置生成函数调用
		}
		open_right.style.display = 'none'; //隐藏右键菜单
	};
	
	//----------切中等图-------
	rli[1].onclick = function(){
		num1 = 165; //每个图标所占的真实位置  
		num2 = 117; //每个图标的坐标基数
		num3 = 2;
		for (var i = 0; i < lis.length; i++) {
			css(lis[i], '90px', '90px', '0px', '5px');
		}
		for (i = 0; i < Aul.length; i++) {
			show(Aul[i],onOff); //图标位置生成函数调用
		}
		open_right.style.display = 'none'; //隐藏右键菜单
	};
	//----------切大图-------
	rli[2].onclick = function(){
		num1 = 230; //每个图标所占的真实位置  
		num2 = 127; //每个图标的坐标基数
		num3 = 3;
		for (var i = 0; i < lis.length; i++) {
			css(lis[i], '100px', '100px', '0px', '15px');
		}
		for (i = 0; i < Aul.length; i++) {
			show(Aul[i],onOff) ;//图标位置生成函数调用
		}
		open_right.style.display = 'none'; //隐藏右键菜单
	};
	//图标样式切换函数封装
	function css(obj, s1, s2, s3, s4) {

		obj.style.width = s1;
		obj.style.height = s2;
		obj.style.paddingBottom = s3;
		obj.style.paddingTop = s4;

	};
	//排列图标
	var pul = right_dbl.getElementsByTagName('ul')[1];//右键排列按钮
	var pli = pul.getElementsByTagName('li');
	//纵向排列
	pli[1].onclick = function(){
	
		onOff = false;
		zyw = true; //允许图标拖拽运动到原来位置
		for (i = 0; i < Aul.length; i++) {
			show(Aul[i]); //图标位置生成函数调用
		}
	};
	//横向排列
	pli[0].onclick = function(){
		
		onOff = true;
		zyw = true; //允许图标拖拽运动到原来位置
		for (i = 0; i < Aul.length; i++) {
			show(Aul[i],onOff) ;//图标位置生成函数调用
		}
	};
	//自由排列
	pli[2].onclick = function(){
		zyw = false; //允许图标拖拽运动到原来位置
		
	};
	/*--------刷新功能-------------------*/
	var shuaxin_li = right_dbl.children[2];//刷新
	shuaxin_li.onclick = function(){//改变图标的透明度原理
		var arr0 = [];
		for(var i=0;i<lis.length;i++){
			arr0.push(lis[i]);
			MT(lis[i], {
				'opacity': {
					target: 0,
					duration: 400,
					fx: 'linear'
				}
			},function(){
				for(var j=0;j<arr0.length;j++){
					MT(arr0[j],{
						'opacity':{
							target:100,
							duration:400,
							fx:'linear'
						}
					});
				}
			});
		}
	};
	/*--------右键新建功能-------------------*/
	var creat_li = right_dbl.children[4];//新建按钮
	creat_li.onclick = function(){
		createLi(true,num); //右键创建文件夹
	};
	function createLi(iscreat,createIndex){
		if(iscreat){
			var li = document.createElement('li');
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
//		var bg = document.getElementById('bg')
//		
//		var wrap = document.getElementById('wrap');
//		var lists = document.getElementById('lists');
//		var h = document.getElementById('hour');
//		var minu = document.getElementById('min');
//		var sec = document.getElementById('sec');
//		var str = "";
//		for(var i = 0;i<60;i++){
//			str += '<li style= transform:rotate('+i*6+'deg)><span></span></li>';
//		}
//		lists.innerHTML = str;
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
	bg.onmousedown
	
	function dows(obj){
	obj.onmousedown=function(ev){
//		if (obj.aaa == 2)
//		{
//			return;
//		}
		
		var ev=ev||event;
		var iLeft=ev.clientX-obj.offsetLeft;
		var iTop=ev.clientY-obj.offsetTop;
			
//		if(obj.setCapture)
//		{
//			obj.setCapture();
//		}
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
//				if(obj.releaseCapture)
//				{
//					obj.releaseCapture();
//				}
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
	/*-------------------------------------*/
	
	
	
}