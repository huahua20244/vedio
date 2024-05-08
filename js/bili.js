let likes = 0;  // 初始点赞数为0

function likeVideo() {
    likes++;  // 每次点击时点赞数增加1
    document.getElementById('likesCount').innerText = likes;  // 更新页面上的点赞数显示
    alert('感谢您的喜欢！');
}

function postComment() {
    alert('评论已发表！');
}
