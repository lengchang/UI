<%@ page language="java" import="java.util.*" pageEncoding="UTF-8"%>
<%
String path = request.getContextPath();
String basePath = request.getScheme()+"://"+request.getServerName()+":"+request.getServerPort()+path+"/";
%>

<!DOCTYPE html>
<html>
  <head>
    <base href="<%=basePath%>">
    
    <title>My JSP 'index.jsp' starting page</title>
	<script type="text/javascript" src="index.js"></script>
	
	<script src="<%=basePath%>/lib/jquery-1.8.0.js"></script>
	<script src="<%=basePath%>/lib/echarts-3.2.3/echarts.min.js"></script>
	<script src="<%=basePath%>/DuckEchartsDriver1.0/driver3.2.3.js"></script>
  </head>
  
  <body>
    <input id="a1" type="checkbox" value="a1" onclick="a()"/>
    <input id="a2" type="checkbox" value="a2" onclick="a()"/><br>
    <input id="b1" type="checkbox" value="b1" onclick=""/>
    <input id="b2" type="checkbox" value="b2" onclick=""/>
    <input id="b3" type="checkbox" value="b3" onclick=""/>
    <input id="b4" type="checkbox" value="b4" onclick=""/>
    <p>123<span>789</span></p>
    <p>101112<span>131415</span><span>456</span><span>161718</span></p>
    <script type="text/javascript">
    	var a = document.getElementById("a1");
    	console.log(a.value);
    </script>
  </body>
</html>
<script type="text/javascript">

</script>
<!--

//-->
</script>
<!-- http://localhost:8080/testEnvironmentForMaven/index.jsp -->