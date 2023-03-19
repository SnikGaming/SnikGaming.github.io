
// Ngày bắt đầu yêu nhau
const yourDate = new Date("2023-03-11T22:00:00"),

// Danh sách cái bài nhạc nền
music = ['roitoilun'];

document.addEventListener('DOMContentLoaded', function(){
      var rootTime = document.querySelector("time");

      document.querySelector("anni").textContent = `${(yourDate.getDate()>9)?yourDate.getDate():"0"+yourDate.getDate()}-${(yourDate.getMonth()>8)?(yourDate.getMonth()+1):"0"+(yourDate.getMonth()+1)}-${yourDate.getFullYear()}`;
      
      document.querySelector("date").textContent = Math.floor( Math.floor((new Date() - yourDate) / 1000) / 60 / 60 / 24)+" Ngày";

      function olock() {
            var today = new Date(),
            hrs = (Math.floor( Math.floor((today - yourDate) / 1000) / 60 / 60)) % 24,
            min = (Math.floor( Math.floor((today - yourDate) / 1000) / 60)) % 60,
            sec =  Math.floor((today - yourDate) / 1000) % 60;
            rootTime.textContent = `${(hrs>9)?hrs:"0"+hrs}:${(min>9)?min:"0"+min}:${(sec>9)?sec:"0"+sec}`;
      } olock();
      var timer = setInterval(function(){olock()}, 1000);
      document.querySelector("audio").setAttribute("src", `music/${music[Math.floor(Math.random()*music.length)]}.mp3`);

      document.getElementsByTagName("body")[0].insertAdjacentHTML(
            "beforeend",
            "<div id='mask'></div>"
      );

}, false);


let heartContainer = document.getElementById("hearts");
let colors = ["#ed5565", "#da4453", "#fc6e51", "#e9573f", "#ffce54", "#a0d468", "#8cc152", "#48cfae", "#4fc1e9", "#5d9cec", "#ac92ec", "#ec87c0"];

function createHeart() {
  let heart = document.createElement("div");
  heart.classList.add("heart");
  heart.style.left = Math.random() * 100 + "vw";
  heart.style.top = Math.random() * 100 + "vh";
  heart.style.transform = "scale(" + (Math.random() * 0.5 + 0.5) + ")";
  heart.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
  heartContainer.appendChild(heart);
  setTimeout(() => {
    heart.remove();
  }, 5000);
}

setInterval(createHeart, 1000);
