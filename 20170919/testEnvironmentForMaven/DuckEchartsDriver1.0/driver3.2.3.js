function DuckEchartsDriver(di){
	var d=new Object();
	d.option=null;
	
	d.setTitle=function(t){d.option.title.text=t;};
    d.init=function(){
    	var myEChartObj = echarts.init(document.getElementById(di));

        // 指定图表的配置项和数据
        d.option = {
            title: {
                text: '销售额汇总图'
            },
            tooltip: {},
            legend: {
                data:['销量']
            },
            xAxis: {
                data: ["雄伟的毛绒黄鸭","巨型毛绒黄鸭","大型毛绒黄鸭","中型毛绒黄鸭","小型毛绒黄鸭","迷你毛绒黄鸭"]
            },
            yAxis: {},
            series: [{
                name: '销量',
                type: 'bar',
                data: [5, 20, 36, 10, 10, 20]
            }]
        };

        // 使用刚指定的配置项和数据显示图表。
        myEChartObj.setOption(d.option);
    };
	
	return d;
};