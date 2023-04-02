const yourDate = new Date("2023-03-11T22:00:00") //Năm - Tháng - Ngày Giờ Phút Giây
    music = ['seetinh','roitoilun']; //Doi nhac o day
document.addEventListener('DOMContentLoaded', function() {
    var rootTime = document.querySelector("time");

    document.querySelector("anni").textContent = `${(yourDate.getDate()>9)?yourDate.getDate():"0"+yourDate.getDate()}-${(yourDate.getMonth()>8)?(yourDate.getMonth()+1):"0"+(yourDate.getMonth()+1)}-${yourDate.getFullYear()}`;

    document.querySelector("date").textContent = Math.floor(Math.floor((new Date() - yourDate) / 1000) / 60 / 60 / 24) + " Ngày";

    function olock() {
        var today = new Date(),
            hrs = (Math.floor(Math.floor((today - yourDate) / 1000) / 60 / 60)) % 24,
            min = (Math.floor(Math.floor((today - yourDate) / 1000) / 60)) % 60,
            sec = Math.floor((today - yourDate) / 1000) % 60;
        rootTime.textContent = `${(hrs>9)?hrs:"0"+hrs}:${(min>9)?min:"0"+min}:${(sec>9)?sec:"0"+sec}`;
    }
    olock();
    var timer = setInterval(function() { olock() }, 1000);
    document.querySelector("audio").setAttribute("src", `music/${music[Math.floor(Math.random()*music.length)]}.mp3`);
}, false);


document.addEventListener("mousemove", function(e) {
    var body = document.querySelector('html');
    var heart = document.createElement("span");
    var x = e.offsetX;
    var y = e.offsetY;
    heart.style.left = x + 'px';
    heart.style.top = y + 'px';
    var size = Math.random() * 50; //size
    heart.style.width = 20 + size + 'px';
    heart.style.height = 20 + size + 'px';
    body.appendChild(heart);
    setTimeout(function() {
        heart.remove();

    }, 1000)
})


/**Nhận biết nút */
function play() {
    document.getElementById('musi').play();
}
/**Nhấn vào để phát */
function play() {
    var audio = document.getElementById('musi');
    if (audio.paused) {
        audio.play();
    } else {
        audio.currentTime = 0
    }
}
/**di chuyển */
// function play() {
//     var audio = document.getElementById('audio1');
//     if (audio.paused) {
//         audio.play();
//     } else {
//         audio.pause();
//         audio.currentTime = 0
//     }
// }