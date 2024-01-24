document.addEventListener('DOMContentLoaded', function() {

    // 获取所有包含下拉菜单的元素
    var dropdowns = document.querySelectorAll('.nav-item.dropdown');

    // 遍历所有下拉菜单元素
    dropdowns.forEach(function(dropdown) {
    // 鼠标悬停时显示下拉菜单
    dropdown.addEventListener('mouseover', function() {
        this.querySelector('.dropdown-menu').style.display = 'block';
    });

    // 鼠标移出时隐藏下拉菜单
    dropdown.addEventListener('mouseout', function() {
        this.querySelector('.dropdown-menu').style.display = 'none';
    });
    });

    // 获取当前页面的路径
    var currentPath = window.location.pathname;

    // 查找 ID 为当前路径的元素
    var element = document.getElementById(currentPath);

    // 如果找到了元素，为其添加 'active' 类
    if (element) {
      element.classList.add('active');
    }

    // 转换时间日期
    var elements = document.querySelectorAll('.text-muted');
    elements.forEach(function(element) {
      var date = new Date(element.textContent);
      element.textContent = date.toISOString().split('T')[0];
    });

    $('.dropdown-menu a.dropdown-toggle').on('click', function(e) {
        if (!$(this).next().hasClass('show')) {
          $(this).parents('.dropdown-menu').first().find('.show').removeClass('show');
        }
        var $subMenu = $(this).next('.dropdown-menu');
        $subMenu.toggleClass('show');
      
        return false;
    });
});


function generateCaptcha() {
  var length = 6; // 定义验证码长度
  var charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789"; // 定义字符集
  var captcha = ""; // 初始化验证码
  // 循环生成指定长度的随机字符串
  for (var i = 0; i < length; i++) {
    captcha += charset.charAt(Math.floor(Math.random() * charset.length));
  }
    // 生成随机的边框颜色和背景色
  var borderColor = getRandomColor();
  var backgroundColor = getRandomColor();

  // 获取验证码元素
  var captchaElement = document.getElementById('generated-captcha');

  // 应用随机颜色到元素
  captchaElement.style.border = '2px solid ' + borderColor;
  captchaElement.style.backgroundColor = backgroundColor;
  captchaElement.style.color = 'white';

  // 将生成的验证码显示在页面上
  captchaElement.innerHTML = captcha;
}

function getRandomColor() {
  var letters = '0123456789ABCDEF';
  var color = '#';
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

// 验证
function validateCaptcha() {
  var input = document.getElementById("captcha").value;
  var generated = document.getElementById("generated-captcha").innerHTML;

  if (input == generated) {
    return true;
  } else {
    return false;
  }
}

$(document).ready(function () {
  $('.nav-item').on('click', function(){
      $('.nav-item').removeClass('active');
      $(this).addClass('active');
  });
});
