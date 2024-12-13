document.addEventListener("DOMContentLoaded", () => {
    const likeButton = document.getElementById("likeButton");
    const likeCount = document.getElementById("likeCount");
    const postCommentButton = document.getElementById("postCommentButton");
    const commentInput = document.getElementById("commentInput");
    const commentList = document.getElementById("commentList");
  
    let likeCounter = 0;
    let isLiked = false;
    let comments = [
      "这是一个非常棒的视频！",
      "学习到了很多东西，谢谢分享。",
      "国民生产总值变化视频很有趣！"
    ];
  
    updateComments();
  
    likeButton.addEventListener("click", () => {
      if (isLiked) {
        likeCounter -= 1;
        likeButton.textContent = "❤ 喜欢";
      } else {
        likeCounter += 1;
        likeButton.textContent = "💖 已喜欢";
      }
      isLiked = !isLiked;
      likeCount.textContent = likeCounter;
    });
  
    postCommentButton.addEventListener("click", () => {
      const commentText = commentInput.value.trim();
      if (commentText === "") {
        alert("评论不能为空！");
        return;
      }
  
      comments.push(commentText);
      updateComments();
  
      commentInput.value = "";
    });
  
    function updateComments() {
      commentList.innerHTML = "";
      comments.forEach((comment, index) => {
        const listItem = document.createElement("li");
  
        const commentText = document.createElement("p");
        commentText.textContent = `${index + 1}. ${comment}`;
        commentText.className = "comment-text";
  
        const deleteButton = document.createElement("button");
        deleteButton.textContent = "删除";
        deleteButton.className = "comment-delete";
        deleteButton.addEventListener("click", () => {
          comments.splice(index, 1);
          updateComments();
        });
  
        listItem.appendChild(commentText);
        listItem.appendChild(deleteButton);
        commentList.appendChild(listItem);
      });
    }
  });