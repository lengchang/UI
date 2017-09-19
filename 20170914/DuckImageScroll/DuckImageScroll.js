function DuckImageScroll(divId, images){
	var imageLength = images.length;//图片的个数
	
	var obj = new Object();
	
	/*对于动画持续时间的控制属性*/
	obj.animateDuration = 3000;
	obj.setAnimateDuration = function(duration){
		obj.animateDuration = duration;
	}
	
	/*切换图片的间隔时间*/
	obj.switchTime = 5000;
	obj.setSwitchTime = function(duration){
		obj.animateDuration = duration;
	}
	
	/*安装图片滚动组件的函数*/
	obj.install = function(){
		if(!images || imageLength==0){
			$("#"+divId).html("<h2>很抱歉，\n当前图库中不存在图片！\n请稍后再来！</h2>");
		}
		else if(imageLength == 1){
			//如果只有一张图片，就只初始化这一张
			$("#"+divId).append(getImgStr(0));
		}
		else{
			//进行初始化
			init();
			//计数器
			var indexNow = 0;
			var indexNext = 1;
			
			//定时器：setInterval
			setInterval(function(){
				//移动当前图片
				moveTowardRight(indexNow, "500px");
				//移动下一张图片，移动后删除当前图片，并且追加下下一图片
				moveTowardRight(indexNext, "0px", function(){
					//这里所在的函数是一个回调，将这个函数作为参数传递给别人去执行，并不是直接调用的
					removeImg(indexNow);
					indexNow = (indexNow+1) % imageLength;
					indexNext = (indexNext+1) % imageLength;
					appendNewImg(indexNext);
				});
			}, obj.switchTime);
		}
	}
	
	//向右移动600像素
	function moveTowardRight(index, relatveLocation, functionAfterAnimate){
		$("#autoImg" + index).animate({
			left:relatveLocation
		}, obj.animateDuration, functionAfterAnimate);
	}
	
	//删除一张图片
	function removeImg(index){
		$("#autoImg" + index).remove();
		$("#autoImg" + (index+1)%imageLength).css("right", "0px").css("bottom", "0px");
	}
	
	//初始化函数
	function init(){
		//初始化一个图片
		$("#"+divId).append(getImgStr(0));
		appendNewImg(1);
	}
	
	//添加一张新的图片
	function appendNewImg(index){
		if(imageLength == 1){
			index = 0;
		}
		$("#"+divId).append(getImgStr(index));
		$("#autoImg"+index).css("right", "500px").css("bottom", "354px");
	}
	
	//生成图片字符串的函数
	function getImgStr(index){
		return "<img id='autoImg"+index+"' src='" + images[index] + "' class='myImg'/>";
	}
	
	return obj;
}
