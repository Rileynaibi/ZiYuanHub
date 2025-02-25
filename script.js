// 搜索功能
function searchPage() {
    const searchTerm = document.getElementById('searchInput').value.trim().toLowerCase();
    if (searchTerm === '') {
      alert('请输入要搜索的内容');
      return;
    }
    window.find(searchTerm);
  }
  
  // 按回车键搜索
  document.getElementById('searchInput').addEventListener('keypress', function(event) {
    if (event.key === 'Enter') {
      searchPage();
    }
  });
  
  // 汉堡菜单功能
  document.getElementById('hamburgerMenu').addEventListener('click', function() {
    const nav = document.getElementById('mainNav');
    nav.classList.toggle('active');
  });
  
  // 访问人数统计
  let visitorCount = localStorage.getItem("visitorCounter") || 0;
  visitorCount = parseInt(visitorCount, 10);
  visitorCount++;
  localStorage.setItem("visitorCounter", visitorCount);
  document.getElementById("visitorCount").textContent = visitorCount;
