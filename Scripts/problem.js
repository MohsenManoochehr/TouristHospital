let date = new Date();
let year = date.getFullYear();
let month = date.getMonth();
let day = date.getDate();

switch(month)
      {
        case 1:
          month="January";
          break;
        case 2:
          month="February";
          break;
        case 3:
          month="March";
          break;
        case 4:
          month="April";
          break;
        case 5:
          month="May";
          break;
        case 6:
          month="June";
          break;
        case 7:
          month="July";
          break;
        case 8:
          month="August";
          break;
        case 9:
          month="September";
          break;
        case 10:
          month="October";
          break;
        case 11:
          month="November";
          break;
        case 12:
          month="December";
          break;
        default:
          month="Invalid month";
      }

let showDate = `${day} / ${month} / ${year}`;

const dateDiv = document.getElementById('date');

dateDiv.innerHTML = showDate;


const spans = document.querySelectorAll('.options div span');
const divs = document.querySelector('.options div div');

function activate(i) {
    if (spans[i].style.display == "inline") {
        spans[i].style.display = "none";
    } else {
        for(var j = 0; j < spans.length; j++){
            spans[j].style.display = "none";
            spans[i].style.display = "inline";
            spans[i].classList.add('show');
        }
    }
}