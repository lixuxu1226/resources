# resources

1.切换视频流，解决无法切换直播流的问题：修改ezuikit.js中的报错部分，将659行注释掉

2.在点击函数里面发送请求时需要返回值，否则可能会刷新页面导致无法收到应答包，原因可能是原生的表单submit触发了页面刷新

3.关于Cookie，Chrome不支持本地静态html文件的cookie，必须使用tomcat或其他方式来访问网站，使用Safari

4.关于监控视频自动播放，部分浏览器不支持萤石视频的自动播放，比如Chrome，改用Safari就好了

5.模拟小车行驶，route.js保存了从高德地图上爬的从海淀公安局到天津公安局的路线信息，用json格式存储，利用路线中的小车的下一个轨迹点以及距离来计算速度，速度模拟在constants.js中，基本按照距离来计算

注意轨迹点可能前后重复，会导致小车停止，应该判断后取下一个不重复的经纬度坐标点

6.