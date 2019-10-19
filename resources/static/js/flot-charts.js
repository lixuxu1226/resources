

    /* Flot Charts
     * -------
     * Here we will create a few charts using Flot Charts
     */

    // 	移动设备关系图
	$(document).ready(
	   function () {
	       // var device=device.deviceGetAll();
           //realtimeChart 实时数据
           realtimeChart = echarts.init(document.getElementById("realtime-chart"));

           function randomData() {
               var now = new Date();
               value = Math.random() * 50;
               return {
                   value: [
                       [now.getHours(), now.getMinutes(), now.getSeconds()].join(':'),
                       Math.round(value)
                   ]
               }
           }

           var data = [];
           var date = [];
           // var data1=[];
           var value = Math.random();
           for (var i = 0; i < 1000; i++) {
               data.push(randomData());//风险指数
               // data1.push(randomData()*5)//心率
               date.push('')
           }

           realtimeOption = {
               // title: {
               //     text: '动态数据 + 时间坐标轴'
               // },
               // legend: {
               //     data:['心率','风险指数']
               // },
               grid:{
                   x:'8%',
                   y:'5%',
                   x2:'30%',
                   y2:'28%',
               },
               tooltip: {
                   trigger: 'axis',
                   formatter: function (params) {
                       params = params[0];
                       return params.value[0] + ' <br/>' + '风险指数：' + params.value[1] + '%' + '<br/>' + '心率：' + params.value[1] * 5;
                   },
                   axisPointer: {
                       animation: false
                   }
               },
               xAxis: {
                   type: 'category',
                   splitLine: {//控制网格的线条样式
                       show:false,
                   },
                   axisLabel:{                 //设置数据的样式，这里设置的是白色
                       textStyle:{
                           color:'#fff'
                       }
                   },
                   axisLine:{                 //设置X坐标的样式，这里设置的是白色
                       lineStyle:{
                           color:'#fff'
                       }
                   },
                   data: date
               },
               dataZoom: [{
                   type: 'slider',
                   show: true,
                   xAxisIndex: [0],
                   left: '7%',
                   bottom: '13%',
                   height:'10%',
                   start: 90,
                   end: 100 //初始化滚动条
               }],
               yAxis: {
                   type: 'value',
                   splitLine: {//控制网格的线条样式
                       show:true,
                   },
                   axisLabel:{                 //设置数据的样式，这里设置的是白色
                       textStyle:{
                           color:'#fff'
                       }
                   },
                   boundaryGap: [0, '100%'],
               },
               series: [{
                   name: '实时数据',
                   type: 'line',
                   showSymbol: false,
                   hoverAnimation: false,
                   data: data,
                   lineStyle: {
                       color: 'rgba(255, 255, 255, 0.8)'
                   }
               }
               ]
           };

           setInterval(function () {
               var _data = randomData();
               data.shift();
               // data1.shift();
               date.shift();
               data.push(_data);
               // data1.push(_data*5);
               date.push(_data.value[0]);

               realtimeChart.setOption({
                   xAxis: {
                       data: date
                   },
                   series: [{
                       data:data
                   }
                   ]
               });
              $('#prisoner_risk').html('风险：' + _data.value[1] + '%')
              $('#prisoner_heartbeat').html('心率：' + (_data.value[1] * 5))
           }, 1000);
           realtimeChart.setOption(realtimeOption);
           

       })




