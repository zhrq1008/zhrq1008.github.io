/**
 * Created by JSONLY on 2016/7/3.
 */

(function(window){
	//初始化函数
	var tim,
		date,
		upper,
		everyDay;
	var weekText = ['日','一','二','三','四','五','六'];
	var len = 42;	
	function init(timeEle,dateEle,upperEle,everyDayEle){
		tim = timeEle;
		date = dateEle;
		upper = upperEle;
		everyDay = everyDayEle;
		createEveryDay();
		showTime();//初始化
		setInterval(showTime, 1000);
	} 
	function showTime(){
		var d = new Date();
		var year = d.getFullYear();
		var month = d.getMonth()+1;
		var day = d.getDate();
		var week = d.getDay();
		var hours = d.getHours();
		var minutes = d.getMinutes();
		var seconds = d.getSeconds();
		tim.innerHTML = toTwo(hours)+':'+toTwo(minutes)+':'+toTwo(seconds);
		date.innerHTML = year+'年'+month+'月'+day+'日,星期'+weekText[week];
	}

	function createEveryDay(){
		var d = new Date();
		var year = d.getFullYear();
		var month = d.getMonth()+1;
		var now = d.getDate();//获取当前的天数，为了高亮使用。
		var str = '';

		//upper填充内容
		upper.innerHTML = year+'年'+month+'月';
		d.setDate(1);//回到这个月的第一天。
		
		var week = d.getDay();//星期
		//console.log(week)
		//等于0说明是周日
		if(week == 0){
			week = 7;
		}
		week--;//上个月需要排多少天
		//上个月从几号开始排

		d.setDate(0);
		//获取到上个月有多少天。
		var prevMonthDayNum = d.getDate();
		//获取上个月起始日子
		var prevMonthStartDay = prevMonthDayNum - week+1;

		for(var i=prevMonthStartDay;i<=prevMonthDayNum;i++){
			str += '<a href="javascript:;" class="old">'+i+'</a>';
		}
		// //填充这个月的日子
		// //回到这个月第一天
		d.setDate(d.getDate()+1);//7月的第一天
		//去下个月
		d.setMonth(d.getMonth()+1);
		d.setDate(0);
		var lastDay = d.getDate();
		//生成这个月的
		for(var i=1;i<=lastDay;i++){
			if(i==now){
				str += '<a href="javascript:;" class="active">'+i+'</a>';
			}else{
				str += '<a href="javascript:;">'+i+'</a>';
			}
			
		}

		//计算剩下的格子
		var num = len-week -lastDay;

		for(var i=1;i<=num;i++){
			str += '<a href="javascript:;" class="old">'+i+'</a>';
		}
		everyDay.innerHTML = str;
	}
	function toTwo(n){
		return n<10?'0'+n:''+n;
	}
	window.init = init;
})(window);