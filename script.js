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
