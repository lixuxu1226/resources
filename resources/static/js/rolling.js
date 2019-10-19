function rollingAlertDiv() {
  let i = 0;
  console.log(document.getElementById("alert-table").offsetHeight)
  var moveScoll = function() {
    i++;
    // 临界点的判断
    if (i > document.getElementById("alert-table").offsetHeight) {
      i = 0;
    }
    $("#rollingAlertDiv").scrollTop(i);
  };
  var timer = setInterval(moveScoll, 50);
  // 鼠标移入到rollingDiv，清定时器
  $("#rollingAlertDiv").mouseenter(function() {
    clearInterval(timer);
  });

  // 鼠标移出，重新开启定时器
  $("#rollingAlertDiv").mouseleave(function() {
    timer = setInterval(moveScoll, 50);
  });
}

rollingAlertDiv();

function rollingTaskDiv() {
  let i = 0;
  console.log(document.getElementById("task-table").offsetHeight)
  var moveScoll = function() {
    i++;
    // 临界点的判断
    if(i > document.getElementById("task-table").offsetHeight) {
      i = 0;
    }
    $("#rollingTaskDiv").scrollTop(i);
  };
  var timer = setInterval(moveScoll, 50);
  // 鼠标移入到rollingDiv，清定时器
  $("#rollingTaskDiv").mouseenter(function() {
    clearInterval(timer);
  });

  // 鼠标移出，重新开启定时器
  $("#rollingTaskDiv").mouseleave(function() {
    timer = setInterval(moveScoll, 50);
  });
}

rollingTaskDiv();

