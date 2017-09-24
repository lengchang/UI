<%@ page language="java" import="java.util.*" pageEncoding="UTF-8"%>
<%
String path = request.getContextPath();
String basePath = request.getScheme()+"://"+request.getServerName()+":"+request.getServerPort()+path+"/";
%>

<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN">
<html>
  <head>
    <base href="<%=basePath%>">
    
    <title>黄鸭专用WEB后端代码测试用页面</title>
    
	<meta http-equiv="pragma" content="no-cache">
	<meta http-equiv="cache-control" content="no-cache">
	<meta http-equiv="expires" content="0">    
	<meta http-equiv="keywords" content="keyword1,keyword2,keyword3">
	<meta http-equiv="description" content="This is my page">
	<script src="<%=basePath%>/lib/jquery-1.8.0.js"></script>
  </head>
  
  <body>
  	<table>
  		<tr>
  			<td>服务器主机名（或ip地址）</td>
  			<td><input id="hostname" type="text"/></td>
  			<td><input id="hostname_localhost" type="button" value="localhost" onclick="$('#hostname').val('localhost');"></td>
  		</tr>
  		<tr>
  			<td>端口号：</td>
  			<td><input id="port" type="text"/></td>
  			<td><input id="port_8080" type="button" value="8080" onclick="$('#port').val('8080');"><input id="port_8081" type="button" value="8081" onclick="$('#port').val('8081');"></td>
  		</tr>
  		<tr>
  			<td>项目名：</td>
  			<td><input id="projectName" type="text"/></td>
  			<td><input id="projectName_testformaven" type="button" value="testEnvironmentForMaven" onclick="$('#projectName').val('testEnvironmentForMaven');"></td>
  		</tr>
  		<tr>
  			<td>请求路径（不要以斜线开头）：</td>
  			<td><input id="requestURL" type="text"/></td>
  			<td></td>
  		</tr>
  	</table>
  	<input type="button" value="发送请求" onclick="sendAjax();"/>
  	<div id="result" style="width:90%;height:500px;margin:auto 0px; border:solid #000000 1px;"></div>
  </body>
  <script>
    function sendAjax()
    {
    	var hostname = $("#hostname").val();
        var port = $("#port").val();
        var projectName = $("#projectName").val();
        var requestURL = $("#requestURL").val();
$.ajax({  
	type: "POST",  //Ajax请求的提交方式（GET还是POST）
	dataType: "text",  //发送请求的类型
	url: "http://" + hostname + ":" + port + "/" + projectName + "/" + requestURL,  //请求发送的目标URL
	async: true, //请求是否是异步的。默认为true。当请求为异步请求的时候，调用这个ajax的请求的函数将在执行本ajax请求后不等请求的返回值就继续执行。

	//请求成功的响应事件
	success: function (data)
	{
		document.getElementById("result").innerHTML = data;
	},
	//请求失败的响应事件
	error: function (e)
	{  
		
	}  
});
    }
  </script>
</html>
<!-- http://localhost:8080/testEnvironmentForMaven/requesttest.jsp -->