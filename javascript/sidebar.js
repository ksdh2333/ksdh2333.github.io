document.addEventListener('DOMContentLoaded', function() {
  function adjustSidebarMargin() {
    const sidebar = document.querySelector('aside.sidebar-nav');
    const main = document.querySelector('.with-sidebar');
    
    if (sidebar && main) {
      // 获取侧边栏实际宽度
      const sidebarWidth = sidebar.offsetWidth;
      
      // 设置main元素右侧外边距为侧边栏宽度+20px
      main.style.marginRight = sidebarWidth + 'px';
    }
  }

  // 页面加载完成后调整一次
  adjustSidebarMargin();

  // 窗口大小改变时重新调整
  window.addEventListener('resize', adjustSidebarMargin);
});