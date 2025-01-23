const hamMenu = document.querySelector('.ham-menu img');
const blurmenu = document.querySelector('.blur-menu');

window.addEventListener('click', function(e){
	
	if (hamMenu.contains(e.target)){
    console.log(blurmenu);
  	blurmenu.classList.add("show-ham");
  }

  else{
  	blurmenu.classList.remove("show-ham");
  }
})