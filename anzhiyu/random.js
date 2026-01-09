var posts=["2026/01/09/hexo/","2026/01/07/evol主题配置/","2026/01/07/hexo主题配置/","2026/01/08/字数统计/","2026/01/08/今日诗词/","2026/01/07/永久链接/","2026/01/08/搜索/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };