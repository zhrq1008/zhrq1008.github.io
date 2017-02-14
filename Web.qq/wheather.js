//天气
	var wheather = document.getElementById('wheather');
	var wt_text = document.getElementById('wt_text')
	var wt_ul = document.querySelector('#wheather ul');
	var wt_li = wt_ul.querySelectorAll('li');
	var w_close = document.querySelector('#wheather #land_top span');
	var w_move = document.querySelector('#wheather #land_top');
	var w_a = document.querySelectorAll('#topNav a')[4];
	w_move.onmousedown = function(ev) {
//		alert(1)
		drag(ev,wheather);
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
			return false;
		}
		document.onmouseup = function() {
			document.onmousemove = null;
			document.onmouseup = null;
		};
		return false;
	}
	w_a.onclick = function(){
		MT(wheather,{
				'opacity': {
					target: 1000,
					duration: 1000,
					fx: 'bounceOut'
				},
				'top':{
					target:100,
					duration: 1000,
					fx: 'bounceOut'
				},
				'height':{
					target:366,
					duration: 30,
					fx: 'linear'
				}
		});
		wheather.style.display = 'block';
	}
	w_close.onclick = function(){
		MT(wheather,{
				'opacity': {
					target: 0,
					duration: 500,
					fx: 'bounceOut'
				},			
				'height':{
					target:0,
					duration: 1000,
					fx: 'linear'
				}
		});
	}
	
	
	
	window.addEventListener('load', function() {
		search_wh('北京');
	})
	
	wt_text.oninput = function(){
		search_wh(' ');
		search_wh(this.value);
	}

	function search_wh(seach_v){
		var script = document.createElement('script');
		script.src = 'http://wthrcdn.etouch.cn/weather_mini?city='+seach_v+'&callback=fn';
		document.body.appendChild(script);
	}
	function fn(data){
			wt_li[0].innerHTML = '城市：'+data.data.city;
			wt_li[1].innerHTML = '风力：'+data.data.forecast[0].fengli;
			wt_li[2].innerHTML = '风向：'+data.data.forecast[0].fengxiang;
			wt_li[3].innerHTML = '最高温度：'+data.data.forecast[0].high;
			wt_li[4].innerHTML = '最低温度：'+data.data.forecast[0].low;
			wt_li[5].innerHTML = '类型：'+data.data.forecast[0].type;

	}
