//服务器ip和端口
let server_ip_port_usr = '10.108.120.33:8089';
let server_ip_port_dvc = '10.108.120.33:8089';
let server_ip_port_risk = '10.108.120.33:8089';
let server_ip_port = '10.108.120.33:8089';
let device_ip_port = '10.108.120.33:8080';
//地图附近的地点搜索半径
let nearby_distance = 200
let risk_duration = [{'duration': [10,15], 'prisonerNo': ['04006308']},{'duration': [16, 25], 'prisonerNo': ['04006306','04006307']}]
//let server_ip_port = '127.0.0.1:8089';

function markLocation(location) {
    var location_type = new Map([['停车场', '../static/img/location_parker.png'], ['银行', '../static/img/location_bank.png'], [
    '医院', '../static/img/location_hospital.png'], ['火车站', '../static/img/location_train.png'], [
    '住宅', '../static/img/location_house.png'], ['政府', '../static/img/location_government.png'], [
    '公司', '../static/img/location_company.png'], ['餐厅', '../static/img/location_restaurant.png'], [
    '购物', '../static/img/location_shop.png'], ['酒店', '../static/img/location_hotel.png'], [
    '学校', '../static/img/location_school.png'], ['公共', '../static/img/location_park.png'], [
    '报刊亭', '../static/img/location_news.png'], ['娱乐', '../static/img/location_game.png'], [
    '汽车', '../static/img/location_bus.png'], ['社会', '../static/img/location_society.png'], [
    '地铁站', '../static/img/location_railway.png'], ['风景', '../static/img/location_scene.png'], [
    '科研', '../static/img/location_science.png'], ['市场', '../static/img/location_market.png'], [
    '加油站', '../static/img/location_gas.png'], ['体育', '../static/img/location_gym.png'], [
    '工厂', '../static/img/location_factory.png'], ['会展', '../static/img/location_activity.png'], [
    '车站', '../static/img/location_station.png']])
    for(var [key, value] of location_type) {
        if(location.indexOf(key) >= 0) {
            return value;
        }
    }
    return '';
}

function timeFormat(time) {
    if(time < 10) {
        return "0" + time
    }
    return "" + time
}

function isDeviceNew(a, b) {
    if(a.length != b.length) return true;
    for(var i = 0; i <  b.length; i++){
        if(a[i].device.deviceNo != b[i].device.deviceNo || a[i].device.deviceStatus != b[i].device.deviceStatus) {
            return true;
        }
        if((a[i].bracelet != undefined && (b[i].bracelet === undefined || b[i].bracelet.deviceStatus != a[i].bracelet.deviceStatus)) 
            || (a[i].bracelet === undefined && b[i].bracelet != undefined)) {
            return true;
        }
        if((a[i].vervel != undefined && (b[i].vervel === undefined || b[i].vervel.deviceStatus != a[i].vervel.deviceStatus)) 
            || (a[i].vervel === undefined && b[i].vervel != undefined)) {
            return true;
        }
    }
    return false;
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
