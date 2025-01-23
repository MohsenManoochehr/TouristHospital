//--------------------------time---------------------------------

setInterval(showTime, 1000);

function showTime() {
  let time = new Date();
  let hour = time.getHours();
  let min = time.getMinutes();
  let sec = time.getSeconds();
  let currentTime = "";

  if (hour < 10) {
    hour = `0${hour}`;
  }
  if (min < 10) {
    min = `:0${min}`;
  }
  if (sec < 10) {
    sec = `0${sec}`;
  }

  currentTime = `${hour}:${min}:${sec}`;

  document.getElementById("clock").innerHTML = currentTime;
}

//--------------------------date-------------------------------------------

let date = new Date();
let year = date.getFullYear();
let month = date.getMonth();
let day = date.getDate();

switch (month) {
  case 1:
    month = "January";
    break;
  case 2:
    month = "February";
    break;
  case 3:
    month = "March";
    break;
  case 4:
    month = "April";
    break;
  case 5:
    month = "May";
    break;
  case 6:
    month = "June";
    break;
  case 7:
    month = "July";
    break;
  case 8:
    month = "August";
    break;
  case 9:
    month = "September";
    break;
  case 10:
    month = "October";
    break;
  case 11:
    month = "November";
    break;
  case 12:
    month = "December";
    break;
  default:
    month = "Invalid month";
}

let showDate = `${day} / ${month} / ${year}`;

const dateDiv = document.getElementById("date");

dateDiv.innerHTML = showDate;

//-------------------------views------------------------------------

const view = document.querySelector("#view p");
let viewNum = Number(view.innerText);

setInterval(viewCounter, 1);

let viewCount = 0;

function viewCounter() {
  if (viewCount < viewNum) {
    viewCount++;
    view.innerText = viewCount;
  }
}

//-----------------------comments-----------------------------------

const comment = document.querySelector(".comment-text textarea");
const commentEdits = document.querySelector(".comment-responses");
const allComments = document.querySelectorAll(".preview-port div div p");
const commentAnswer = document.querySelector(".comment-answer");
const openInput = document.querySelector("#open-input");
const editText = document.querySelector("#edit-text");

function viewcomment(e) {
  commentEdits.style.display = "block";
  commentAnswer.style.display = "none";
  comment.value = allComments[e].innerText;
  comment.setAttribute("readonly", "");
}

openInput.addEventListener("click", function () {
  commentAnswer.style.display = "block";
});

editText.addEventListener("click", function () {
  comment.removeAttribute("readonly");
});

//------------------videos--------------------------

let vidIndex = 1;

const scrollRight = document.querySelector(".scroll-right");
const scrollLeft = document.querySelector(".scroll-left");
const video = document.querySelector(".scroll-vid");
const vidnum = document.querySelector(".vid-cont h3 b");

scrollRight.addEventListener("click", function () {
  vidIndex += 1;
  let vidLink = `Vids/Hospital Videos- ${vidIndex}.mp4`;
  video.src = vidLink;
  if (vidIndex == 5) {
    vidIndex = 0;
  }
});

scrollLeft.addEventListener("click", function () {
  if (vidIndex == 1) {
    vidIndex = 6;
  }
  vidIndex -= 1;
  let vidLink = `Vids/Hospital Videos- ${vidIndex}.mp4`;
  video.src = vidLink;
});

video.addEventListener(
  "ended",
  function () {
    vidIndex += 1;
    let vidLink = `Vids/Hospital Videos- ${vidIndex}.mp4`;
    video.src = vidLink;
    if (vidIndex == 5) {
      vidIndex = 0;
    }
  },
  false
);

const previewVid = document.querySelector(".vid-preview video");

video.addEventListener("click", getVidLink);

function getVidLink(e) {
  previewVid.src = e.srcElement.src;
}

// -------------------- Articles ------------------------

const allArticles = [
  document.querySelector(".comments"),
  document.querySelector(".magazines"),
  document.querySelector(".packages"),
  document.querySelector(".hotels"),
  document.querySelector(".doctors"),
  document.querySelector(".landmarks"),
  document.querySelector(".videos"),
  document.querySelector(".default-article"),
];

function activateArticle(i) {
    for (var j = 0; j < allArticles.length; j++) {
      allArticles[j].style.display = "none";
      allArticles[i].style.display = "block";
      allArticles[i].classList.add("show");
    }
}