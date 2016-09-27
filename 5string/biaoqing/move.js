
function move(obj,attr,speed,target,endFn){

	var iCur;
	if(attr=='opacity'){
		iCur = getStyle( obj, attr ) * 100;
	}else{
		iCur = getStyle( obj, attr );
	}
	
	speed = iCur <= target ? Math.abs(speed) : -Math.abs(speed);
	
	clearInterval(obj[attr]);	
	obj[attr] = setInterval(function(){
		if(attr=='opacity'){
			iCur = getStyle( obj, attr )*100 + speed;
		}else{
			iCur = getStyle( obj, attr ) + speed;
		}
		
				
		if( (speed > 0 && iCur >= target) || (speed < 0 && iCur <= target) ){
			
			iCur = target;
		
		}
		
		if(attr=='opacity'){
			obj.style.opacity = iCur / 100;
			obj.style.filter = 'alpha(opacity: '+ iCur +')';
		}else{
			obj.style[attr] = iCur + 'px';
		}
	
		
		if(iCur == target){
			clearInterval(obj[attr]);
			if( typeof endFn === 'function' ){	endFn(obj); }	
		}
		
	},30);
	
}

function getStyle(obj,attr){
	var n=parseFloat(obj.currentStyle?obj.currentStyle[attr]:getComputedStyle(obj)[attr]);
	return n;
}

function shake(obj,attr,endFn){

	var arr=[],timer=null,num=0;
	var pos = parseInt( getStyle(obj, attr) );
	for(var i=20;i>0;i-=2){
		arr.push(i,-i);
	}
	arr.push(0);
	
	timer=setInterval(function(){
		num++;
		if(num>arr.length-1){
			clearInterval(timer);
			endFn&&endFn();
		}
		obj.style[attr]=pos+arr[num]+'px';
	}, 30)
}
