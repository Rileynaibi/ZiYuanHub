// 定义搜索功能
function searchPage() {
  const searchTerm = document.getElementById('searchInput').value.trim().toLowerCase();

  if (searchTerm === '') {
    alert('请输入要搜索的内容');
    return;
  }

  // 调用浏览器的搜索功能
  window.find(searchTerm);
}

// 按回车键搜索
document.getElementById('searchInput').addEventListener('keypress', function(event) {
  if (event.key === 'Enter') {
    searchPage();
  }
});

.visitor-count {
            margin-top: 2rem;
            font-size: 2rem;
            text-align: center;
            color: #333;
        }



 // 初始化访问人数（使用 localStorage 保存数据）
        let visitorCount = localStorage.getItem("visitorCounter") || 0;
        visitorCount = parseInt(visitorCount, 10); // 确保是数字格式
        visitorCount++;

        // 更新 localStorage 中的访问人数
        localStorage.setItem("visitorCounter", visitorCount);

        // 渲染访问人数到前端页面
        document.getElementById("visitorCount").textContent = visitorCount;
