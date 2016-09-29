function MT(ele,options,callback){
	var opt = {};
	var n;
	var time = +new Date();
	var arr = [];
	for(var attr in options){
		//创建一个对象，对应运动的属性。
		opt[attr] = {};
		n = getStyle(ele,attr);
		//记录起始位置。
		opt[attr].begin = isNaN(n)?0:n; 
		//记录总距离。
		opt[attr].count =  options[attr].target - opt[attr].begin;
		//记录每个属性运动总时间
		arr.push(opt[attr].duration = options[attr].duration||400);
		//记录每个属性的运动形式。
		opt[attr].fx = options[attr].fx||'linear';
		//每个属性运动结束的回调。
		opt[attr].callback = options[attr].callback||function(){};
	}
	//求最大时间。
	var maxDuration = Math.max.apply(null,arr);
	clearInterval(timer);
	var timer = setInterval(function(){
		//计算已过去时间。
		var t = +new Date() - time ;
		var value;
		if(t>=maxDuration){
			t = maxDuration;
			clearInterval(timer);
		}
		for(var attr in opt){
			var obj = opt[attr];
			obj.t = t;
			//判断每一个的已过去时间。
			if(obj.duration&&obj.t>=obj.duration){
				obj.t = obj.duration;
				
			}
			//已过去时间小于总时间的可以继续运动，否则调用回调。
			if(obj.t<=obj.duration){
				value = Tween[obj.fx](obj.t,obj.begin,obj.count,obj.duration);
				// console.log(attr);
				ele.style[attr] = value + 'px';
			}
			//调用callback
			if(obj.t == obj.duration){
				obj.duration = false;
				obj.callback();
			}
			
		}
		if(t==maxDuration){
			callback&&callback();
		}
		
	}, 30);	

}

function getStyle(ele,attr){

	return parseFloat(ele.currentStyle?ele.currentStyle[attr]:getComputedStyle(ele)[attr]);
}