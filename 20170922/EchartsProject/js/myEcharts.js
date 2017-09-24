$(document).ready(function(){
    // 指定图表的配置项和数据
	$("#formChart").click(function(){
		var chartsController = new ChartsController("charts");
		chartsController.setTitle("2017年蒸发量降水量图");
		chartsController.setSubTitle("今年七八月份蒸发量和降水量均为最高水平");
		chartsController.setRow(new Array("1月","2月","3月","4月","5月","6月","7月","8月","9月","10月","11月","12月"));
		chartsController.setColumn(new Array("蒸发量", "降水量"));
		chartsController.showDownloadButton(true);
		chartsController.showRefreshButton(true);
		chartsController.setChartData([
			[2.0, 4.9, 7.0, 23.2, 25.6, 76.7, 135.6, 162.2, 32.6, 20.0, 6.4, 3.3],
			[2.6, 5.9, 9.0, 26.4, 28.7, 70.7, 175.6, 182.2, 48.7, 18.8, 6.0, 2.3]
		]);
		chartsController.installChart();
	});
	
	//图表控制类的构造函数
	function ChartsController(divId){
		if(!divId){
			console.error("div的Id不存在！");
			return null;
		}
		
		var obj = new Object();
		obj.myCharts = echarts.init(document.getElementById(divId));
		obj.hasDownloadButton = false;
		obj.hasRefreshButton =false;
		obj.option = {title:{},tooltip:{trigger:'axis'},legend:{},toolbox: {show : true,feature : {dataView:{show:false,readOnly:false},magicType:{show:true,type:['line','bar']},restore:{show:obj.hasRefreshButton},saveAsImage:{show:obj.hasDownloadButton}}},calculable:true,xAxis:[{type:'category'}],yAxis:[{type:'value'}]};
		
		obj.installChart = function(){
			// 使用刚指定的配置项和数据显示图表。
			console.log(obj.option);
	    	obj.myCharts.setOption(obj.option);
		}
		
		obj.setTitle = function(title){
			if(title){
				obj.option.title.text = title;
			}
		}
		
		obj.setSubTitle = function(subTitle){
			if(subTitle){
				obj.option.title.subtext = subTitle;
			}
		}
		
		obj.setRow = function(rows){
			if(rows){
				obj.option.xAxis[0].data = rows;
			}
		}
		
		obj.setColumn = function(columns){
			if(columns){
				obj.option.legend.data = columns;
				obj.columns = columns;
			}
		}
		
		obj.showDownloadButton = function(isShow){
			isShow = !(!isShow);//取反的取反是各种值转化为布尔的最简单的方法
			obj.option.toolbox.feature.saveAsImage.show = isShow;
		}
		
		obj.showRefreshButton = function(isShow){
			isShow = !(!isShow);//取反的取反是各种值转化为布尔的最简单的方法
			obj.option.toolbox.feature.restore.show = isShow;
		}
		
		obj.setChartData = function(chartData){
			var chartDataArr = new Array(chartData.length);
			for(var i=0; i<chartData.length; i++){
				var chartDataCol = chartData[i];
				chartDataArr[i] = {
		            name:obj.columns[i],
		            type:'bar',
		            data:chartDataCol,
		            markPoint : {data : [{type : 'max', name: '最大值'},{type : 'min', name: '最小值'}]},markLine : {data : [{type : 'average', name: '平均值'}]}
			    }
			}
			obj.option.series = chartDataArr;
		}
		
		return obj;
	}
});

//[2.0, 4.9, 7.0, 23.2, 25.6, 76.7, 135.6, 162.2, 32.6, 20.0, 6.4, 3.3]