var posts=["2024/11/05/電視連《走向共和》｜孫中山先生演講全文/","2025/07/21/LoveStory/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };