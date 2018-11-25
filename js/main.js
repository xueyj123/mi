 // 获取标签
 var date = document.getElementById("date");
 var hour = document.getElementById("hour");
 var minute = document.getElementById("minute");
 var second = document.getElementById("second");
 console.log(date);
 // 定时器
 setInterval(function () {
     var time = new Date("2018/11/30 12:00:00");
     var newtime = new Date();
     // 设定的时间
     var times = time.getTime();
     // 当前的时间
     var newtimes = newtime.getTime();
     // 设定时间与当前的时间差
     var timer = times - newtimes;
     // 转成秒
     var seconds = name(parseInt(timer / 1000));
     // 转成天数
     var d = name(parseInt(seconds / 3600 / 24));
     // 转成小时数
     var h = name(parseInt(seconds / 3600 % 24));
     // 转成分钟数
     var m = name(parseInt(seconds / 60 % 60));
     // 剩余秒数
     var s = name(parseInt(seconds % 60));
     date.innerText = d;
     hour.innerText = h;
     minute.innerText = m;
     second.innerText = s;
     // console.log(shucu);

 }, 1000);
 function name(params) {
     return params > 9 ? params : "0" + params;

 }

