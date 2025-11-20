document.addEventListener('DOMContentLoaded', function() {
  function adjustSidebarMargin() {
    const sidebar = document.querySelector('aside.sidebar-nav');
    const main = document.querySelector('.with-sidebar');
    
    if (sidebar && main) {
      // 获取侧边栏计算后的样式
      const sidebarComputedStyle = window.getComputedStyle(sidebar);
      // 判断侧边栏是否右浮动
      const isFloatedRight = sidebarComputedStyle.float === 'right';
      
      // 只有在侧边栏右浮动时才设置主内容的右边距
      if (isFloatedRight) {
        // 获取侧边栏实际宽度
        const sidebarWidth = sidebar.offsetWidth;
        
        // 设置main元素右侧外边距为侧边栏宽度
        main.style.marginRight = sidebarWidth + 'px';
      } else {
        // 当侧边栏不浮动时, 将右边距设为0
        main.style.marginRight = '0px';
      }
    }
  }

  // 页面加载完成后调整一次
  adjustSidebarMargin();

  // 窗口大小改变时重新调整
  window.addEventListener('resize', adjustSidebarMargin);
});