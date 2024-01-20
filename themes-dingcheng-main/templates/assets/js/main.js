

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
