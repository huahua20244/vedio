function goToVideoDetail(videoId) {
    // 这里假设每个视频的详细页面按照 video-detail.html?id=videoID 的格式命名
    window.location.href = `video-detail.html?id=${videoId}`;
}
function generateThumbnail() {
    var video = document.createElement('video');
    var canvas = document.createElement('canvas');
    var context = canvas.getContext('2d');

    video.src = 'path_to_your_video.mp4'; // 视频的路径
    video.addEventListener('loadeddata', function() {
        canvas.width = video.videoWidth;
        canvas.height = video.videoHeight;
        context.drawImage(video, 0, 0, canvas.width, canvas.height);
        var dataURL = canvas.toDataURL('image/jpeg'); // 生成的缩略图的Base64编码
        // 此处可以处理dataURL，例如显示在页面上或发送到服务器
    });
    video.load();
}
