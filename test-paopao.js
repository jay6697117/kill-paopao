
//定义泡泡的x、y坐标的最大值和最小值
    var y_top = 100;
    var y_bottom = 100;
    var x_left = 0;
    var x_right = 0;
    //设置泡泡最大和最小宽度
    var img_width_max = 350;
    var img_width_min = 80;

    // //倒计时60秒
    // var time = 60;
    // var box3_time = document.getElementById("box3_time");
    // console.log(box3_time);

    //得分
   var count = 0;

    function init() {//获取泡泡
        //获取泡泡在可视区域的最大的宽度和高度
        x_right = window.innerWidth - img_width_max;
        y_bottom = window.innerHeight - img_width_max;
        //定时器：每1秒执行1次
        setInterval("start()", 200);
        // setInterval("timer()",1000);
        return count;
    }

    function start() {//随机输出泡泡
        //创建img节点
        var node_img = document.createElement("img");
        //在body中增加img标签
        document.body.appendChild(node_img);
        //为img节点增加src属性，并赋值
        node_img.setAttribute("src", "images/paopao.png");


        //随机获取泡泡的宽度
        var width = getRandom(img_width_max, img_width_min);
        //随机获取泡泡在可视区域的x和y坐标
        var x = getRandom(x_left, x_right);
        var y = getRandom(y_top, y_bottom);
        //为泡泡设计css样式
        var str = "position:absolute;width:" + width + "px;top:" + y + "px;left:" + x + "px;";
        node_img.setAttribute("style", str);
        node_img.setAttribute("onclick", "removeImg(this)");//当点击泡泡时，泡泡消失
    }

    function getRandom(max1, min1) {//随机获取数值
        return Math.floor(Math.random() * (max1 - min1) + min1);
    }

    function removeImg(obj) {//消泡泡
        document.body.removeChild(obj);
        count++;
    }

   // //倒计时函数
   // function timer() {
   //     time-=1;
   //     box3_time.innerHTML = time;
   // }
