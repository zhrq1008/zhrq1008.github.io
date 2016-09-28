
/*		前端知识汇总&案例展示
	*   {
	*       caseName: @value String            		*         案例总标题
	*       caseList: @value Array         			*         案例说明信息
	*       	caseTitle: @value String            *         案例标题  
	*      		publishTime: @value String 			*         案例上传时间  格式为：2016.10.09 08:00
	*       	caseThumbnail: @value String        *         缩略图地址
	*       	caseDescription: @value String      *         案例描述 
				caseWebsite: @value String       	*         案例网址
	*       
	*   }
*/




var casees = [
		{
			caseName:"JS的属性操作",
			caseList:[
				{
					caseTitle:"JS热身运动练习",
					publishTime:"2016-9-26 11:08",
					caseThumbnail:"images/case/1/1-JS热身课程-课后练习.gif",
					caseDescription:"属性操作",
					caseWebsite:"zhrq1008.github.io/1star/divyangshi/"
				},
				{
					caseTitle:"模拟手机短信发送",
					publishTime:"2016-9-26 11:00",
					caseThumbnail:"images/case/1/2-模拟手机短信发送.gif",
					caseDescription:"综合涉及到的知识点是判断、字符串拼接，以及布局方面的小技巧，比如提交留言后，A用户在左，B用户在右"
					,caseWebsite:"zhrq1008.github.io/1star/shouji/"
				}
			]
		},
		{
			caseName:"自定义属性操作、if、this、for",
			caseList:[
				{
					caseTitle:"生成100个div",
					publishTime:"2016-9-26 15:08",
					caseThumbnail:"images/case/1/100DIV.gif",
					caseDescription:"",
					caseWebsite:"zhrq1008.github.io/2if/100div/"
					
					
				},
				{
					caseTitle:"V字型DVI",
					publishTime:"2016-9-26 15:10",
					caseThumbnail:"images/case/1/V zi.gif",
					caseDescription:"for循环，取模%判断方向，拼接字符串 ",
					caseWebsite:"zhrq1008.github.io/2if/vzi/"
				},
				{
					caseTitle:"图片擦擦",
					publishTime:"2016-9-26 15:11",
					caseThumbnail:"images/case/1/caca.gif",
					caseDescription:"for循环，取模%判断方向，拼接字符串 ",
						caseWebsite:"zhrq1008.github.io/2if/caca/"
				},
				{
					caseTitle:"乘法表",
					publishTime:"2016-9-26 15:11",
					caseThumbnail:"images/case/1/chengfabiao.gif",
					caseDescription:"for循环，取模%判断方向，拼接字符串 ",
						caseWebsite:"zhrq1008.github.io/2if/chengfa/"
				},
				{
					caseTitle:"多图切换",
					publishTime:"2016-9-26 15:12",
					caseThumbnail:"images/case/1/duotuqiehuan.gif",
					caseDescription:"自定义属性，索引值使用，for循环，数组的使用",
						caseWebsite:"zhrq1008.github.io/2if/duotuqiehuan/"
				},
				{
					caseTitle:"QQ列表",
					publishTime:"2016-9-26 15:14",
					caseThumbnail:"images/case/1/qqliebiao.gif",
					caseDescription:"点击onclick，开关的使用，for循环，“大清洗”的思路",
						caseWebsite:"zhrq1008.github.io/2if/qqliebiao/"
				},
				{
					caseTitle:"详情轮播图",
					publishTime:"2016-9-26 15:16",
					caseThumbnail:"images/case/1/xiang qing lunbo.gif",
					caseDescription:"for循环，函数传参，input的value属性值得获取和设置",
						caseWebsite:"zhrq1008.github.io/2if/suolv/"
				},
				{
					caseTitle:"顺序轮播图",
					publishTime:"2016-9-26 15:16",
					caseThumbnail:"images/case/1/shunxu lunbo.gif",
					caseDescription:"for循环，函数传参，input的value属性值得获取和设置",
						caseWebsite:"zhrq1008.github.io/2if/shunqietu/"
				},
				{
					caseTitle:"评分",
					publishTime:"2016-9-26 15:18",
					caseThumbnail:"images/case/1/pingfen.gif",
					caseDescription:"for循环使用，if语句使用，数组，onmouseover，onmouseout",
						caseWebsite:"zhrq1008.github.io/2if/pingfen/"
				},{
					caseTitle:"全选",
					publishTime:"2016-9-26 15:20",
					caseThumbnail:"images/case/1/quanxuan.gif",
					caseDescription:"隔行变色取模%，input的checked，for循环配合if语句判断是否全选",
						caseWebsite:"zhrq1008.github.io/2if/quanxuan/"
				}
				
			]
		},{
			caseName:"数据类型、函数传参、作用域、运算符、流程控制",
			caseList:[
				{
					caseTitle:"修改文本框值",
					publishTime:"2016-9-26 15:22",
					caseThumbnail:"images/case/1/wenbenkuang.gif",
					caseDescription:"for循环，函数传参，input的value属性值得获取和设置 ",
						caseWebsite:"zhrq1008.github.io/3type/bianjiwenben/"

				},
				{
					caseTitle:"传参div",
					publishTime:"2016-9-26 15:20",
					caseThumbnail:"images/case/1/chuancandiv.gif",
					caseDescription:"for循环，函数传参，input的value属性值得获取和设置 ",
					caseWebsite:"zhrq1008.github.io/3type/chuancandiv/"

				},
				{
					caseTitle:"商品计价",
					publishTime:"2016-9-26 15:24",
					caseThumbnail:"images/case/1/jijiaqi.gif",
					caseDescription:"判断最大值，函数传参，parseInt，parseFloat",
					caseWebsite:"zhrq1008.github.io/3type/jijia/"

				},
				{
					caseTitle:"选项卡嵌套",
					publishTime:"2016-9-26 15:24",
					caseThumbnail:"images/case/1/qian tao.gif",
					caseDescription:"判断最大值，函数传参，parseInt，parseFloat",
					caseWebsite:"zhrq1008.github.io/3type/xuanxiangka/"

				},
				{
					caseTitle:"qq号验证",
					publishTime:"2016-9-26 15:26",
					caseThumbnail:"images/case/1/qqyanzheng.gif",
					caseDescription:"parseInt，typeof，isNaN，length，&&逻辑运算符",
					caseWebsite:"zhrq1008.github.io/3type/qqyanzheng/"

				},
				{
					caseTitle:"找到合适的值",
					publishTime:"2016-9-26 15:28",
					caseThumbnail:"images/case/1/js2-4-z.jpg",
					caseDescription:"parseInt，typeof，isNaN，-Infinity，NaN，&&逻辑运算符",
					caseWebsite:"zhrq1008.github.io/3type/shujuzhuanhuan/"

				}
			]
		},
		{
			caseName:"定时器和日期对象、setInterval、setTimeout、MTween、new Date",
			caseList:[
				{
					caseTitle:"图片时钟",
					publishTime:"2016-9-26 13:00",
					caseThumbnail:"images/case/1/donghuashizhong.gif",
					caseDescription:"parseInt，typeof，isNaN，-Infinity，NaN，&&逻辑运算符",
					caseWebsite:"zhrq1008.github.io/4riqi/shizhong/"
				},
				{
					caseTitle:"随意掉落",
					publishTime:"2016-9-26 13:03",
					caseThumbnail:"images/case/1/diaoluodiv.gif",
					caseDescription:"parseInt，typeof，isNaN，-Infinity，NaN，&&逻辑运算符",
					caseWebsite:"zhrq1008.github.io/4riqi/diaodiv/"
				},
				{
					caseTitle:"掉落div",
					publishTime:"2016-9-26 13:05",
					caseThumbnail:"images/case/1/huadongdiv.gif",
					caseDescription:"parseInt，typeof，isNaN，-Infinity，NaN，&&逻辑运算符",
					caseWebsite:"zhrq1008.github.io/4riqi/DIVdiaoluo/"
				},
				{
					caseTitle:"图片自动轮播",
					publishTime:"2016-9-26 13:06",
					caseThumbnail:"images/case/1/xiangzidong.gif",
					caseDescription:"定时器setInterval，不断变换元素的left，top值，自定义属性，索引值的使用",
					caseWebsite:"zhrq1008.github.io/4riqi/zidonglunbo/"
				},
				{
					caseTitle:"防window日历",
					publishTime:"2016-9-26 13:07",
					caseThumbnail:"images/case/1/rili.gif",
					caseDescription:"定时器setInterval，不断变换元素的left，top值，无缝滚动",
					caseWebsite:"zhrq1008.github.io/4riqi/rili/"
				}
			]
		},{
			caseName:"字符串和数组、JSON、for in、Math对象",
			caseList:[
				{
					caseTitle:"随机打乱图片",
					publishTime:"2016-9-26 13:08",
					caseThumbnail:"images/case/1/piaxu.gif",
					caseDescription:"随机数Math.random(),数组方法reverse",
					caseWebsite:"zhrq1008.github.io/5string/paixu/"

				},
				{
					caseTitle:"自动打乱图片",
					publishTime:"2016-9-26 13:09",
					caseThumbnail:"images/case/1/suiji.gif",
					caseDescription:"随机数Math.random(),数组方法reverse",
					caseWebsite:"zhrq1008.github.io/5string/suiji/"

				},
				{
					caseTitle:"淘宝广告",
					publishTime:"2016-9-26 14:09",
					caseThumbnail:"images/case/1/taobao guanggao.gif",
					caseDescription:"随机数Math.random(),数组方法reverse",
					caseWebsite:"zhrq1008.github.io/5string/taoguang/"

				},
				{
					caseTitle:"文字查找替换",
					publishTime:"2016-9-26 14:03",
					caseThumbnail:"images/case/1/chazhaotihuan.gif",
					caseDescription:"字符串的indexOf、split方法，数组的join方法",
					caseWebsite:"zhrq1008.github.io/5string/chazhaotihuan/"

				},
				{
					caseTitle:"文字搬运工",
					publishTime:"2016-9-26 14:02",
					caseThumbnail:"images/case/1/wenzibanyun.gif",
					caseDescription:"字符串的substing、slice方法，定时器setInterval，清除定时器clearInterval",
					caseWebsite:"zhrq1008.github.io/5string/banyungong/"

				},
				{
					caseTitle:"清除小表情",
					publishTime:"2016-9-26 14:01",
					caseThumbnail:"images/case/1/biaoqingyouxi.gif",
					caseDescription:"随机数Math.random、向上取整Math.ceil,定时器setInterval，清除定时器clearInterval",
					caseWebsite:"zhrq1008.github.io/5string/biaoqing/"

				}
			]
		},
		{

			caseName:"DOM节点、元素的操作、表格表单操作",
			caseList:[
				{
					caseTitle:"创建文件夹",
					publishTime:"2016-9-26 14:00",
					caseThumbnail:"images/case/1/xinjian.gif",
					caseDescription:"元素动态创建操作",
					caseWebsite:"zhrq1008.github.io/6dom/xinjian/"
				},
				{
					caseTitle:"这是首行",
					publishTime:"2016-9-26 15:00",
					caseThumbnail:"images/case/1/shou hang.gif",
					caseDescription:"元素动态创建操作",
					caseWebsite:"zhrq1008.github.io/6dom/shouhang/"
				},
				{
					caseTitle:"上下移动",
					publishTime:"2016-9-26 15:08",
					caseThumbnail:"images/case/1/shangxia yidong.gif",
					caseDescription:"元素动态创建操作",
					caseWebsite:"zhrq1008.github.io/6dom/yidong/"
				},
				{
					caseTitle:"多级菜单",
					publishTime:"2016-9-26 15:06",
					caseThumbnail:"images/case/1/duojicandan.gif",
					caseDescription:"元素节点操作",
					caseWebsite:"zhrq1008.github.io/6dom/duocaidan/"
				},
				{
					caseTitle:"框选",
					publishTime:"2016-9-26 17:04",
					caseThumbnail:"images/case/1/kuang xuan.gif",
					caseDescription:"获取和设置元素宽高、位置",
					caseWebsite:"zhrq1008.github.io/6dom/kuangxuan/"
				}
				
			]
		},{
			caseName:"BOM - BOM基础、常用方法、常用属性",
			caseList:[
				{
					caseTitle:"文档详情",
					publishTime:"2016-9-26 17:02",
					caseThumbnail:"images/case/1/wendang xiangqing.gif",
					caseDescription:"获取和设置元素宽高、位置",
					caseWebsite:"zhrq1008.github.io/7bom/xiangti/"
				},
				{
					caseTitle:"窗口操作",
					publishTime:"2016-9-26 17:09",
					caseThumbnail:"images/case/1/chuangkou caozuo.gif",
					caseDescription:"获取和设置元素宽高、位置",
					caseWebsite:"zhrq1008.github.io/7bom/duokoucaozuo/"
				},
				{
					caseTitle:"表格操作",
					publishTime:"2016-9-26 17:11",
					caseThumbnail:"images/case/1/biaogecaozuo.gif",
					caseDescription:"获取和设置元素宽高、位置",
					caseWebsite:"zhrq1008.github.io/7bom/biaogecaozuo/"
				},
				{
					caseTitle:"招贤",
					publishTime:"2016-9-26 18:36",
					caseThumbnail:"images/case/1/zhaoxian.gif",
					caseDescription:"获取和设置元素宽高、位置",
					caseWebsite:"zhrq1008.github.io/7bom/zhaoxian/"
				}
				
			]
		},
		{
			caseName:" Event对象、事件流、事件默认行为",
			caseList:[
				{
					caseTitle:"放大镜",
					publishTime:"2016-9-26 14:46",
					caseThumbnail:"images/case/1/fang dajing.gif",
					caseDescription:"事件对象、鼠标坐标、比例计算",
					caseWebsite:"zhrq1008.github.io/8even/fangda/"
				},
				{
					caseTitle:"搜索",
					publishTime:"2016-9-26 15:46",
					caseThumbnail:"images/case/1/sousuo.gif",
					caseDescription:"焦点事件、键盘事件",
					caseWebsite:"zhrq1008.github.io/8even/sousuo/"
				},
				{
					caseTitle:"右键",
					publishTime:"2016-9-26 18:47",
					caseThumbnail:"images/case/1/you jian caidan.gif",
					caseDescription:"浏览器默认行为、鼠标位置",
					caseWebsite:"zhrq1008.github.io/8even/youjian/"
				}
			]
		},{
			caseName:"简易拖拽、碰撞检测、自定义滚动条",
			caseList:[
				{
					caseTitle:"拖拽",
					publishTime:"2016-9-28 17:67",
					caseThumbnail:"images/case/1/tuozhuai.gif",
					caseDescription:"浏览器默认行为、鼠标位置",
					caseWebsite:"zhrq1008.github.io/9tuozhuai/tuozhuai/"

				},
				{
					caseTitle:"滚动条",
					publishTime:"2016-9-28 17:42",
					caseThumbnail:"images/case/1/gundongtiao.gif",
					caseDescription:"数组的方法sort实在妙不可言，通过各种小案例来达到令人满意的效果，也是学以致用的一种体验。",
					caseWebsite:"zhrq1008.github.io/9tuozhuai/gundongtiao/"

				},
				{
					caseTitle:"切换图片",
					publishTime:"2016-9-28 17:32",
					caseThumbnail:"images/case/1/shubiaotu.gif",
					caseDescription:"鼠标事件、键盘事件",
					caseWebsite:"zhrq1008.github.io/9tuozhuai/huaqietu/"

				}
			]
		}
]