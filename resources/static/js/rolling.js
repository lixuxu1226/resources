var alertIndex = 0;
var canAlertScroll = true;
var moveAlertScoll = function() {
  alertIndex++;
  // 临界点的判断
  if (alertIndex > document.getElementById("alert-table").offsetHeight) {
    alertIndex = 0;
  }
  $("#rollingAlertDiv").scrollTop(alertIndex);
};
var alertTableScollTimer = setInterval(moveAlertScoll, 50);
// 鼠标移入到rollingDiv，清定时器
$("#rollingAlertDiv").mouseenter(function() {
  clearInterval(alertTableScollTimer);
});

// 鼠标移出，重新开启定时器
$("#rollingAlertDiv").mouseleave(function() {
  if(canAlertScroll) {
    alertTableScollTimer = setInterval(moveAlertScoll, 50);
  }
});





var taskIndex = 0;
var canTaskScroll = true;
var moveTaskScoll = function() {
  taskIndex++;
  // 临界点的判断
  if (taskIndex > document.getElementById("task-table").offsetHeight) {
    taskIndex = 0;
  }
  $("#rollingTaskDiv").scrollTop(taskIndex);
};
var taskTableScollTimer = setInterval(moveTaskScoll, 50);
// 鼠标移入到rollingDiv，清定时器
$("#rollingTaskDiv").mouseenter(function() {
  clearInterval(taskTableScollTimer);
});

// 鼠标移出，重新开启定时器
$("#rollingTaskDiv").mouseleave(function() {
  if(canTaskScroll) {
    taskTableScollTimer = setInterval(moveTaskScoll, 50);
  }
});


