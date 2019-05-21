window.onload = function() {
  // 选择模式
  var option = document.getElementById('option');
  var box1 = document.getElementById('box1');
  var box2 = document.getElementById('box2');
  var box3 = document.getElementById('box3');
  var box4 = document.getElementById('box4');
  var exit = document.getElementById('exit');
  var paopao = document.getElementById('paopao');
  var option_easy = document.getElementById('option_easy');

  //游戏部分
  //定义泡泡的x、y坐标的最大值和最小值
  var y_top = 100;
  var y_bottom = 100;
  var x_left = 0;
  var x_right = 0;
  //设置泡泡最大和最小宽度
  var img_width_max = 350;
  var img_width_min = 80;
  //倒计时60秒
  var time = 60;
  var paopao_time = document.getElementById('paopao_time');
  //统计分数
  var count = 0;

  // 选择难度
  option.onclick = function() {
    document.body.style.backgroundImage = 'url(images/shark.jpg)';
    box1.style.display = 'none';
    box2.style.display = 'block';
    box3.style.display = 'none';
    box4.style.display = 'none';
  };

  // 总分排名
  rank.onclick = function() {
    box1.style.display = 'none';
    box2.style.display = 'none';
    box3.style.display = 'block';
    document.body.style.backgroundImage = 'url(images/shark.jpg)';
    button2.onclick = function() {
      box1.style.display = 'block';
      box2.style.display = 'none';
      box3.style.display = 'none';
      box4.style.display = 'none';
    };
  };

  // 请求帮助
  help.onclick = function() {
    box1.style.display = 'none';
    box2.style.display = 'none';
    box3.style.display = 'none';
    box4.style.display = 'block';
    document.body.style.backgroundImage = 'url(images/brokenship.jpg)';
    button3.onclick = function() {
      box1.style.display = 'block';
      box2.style.display = 'none';
      box3.style.display = 'none';
      box4.style.display = 'none';
    };
  };

  //退出游戏
  exit.onclick = function() {
    window.close();
  };

  // 游戏部分
  // 简单模式
  option_easy.onclick = function() {
    box1.style.display = 'none';
    box2.style.display = 'none';
    box3.style.display = 'none';
    box4.style.display = 'none';
    paopao.style.display = 'block';
    document.body.style.backgroundImage = 'url(images/bluewater.jpg)';

    // 倒计时
    timer = setInterval(function() {
      time--;
      paopao_time.innerHTML = time + '秒';
      if (time < 0) {
        clearInterval(timer);
        time = 0;
        alert('游戏结束');
      }
    }, 1000);
    //出现泡泡
    init();
  };

  //获取泡泡
  function init() {
    //获取泡泡在可视区域的最大的宽度和高度
    x_right = window.innerWidth - img_width_max;
    y_bottom = window.innerHeight - img_width_max;
    //定时器：每1秒执行1次
    setInterval(function() {
      //随机输出泡泡
      //创建img节点
      var node_img = document.createElement('img');
      //在body中增加img标签
      document.body.appendChild(node_img);
      //为img节点增加src属性，并赋值
      node_img.setAttribute('src', 'images/paopao.png');
      //随机获取泡泡的宽度
      var width = getRandom(img_width_max, img_width_min);
      //随机获取泡泡在可视区域的x和y坐标
      var x = getRandom(x_left, x_right);
      var y = getRandom(y_top, y_bottom);
      //为泡泡设计css样式
      var str = 'position:absolute;width:' + width + 'px;top:' + y + 'px;left:' + x + 'px;';
      node_img.setAttribute('style', str);
      node_img.setAttribute('onclick', 'removeImg(this)'); //当点击泡泡时，泡泡消失
    }, 1000);
  }
  function getRandom(max1, min1) {
    //随机获取数值
    return Math.floor(Math.random() * (max1 - min1) + min1);
  }
};

function removeImg(obj) {
  //消泡泡
  document.body.removeChild(obj);
}
