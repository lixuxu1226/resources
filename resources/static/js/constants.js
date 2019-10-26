//对设备操作的接口封装
// var deviceAll;
let server_ip_port = '10.108.120.33:8089';
//let server_ip_port = '127.0.0.1:8089';

function isDeviceNew(a, b) {
    if(a.length != b.length) return false;
    for(var i = 0; i <  b.length; i++){
        if(a[i].deviceNo != b[i].deviceNo) {
            return false;
        }
    }
    return true;
}

function isEquals(a, b) {
    if(a.length != b.length) return false;
    for(var i = 0; i <  b.length; i++){
        if(!isObjectValueEqual(a[i], b[i])) {
            return false;
        }
    }
    return true;
}

function carSpeed(distance) {
    if(distance < 10) {
        return 10
    }
    if(distance < 20) {
        return 20
    }
    if(distance < 100) {
        return 35
    }
    if(distance < 200) {
        return 50
    }
    if(distance < 500) {
        return 80
    }
    if(distance < 1000) {
        return 100
    }
    return 110
}

function isObjectValueEqual(a, b) {
    if(a == null) {
        return b == null;
    }
    var aProps = Object.getOwnPropertyNames(a);
    var bProps = Object.getOwnPropertyNames(b);
      if(aProps.length != bProps.length) {
           return false;
      }
      for (var i = 0; i < aProps.length; i++) {
        var propName = aProps[i]

        var propA = a[propName]
        var propB = b[propName]
        if ((typeof (propA) === 'object')) {
          if (this.isObjectValueEqual(propA, propB)) {
              return true
            } else {
              return false
            }
        } else if (propA !== propB) {
          return false
        } else { }
      }
    return true
}

function validateImage(pathImg) {
	var ImgObj = new Image();
	ImgObj.src = pathImg;
	if(ImgObj.fileSize > 0 || (ImgObj.width > 0 && ImgObj.height > 0)) {
		return true;
	} else {
		return false;
	}
}

document.write('<script type="text/javascript" src="https://cdn.jsdelivr.net/npm/js-cookie@2/src/js.cookie.min.js"></script>');
$('#logout').click(function () {
    // var url =window.location.search;
    // var arrUrl=url.substr(1);
    // var userName=decodeURI(arrUrl.split('=')[1]);
    // var token=docCookies.getItem(userName).toString();
    $.ajax({
        url:'http://' + server_ip_port + '/admins/logout?token=' + Cookies.get('token'),
        type:'DELETE',
        dataType:'json',
        data:{},

        success:function (msg) {
            if(msg.code==200){
                Cookies.remove('token');
                Cookies.remove('uid')
            }
        }
    })
    window.location.href='loginnew.html';
});
