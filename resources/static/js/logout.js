$('#logout').click(function () {
    // var url =window.location.search;
    // var arrUrl=url.substr(1);
    // var userName=decodeURI(arrUrl.split('=')[1]);
    // var token=docCookies.getItem(userName).toString();

    // $.ajax({
    //     url:'http://' + server_ip_port + '/users/logout' + "?token=" + token,
    //     type:'DELETE',
    //     dataType:'json',
    //     data:{},

    //     success:function (msg) {
    //         if(msg.code==200){
    //         }
    //     }
    // })
    window.location.href='loginnew.html';
});