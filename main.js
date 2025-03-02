// 这里可以添加更多交互功能，例如导航栏的展开与收缩
// 以下是一个简单的示例，当窗口宽度小于 600px 时，导航栏变为垂直布局
window.addEventListener('resize', function () {
  const nav = document.querySelector('nav');
  const navItems = nav.querySelectorAll('ul li');

  if (window.innerWidth < 600) {
    nav.style.flexDirection = 'column';
    navItems.forEach(item => {
      item.style.margin = '5px 0';
    });
  } else {
    nav.style.flexDirection = 'row';
    navItems.forEach(item => {
      item.style.margin = '0 10px';
    });
  }
});

// 初始加载时也检查窗口宽度
window.dispatchEvent(new Event('resize'));