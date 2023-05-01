var countDownDate = new Date("2023-05-15T07:00:00").getTime();
var x = setInterval(function() {
    var now = new Date().getTime();
    var distance = countDownDate - now;
    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);
    document.getElementById("countdown").innerHTML = days + "g " + hours + "o "
    + minutes + "m " + seconds + "s ";
        if (distance < 0) {
            clearInterval(x);
            document.getElementById("countdown").innerHTML = "EXPIRED";
        }
}, 1000);

const videos = ["video/video1.mp4", "video/video2.mp4", "video/video3.mp4", "video/video4.mp4"];
let currentVideoIndex = 0;

function createVideoElement() {
    const video = document.createElement("video");
    video.src = videos[currentVideoIndex];
    video.autoplay = true;
    video.loop = false;
    video.muted = true;
    video.playsInline = true;

    video.addEventListener("error", () => {
        currentVideoIndex = (currentVideoIndex + 1) % videos.length;
        video.src = videos[currentVideoIndex];
    });

    video.addEventListener("ended", () => {
        currentVideoIndex = (currentVideoIndex + 1) % videos.length;
        fullscreenVideo.innerHTML = "";
        fullscreenVideo.appendChild(createVideoElement());
    });

    return video;
}

const fullscreenVideo = document.querySelector(".video-container");
fullscreenVideo.appendChild(createVideoElement());