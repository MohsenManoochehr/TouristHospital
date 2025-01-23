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

const prices = [
  {
    bronze: '345$',
    silver: '500$',
    gold: '777$'
  },

  {
    bronze: '215$',
    silver: '413$',
    gold: '888$'
  },

  {
    bronze: '90$',
    silver: '110$',
    gold: '150$'
  },

  {
    bronze: '699$',
    silver: '849$',
    gold: '999$'
  },

  {
    bronze: '444$',
    silver: '523$',
    gold: '800$'
  },

  {
    bronze: '1500$',
    silver: '1700$',
    gold: '1999$'
  },

  {
    bronze: '535$',
    silver: '780$',
    gold: '990$'
  },

  {
    bronze: '190$',
    silver: '300$',
    gold: '450$'
  },

  {
    bronze: '690$',
    silver: '810$',
    gold: '999$'
  },

  {
    bronze: '6920$',
    silver: '8210$',
    gold: '9929$'
  },

  {
    bronze: '1000$',
    silver: '2000$',
    gold: '3000$'
  }
]

let price = document.querySelectorAll('.offer-ul > ul :first-child');

function pricer (index) {
  price[0].innerText = prices[index].bronze; 
  price[1].innerText = prices[index].silver; 
  price[2].innerText = prices[index].gold;
  customBox.style.display = "none";
  offerBox.style.display = "block";
}

const customBox = document.querySelector('.custom-package');
const offerBox = document.querySelector('.offers-article');
const surgeryli = document.querySelectorAll('.custom-package li');


function custom () {
  customBox.style.display = "block";
  offerBox.style.display = 'none';
}

const selected = [];
const deselected = [0]

function selector(selector) {
  if ( surgeryli[selector].style.backgroundColor == "var(--blue)" ) {
    surgeryli[selector].style.backgroundColor = "unset";
    deselected.push(fee[selector]);
  } else {
    surgeryli[selector].style.backgroundColor = "var(--blue)";
    selected.push(fee[selector]);
  }
}

const priced = document.querySelector('.priced');

function calc() {
  let plus = selected.reduce((acc, cur) => acc + cur, 0);
  let minus = deselected.reduce((acc1, cur1) => acc1 + cur1, 0);
  let calced = plus - minus;
  priced.innerText = `${calced}$`;
}


let monthFee = [300, 100, 100, 100, 100, 100, 100, 100, 100, 100, 140, 160]

const fee = 
[1000, 1200, 2000, 1500, 1400, 1200, 7000, 5400, 1000, 500, 700,
 300,
 monthFee[0], monthFee[1], monthFee[2], monthFee[3], monthFee[4], monthFee[5], monthFee[6], monthFee[7], monthFee[8], monthFee[9], monthFee[10], monthFee[11],
 100, 130, 120, 110, 150,
 100, 100
]



const resCont = document.querySelector('.res-pcont');
const opts = document.querySelector('.options');


window.addEventListener('click', function(e){
	
	if (resCont.contains(e.target)){
  	opts.classList.add("showOn");
  }
  else{
  	opts.classList.remove("showOn");
  }
})

